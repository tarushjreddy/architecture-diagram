// ===== MERMAID CONFIGURATION =====

// Initialize Mermaid with dark theme and custom configuration
const initializeMermaid = () => {
    mermaid.initialize({
        // Theme configuration
        theme: 'dark',
        darkMode: true,
        
        // Security settings
        securityLevel: 'loose',
        htmlLabels: true,
        
        // Font configuration
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
        
        // Theme variables for dark mode
        themeVariables: {
            // Primary colors
            primaryColor: '#161b22',
            primaryTextColor: '#f0f6fc',
            primaryBorderColor: '#58a6ff',
            
            // Background colors
            background: '#0d1117',
            secondaryColor: '#21262d',
            tertiaryColor: '#30363d',
            
            // Text colors
            textColor: '#f0f6fc',
            secondaryTextColor: '#8b949e',
            
            // Node colors
            nodeBackground: '#161b22',
            nodeBorder: '#58a6ff',
            
            // Edge colors
            lineColor: '#8b949e',
            edgeLabelBackground: '#21262d',
            
            // Cluster/Subgraph colors
            clusterBkg: '#161b22',
            clusterBorder: '#30363d',
            
            // Sequence diagram colors
            actorBkg: '#161b22',
            actorBorder: '#58a6ff',
            actorTextColor: '#f0f6fc',
            actorLineColor: '#8b949e',
            signalColor: '#8b949e',
            signalTextColor: '#f0f6fc',
            
            // Note colors
            noteBkg: '#161b22',
            noteBorder: '#ff8b42',
            noteTextColor: '#f0f6fc',
            
            // Loop colors
            loopTextColor: '#f0f6fc',
            
            // State diagram colors
            stateBkg: '#161b22',
            stateBorder: '#3fb950',
            stateTextColor: '#f0f6fc',
            
            // Class diagram colors
            classText: '#f0f6fc',
            classBorder: '#58a6ff',
            classBkg: '#161b22',
            
            // Git graph colors
            gitBranchLabel0: '#58a6ff',
            gitBranchLabel1: '#3fb950',
            gitBranchLabel2: '#ff8b42',
            gitBranchLabel3: '#a5a3ff',
            gitBranchLabel4: '#f778ba',
            
            // Journey diagram colors
            sectionBkgColor: '#161b22',
            sectionBorderColor: '#30363d',
            taskBkgColor: '#161b22',
            taskBorderColor: '#58a6ff',
            taskTextColor: '#f0f6fc',
            activeTaskBkgColor: '#58a6ff',
            activeTaskBorderColor: '#58a6ff',
            
            // Pie chart colors
            pieTitleTextColor: '#f0f6fc',
            pieSectionTextColor: '#f0f6fc',
            pieOuterStrokeColor: '#30363d',
            
            // Quadrant chart colors
            quadrant1Fill: 'rgba(88, 166, 255, 0.2)',
            quadrant2Fill: 'rgba(63, 185, 80, 0.2)',
            quadrant3Fill: 'rgba(255, 139, 66, 0.2)',
            quadrant4Fill: 'rgba(247, 120, 186, 0.2)',
            quadrant1TextFill: '#58a6ff',
            quadrant2TextFill: '#3fb950',
            quadrant3TextFill: '#ff8b42',
            quadrant4TextFill: '#f778ba',
            quadrantPointFill: '#58a6ff',
            quadrantPointTextFill: '#f0f6fc',
            quadrantXAxisTextFill: '#8b949e',
            quadrantYAxisTextFill: '#8b949e',
            
            // XY chart colors
            xyChart: {
                backgroundColor: '#0d1117',
                titleColor: '#f0f6fc',
                xAxisTitleColor: '#8b949e',
                yAxisTitleColor: '#8b949e',
                xAxisLabelColor: '#8b949e',
                yAxisLabelColor: '#8b949e',
                plotColorPalette: '#58a6ff,#3fb950,#ff8b42,#a5a3ff,#f778ba'
            }
        },
        
        // Flowchart configuration
        flowchart: {
            htmlLabels: true,
            curve: 'linear',
            padding: 10,
            nodeSpacing: 50,
            rankSpacing: 50,
            diagramPadding: 20,
            useMaxWidth: true
        },
        
        // Sequence diagram configuration
        sequence: {
            diagramMarginX: 50,
            diagramMarginY: 50,
            actorMargin: 50,
            width: 150,
            height: 65,
            boxMargin: 10,
            boxTextMargin: 5,
            noteMargin: 10,
            messageMargin: 35,
            messageAlign: 'center',
            mirrorActors: true,
            bottomMarginAdj: 1,
            useMaxWidth: true,
            rightAngles: false,
            showSequenceNumbers: false
        },
        
        // Class diagram configuration
        classDiagram: {
            arrowMarkerAbsolute: false,
            dividerMargin: 10,
            padding: 5,
            textHeight: 14,
            useMaxWidth: true,
            defaultRenderer: 'dagre-wrapper'
        },
        
        // State diagram configuration
        state: {
            dividerMargin: 10,
            sizeUnit: 5,
            padding: 8,
            textHeight: 16,
            titleShift: -15,
            noteMargin: 10,
            forkWidth: 70,
            forkHeight: 7,
            miniMumHeight: 40,
            fontSizeFactor: 5.02,
            fontSize: 24,
            labelHeight: 16,
            edgeLengthFactor: '20',
            compositTitleSize: 35,
            radius: 5,
            useMaxWidth: true
        },
        
        // Entity relationship diagram configuration
        er: {
            diagramPadding: 20,
            layoutDirection: 'TB',
            minEntityWidth: 100,
            minEntityHeight: 75,
            entityPadding: 15,
            stroke: 'gray',
            fill: 'honeydew',
            fontSize: 12,
            useMaxWidth: true
        },
        
        // Gantt diagram configuration
        gantt: {
            titleTopMargin: 25,
            barHeight: 20,
            axisFormat: '%Y-%m-%d',
            topPadding: 50,
            leftPadding: 75,
            rightPadding: 50,
            bottomPadding: 50,
            gridLineStartPadding: 35,
            fontSize: 11,
            fontFamily: 'Inter, sans-serif',
            numberSectionStyles: 4,
            useMaxWidth: true
        },
        
        // Journey diagram configuration
        journey: {
            diagramMarginX: 50,
            diagramMarginY: 50,
            leftMargin: 150,
            width: 150,
            height: 50,
            boxMargin: 10,
            boxTextMargin: 5,
            noteMargin: 10,
            messageMargin: 35,
            messageAlign: 'center',
            bottomMarginAdj: 1,
            useMaxWidth: true,
            rightAngles: false
        },
        
        // Pie chart configuration
        pie: {
            textPosition: 0.75,
            useMaxWidth: true
        },
        
        // Git graph configuration
        gitGraph: {
            diagramPadding: 8,
            nodeLabel: {
                width: 75,
                height: 100,
                x: -25,
                y: -8
            },
            mainBranchName: 'main',
            showBranches: true,
            showCommitLabel: true,
            rotateCommitLabel: true,
            useMaxWidth: true
        },
        
        // Timeline configuration
        timeline: {
            diagramMarginX: 50,
            diagramMarginY: 50,
            leftMargin: 150,
            width: 150,
            height: 50,
            boxMargin: 10,
            boxTextMargin: 5,
            noteMargin: 10,
            messageMargin: 35,
            messageAlign: 'center',
            bottomMarginAdj: 1,
            useMaxWidth: true,
            rightAngles: false,
            padding: 5,
            useMaxWidth: true
        },
        
        // Mindmap configuration
        mindmap: {
            padding: 10,
            maxNodeWidth: 200,
            useMaxWidth: true
        },
        
        // Requirement diagram configuration
        requirement: {
            rect_fill: '#161b22',
            text_color: '#f0f6fc',
            rect_border_size: '0.5px',
            rect_border_color: '#58a6ff',
            rect_min_width: 200,
            rect_min_height: 200,
            fontSize: 14,
            rect_padding: 10,
            line_height: 20,
            useMaxWidth: true
        },
        
        // Global settings
        wrap: true,
        fontSize: 16,
        useMaxWidth: true,
        maxTextSize: 50000,
        maxEdges: 500,
        
        // Error handling
        logLevel: 'error',
        suppressErrorRendering: false
    });
};

