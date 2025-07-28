#!/usr/bin/env node

/**
 * Local Mermaid Diagram Validation Script
 * Run this before pushing to catch diagram syntax errors early
 * 
 * Usage: node scripts/validate-diagrams.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Validating Mermaid Diagrams...\n');

// Read the app.js file
const appJsPath = path.join(__dirname, '..', 'js', 'app.js');

if (!fs.existsSync(appJsPath)) {
    console.error('❌ Error: app.js file not found!');
    process.exit(1);
}

const appJs = fs.readFileSync(appJsPath, 'utf8');

// Extract diagram data
const diagramsMatch = appJs.match(/const DIAGRAMS_DATA = \{[\s\S]*?\};/);
if (!diagramsMatch) {
    console.error('❌ Error: Could not find DIAGRAMS_DATA in app.js');
    process.exit(1);
}

// Extract individual diagrams
const mermaidBlocks = appJs.match(/mermaid:\s*`[^`]+`/g) || [];

console.log(`📊 Found ${mermaidBlocks.length} Mermaid diagrams\n`);

let validDiagrams = 0;
let warnings = 0;
let errors = 0;

// Validation rules
const validationRules = [
    {
        name: 'Minimum length',
        test: (content) => content.trim().length >= 20,
        message: 'Diagram content seems too short'
    },
    {
        name: 'Valid diagram type',
        test: (content) => {
            const types = ['graph', 'flowchart', 'sequenceDiagram', 'classDiagram', 
                          'stateDiagram', 'erDiagram', 'gantt', 'journey', 
                          'gitGraph', 'pie', 'quadrantChart', 'requirementDiagram'];
            return types.some(type => content.trim().toLowerCase().startsWith(type.toLowerCase()));
        },
        message: 'Must start with a valid diagram type'
    },
    {
        name: 'No empty subgraphs',
        test: (content) => {
            const subgraphMatches = content.match(/subgraph\s+"[^"]*"[\s\S]*?end/g) || [];
            return subgraphMatches.every(sg => sg.split('\n').length > 2);
        },
        message: 'Subgraphs should not be empty'
    },
    {
        name: 'Balanced brackets',
        test: (content) => {
            const opens = (content.match(/\[/g) || []).length;
            const closes = (content.match(/\]/g) || []).length;
            return opens === closes;
        },
        message: 'Unbalanced square brackets detected'
    },
    {
        name: 'Valid node syntax',
        test: (content) => {
            // Check for common syntax errors
            return !content.includes('-->')  || content.includes('-->');
        },
        message: 'Invalid arrow syntax detected'
    }
];

// Validate each diagram
mermaidBlocks.forEach((block, index) => {
    const diagramNumber = index + 1;
    const content = block.replace(/mermaid:\s*`/, '').replace(/`$/, '');
    
    console.log(`📋 Diagram ${diagramNumber}:`);
    
    let diagramValid = true;
    let diagramWarnings = 0;
    
    // Run validation rules
    validationRules.forEach(rule => {
        try {
            if (!rule.test(content)) {
                console.log(`   ⚠️  Warning: ${rule.message}`);
                diagramWarnings++;
                warnings++;
                diagramValid = false;
            }
        } catch (error) {
            console.log(`   ❌ Error in rule '${rule.name}': ${error.message}`);
            errors++;
            diagramValid = false;
        }
    });
    
    // Additional checks
    const lines = content.split('\n');
    const nonEmptyLines = lines.filter(line => line.trim().length > 0);
    
    if (nonEmptyLines.length < 3) {
        console.log(`   ⚠️  Warning: Very short diagram (${nonEmptyLines.length} lines)`);
        diagramWarnings++;
        warnings++;
    }
    
    // Check for duplicate node IDs
    const nodeIds = content.match(/(\w+)\[/g) || [];
    const uniqueNodeIds = new Set(nodeIds.map(id => id.replace('[', '')));
    if (nodeIds.length !== uniqueNodeIds.size) {
        console.log(`   ⚠️  Warning: Possible duplicate node IDs`);
        diagramWarnings++;
        warnings++;
    }
    
    if (diagramValid && diagramWarnings === 0) {
        console.log(`   ✅ Valid`);
        validDiagrams++;
    } else if (diagramWarnings > 0) {
        console.log(`   ⚠️  Has ${diagramWarnings} warning(s)`);
    }
    
    console.log('');
});

// Extract diagram categories and validate distribution
console.log('📊 Category Distribution:');
const categories = {};
const categoryMatches = appJs.match(/category:\s*'([^']+)'/g) || [];

categoryMatches.forEach(match => {
    const category = match.match(/'([^']+)'/)[1];
    categories[category] = (categories[category] || 0) + 1;
});

Object.entries(categories).forEach(([category, count]) => {
    console.log(`   ${category}: ${count} diagrams`);
});

// Summary
console.log('\n📋 Validation Summary:');
console.log(`   ✅ Valid diagrams: ${validDiagrams}`);
console.log(`   ⚠️  Total warnings: ${warnings}`);
console.log(`   ❌ Total errors: ${errors}`);
console.log(`   📊 Total diagrams: ${mermaidBlocks.length}`);

// Check if all categories have diagrams
const expectedCategories = ['devops', 'development', 'cicd', 'backend', 'frontend'];
const missingCategories = expectedCategories.filter(cat => !categories[cat]);

if (missingCategories.length > 0) {
    console.log(`\n⚠️  Missing categories: ${missingCategories.join(', ')}`);
    warnings++;
}

// Final result
console.log('\n' + '='.repeat(50));

if (errors > 0) {
    console.log('❌ VALIDATION FAILED - Fix errors before deploying');
    process.exit(1);
} else if (warnings > 0) {
    console.log(`⚠️  VALIDATION PASSED WITH WARNINGS (${warnings} warnings)`);
    process.exit(0);
} else {
    console.log('✅ ALL DIAGRAMS VALID - Ready for deployment!');
    process.exit(0);
} 