// Custom render function with error handling
const renderMermaidDiagram = async (element, definition, id) => {
    try {
        // Clean the element first
        element.innerHTML = '';
        
        // Create a unique ID for the diagram
        const diagramId = id || `mermaid-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        
        // Render the diagram
        const { svg } = await mermaid.render(diagramId, definition);
        
        // Insert the SVG
        element.innerHTML = svg;
        
        // Apply responsive scaling
        const svgElement = element.querySelector('svg');
        if (svgElement) {
            svgElement.style.maxWidth = '100%';
            svgElement.style.height = 'auto';
            svgElement.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        }
        
        return true;
    } catch (error) {
        console.error('Mermaid rendering error:', error);
        
        // Display error message in a user-friendly way
        element.innerHTML = `
            <div style="
                background-color: rgba(248, 81, 73, 0.1);
                border: 1px solid #f85149;
                border-radius: 8px;
                padding: 16px;
                color: #f85149;
                font-family: 'Fira Code', monospace;
                font-size: 14px;
                text-align: center;
            ">
                <i class="fas fa-exclamation-triangle" style="margin-bottom: 8px; font-size: 24px;"></i>
                <div><strong>Diagram Rendering Error</strong></div>
                <div style="margin-top: 8px; font-size: 12px; opacity: 0.8;">
                    ${error.message || 'Unable to render this diagram'}
                </div>
            </div>
        `;
        
        return false;
    }
};

// Function to validate Mermaid syntax
const validateMermaidSyntax = (definition) => {
    try {
        // Basic validation
        if (!definition || typeof definition !== 'string') {
            return { valid: false, error: 'Empty or invalid diagram definition' };
        }
        
        // Check for basic diagram types
        const diagramTypes = [
            'graph', 'flowchart', 'sequenceDiagram', 'classDiagram',
            'stateDiagram', 'erDiagram', 'gantt', 'journey',
            'gitGraph', 'pie', 'quadrantChart', 'requirementDiagram',
            'mindmap', 'timeline', 'sankey', 'xyChart'
        ];
        
        const hasValidType = diagramTypes.some(type => 
            definition.trim().toLowerCase().startsWith(type.toLowerCase())
        );
        
        if (!hasValidType) {
            return { 
                valid: false, 
                error: 'Diagram must start with a valid diagram type' 
            };
        }
        
        return { valid: true };
    } catch (error) {
        return { 
            valid: false, 
            error: error.message || 'Syntax validation failed' 
        };
    }
};

// Initialize Mermaid when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeMermaid();
    console.log('Mermaid initialized with dark theme');
});

// Export functions for use in other scripts
window.MermaidUtils = {
    render: renderMermaidDiagram,
    validate: validateMermaidSyntax,
    initialize: initializeMermaid
}; 