// ===== MAIN APPLICATION =====

// Diagram data structure
const DIAGRAMS_DATA = {
    diagrams: [
        // DevOps Category (10 diagrams)
        {
            id: 'devops-1',
            title: 'CI/CD Pipeline Architecture',
            category: 'devops',
            description: 'Complete GitLab/Jenkins pipeline flow from code commit to production deployment with automated testing and quality gates.',
            tags: ['ci/cd', 'jenkins', 'gitlab', 'automation', 'pipeline'],
            mermaid: `graph TB
    subgraph "Developer Workflow"
        A[Developer] --> B[Code Commit]
        B --> C[Feature Branch]
    end
    
    subgraph "CI Pipeline"
        C --> D[Trigger Build]
        D --> E[Unit Tests]
        E --> F[Integration Tests]
        F --> G[Security Scan]
        G --> H[Build Artifact]
    end
    
    subgraph "Quality Gates"
        H --> I[Code Quality Check]
        I --> J[Performance Tests]
        J --> K[Approval Gate]
    end
    
    subgraph "CD Pipeline"
        K --> L[Deploy to Staging]
        L --> M[Smoke Tests]
        M --> N[Deploy to Production]
        N --> O[Health Checks]
    end
    
    O --> P[Monitoring & Alerts]
    
    classDef devops fill:#ff8b42,stroke:#fff,color:#fff
    class A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P devops`
        },
        {
            id: 'devops-2',
            title: 'Kubernetes Cluster Architecture',
            category: 'devops',
            description: 'Master/worker nodes architecture with services, ingress controllers, and pod management in a production Kubernetes cluster.',
            tags: ['kubernetes', 'containers', 'orchestration', 'microservices'],
            mermaid: `graph TB
    subgraph "Control Plane"
        API[API Server]
        ETCD[etcd Database]
        SCHED[Scheduler]
        CM[Controller Manager]
    end
    
    subgraph "Worker Node 1"
        K1[kubelet]
        P1[Pod 1]
        P2[Pod 2]
        KP1[kube-proxy]
    end
    
    subgraph "Worker Node 2"
        K2[kubelet]
        P3[Pod 3]
        P4[Pod 4]
        KP2[kube-proxy]
    end
    
    subgraph "External Access"
        LB[Load Balancer]
        ING[Ingress Controller]
    end
    
    API --> K1
    API --> K2
    SCHED --> API
    CM --> API
    ETCD --> API
    
    LB --> ING
    ING --> P1
    ING --> P3
    
    KP1 --> P1
    KP1 --> P2
    KP2 --> P3
    KP2 --> P4
    
    classDef devops fill:#ff8b42,stroke:#fff,color:#fff
    class API,ETCD,SCHED,CM,K1,K2,P1,P2,P3,P4,KP1,KP2,LB,ING devops`
        },
        
        // Development Category (10 diagrams)
        {
            id: 'dev-1',
            title: 'Software Development Lifecycle',
            category: 'development',
            description: 'Agile/Scrum workflow showing the complete software development process from planning to deployment and maintenance.',
            tags: ['agile', 'scrum', 'sdlc', 'development', 'workflow'],
            mermaid: `graph TD
    A[Project Planning] --> B[Requirements Analysis]
    B --> C[System Design]
    C --> D[Sprint Planning]
    
    subgraph "Sprint Cycle"
        D --> E[Development]
        E --> F[Code Review]
        F --> G[Testing]
        G --> H[Sprint Review]
        H --> I[Retrospective]
        I --> D
    end
    
    G --> J[Integration]
    J --> K[Deployment]
    K --> L[Monitoring]
    L --> M[Maintenance]
    
    M --> N[Bug Fixes]
    N --> E
    
    M --> O[Feature Requests]
    O --> B
    
    classDef development fill:#58a6ff,stroke:#fff,color:#fff
    class A,B,C,D,E,F,G,H,I,J,K,L,M,N,O development`
        },
        {
            id: 'dev-2',
            title: 'Git Branching Strategy',
            category: 'development',
            description: 'GitFlow model with feature branches, release branches, and hotfixes for collaborative development.',
            tags: ['git', 'branching', 'gitflow', 'version-control', 'collaboration'],
            mermaid: `gitGraph
    commit id: "Initial"
    
    branch develop
    checkout develop
    commit id: "Setup"
    
    branch feature/auth
    checkout feature/auth
    commit id: "Auth: Login"
    commit id: "Auth: Register"
    
    checkout develop
    merge feature/auth
    commit id: "Merge auth"
    
    branch feature/api
    checkout feature/api
    commit id: "API: Users"
    commit id: "API: Posts"
    
    checkout develop
    merge feature/api
    commit id: "Merge API"
    
    checkout main
    merge develop
    commit id: "Release v1.0"
    
    branch hotfix/security
    checkout hotfix/security
    commit id: "Security fix"
    
    checkout main
    merge hotfix/security
    commit id: "Hotfix v1.0.1"
    
    checkout develop
    merge hotfix/security`
        },
        
        // CI/CD Category (10 diagrams)
        {
            id: 'cicd-1',
            title: 'GitHub Actions Workflow',
            category: 'cicd',
            description: 'Complete automation pipeline using GitHub Actions for build, test, and deployment with multiple environments.',
            tags: ['github-actions', 'automation', 'deployment', 'testing'],
            mermaid: `graph TB
    A[Push to Repository] --> B[Trigger Workflow]
    
    subgraph "Build Stage"
        B --> C[Checkout Code]
        C --> D[Setup Environment]
        D --> E[Install Dependencies]
        E --> F[Build Application]
    end
    
    subgraph "Test Stage"
        F --> G[Unit Tests]
        G --> H[Integration Tests]
        H --> I[E2E Tests]
        I --> J[Security Scan]
    end
    
    subgraph "Deploy Stage"
        J --> K{Branch Check}
        K -->|main| L[Deploy to Production]
        K -->|develop| M[Deploy to Staging]
        K -->|feature| N[Deploy to Preview]
    end
    
    L --> O[Production Health Check]
    M --> P[Staging Validation]
    N --> Q[Preview Link]
    
    O --> R[Slack Notification]
    P --> R
    Q --> R
    
    classDef cicd fill:#3fb950,stroke:#fff,color:#fff
    class A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R cicd`
        },
        {
            id: 'cicd-2',
            title: 'Jenkins Pipeline Architecture',
            category: 'cicd',
            description: 'Master/slave Jenkins setup with build stages, parallel execution, and automated deployment pipeline.',
            tags: ['jenkins', 'pipeline', 'automation', 'parallel-execution'],
            mermaid: `graph TB
    subgraph "Jenkins Master"
        JM[Jenkins Master]
        JQ[Job Queue]
        JW[Job Scheduler]
    end
    
    subgraph "Build Slaves"
        S1[Slave 1 - Linux]
        S2[Slave 2 - Windows]
        S3[Slave 3 - macOS]
    end
    
    subgraph "Pipeline Stages"
        ST1[Stage 1: Checkout]
        ST2[Stage 2: Build]
        ST3[Stage 3: Test]
        ST4[Stage 4: Package]
        ST5[Stage 5: Deploy]
    end
    
    JM --> JQ
    JQ --> JW
    JW --> S1
    JW --> S2
    JW --> S3
    
    S1 --> ST1
    ST1 --> ST2
    ST2 --> ST3
    ST3 --> ST4
    ST4 --> ST5
    
    ST5 --> AR[Artifact Repository]
    ST5 --> ENV[Target Environment]
    
    classDef cicd fill:#3fb950,stroke:#fff,color:#fff
    class JM,JQ,JW,S1,S2,S3,ST1,ST2,ST3,ST4,ST5,AR,ENV cicd`
        },
        
        // Backend Category (10 diagrams)
        {
            id: 'backend-1',
            title: 'RESTful API Architecture',
            category: 'backend',
            description: 'Resource-based REST API design with proper HTTP methods, status codes, and endpoint structure.',
            tags: ['rest', 'api', 'http', 'resources', 'endpoints'],
            mermaid: `graph TB
    subgraph "Client Layer"
        WEB[Web Client]
        MOB[Mobile Client]
        SPA[SPA Client]
    end
    
    subgraph "API Gateway"
        GW[API Gateway]
        AUTH[Authentication]
        RATE[Rate Limiting]
        LOG[Logging]
    end
    
    subgraph "API Layer"
        API[REST API Server]
        VALID[Request Validation]
        SERIAL[Response Serialization]
    end
    
    subgraph "Business Logic"
        USER[User Service]
        ORDER[Order Service]
        PAYMENT[Payment Service]
        INVENTORY[Inventory Service]
    end
    
    subgraph "Data Layer"
        DB[(Primary Database)]
        CACHE[(Redis Cache)]
        SEARCH[(Elasticsearch)]
    end
    
    WEB --> GW
    MOB --> GW
    SPA --> GW
    
    GW --> AUTH
    GW --> RATE
    GW --> LOG
    GW --> API
    
    API --> VALID
    API --> SERIAL
    API --> USER
    API --> ORDER
    API --> PAYMENT
    API --> INVENTORY
    
    USER --> DB
    ORDER --> DB
    PAYMENT --> DB
    INVENTORY --> DB
    
    API --> CACHE
    API --> SEARCH
    
    classDef backend fill:#a5a3ff,stroke:#fff,color:#fff
    class WEB,MOB,SPA,GW,AUTH,RATE,LOG,API,VALID,SERIAL,USER,ORDER,PAYMENT,INVENTORY,DB,CACHE,SEARCH backend`
        },
        {
            id: 'backend-2',
            title: 'Microservices Communication',
            category: 'backend',
            description: 'Synchronous and asynchronous communication patterns between microservices with message queues and service discovery.',
            tags: ['microservices', 'communication', 'async', 'sync', 'messaging'],
            mermaid: `graph TB
    subgraph "API Gateway"
        GW[API Gateway]
        LB[Load Balancer]
    end
    
    subgraph "Synchronous Communication"
        US[User Service]
        OS[Order Service]
        PS[Payment Service]
        IS[Inventory Service]
    end
    
    subgraph "Asynchronous Communication"
        MQ[Message Queue]
        NS[Notification Service]
        AS[Analytics Service]
        ES[Email Service]
    end
    
    subgraph "Service Discovery"
        SD[Service Registry]
        HC[Health Checks]
    end
    
    subgraph "Data Stores"
        UDB[(User DB)]
        ODB[(Order DB)]
        PDB[(Payment DB)]
        IDB[(Inventory DB)]
    end
    
    GW --> LB
    LB --> US
    LB --> OS
    LB --> PS
    LB --> IS
    
    US -.->|REST| OS
    OS -.->|REST| PS
    OS -.->|REST| IS
    
    OS -->|Event| MQ
    PS -->|Event| MQ
    IS -->|Event| MQ
    
    MQ --> NS
    MQ --> AS
    MQ --> ES
    
    US --> SD
    OS --> SD
    PS --> SD
    IS --> SD
    
    SD --> HC
    
    US --> UDB
    OS --> ODB
    PS --> PDB
    IS --> IDB
    
    classDef backend fill:#a5a3ff,stroke:#fff,color:#fff
    class GW,LB,US,OS,PS,IS,MQ,NS,AS,ES,SD,HC,UDB,ODB,PDB,IDB backend`
        },
        
        // Frontend Category (10 diagrams)
        {
            id: 'frontend-1',
            title: 'React Component Architecture',
            category: 'frontend',
            description: 'Component hierarchy and state flow in a React application with hooks, context, and component composition.',
            tags: ['react', 'components', 'state', 'hooks', 'jsx'],
            mermaid: `graph TB
    subgraph "App Component"
        APP[App.js]
        ROUTER[React Router]
        CTX[Context Providers]
    end
    
    subgraph "Page Components"
        HOME[HomePage]
        PROFILE[ProfilePage]
        DASHBOARD[DashboardPage]
    end
    
    subgraph "Layout Components"
        HEADER[Header]
        NAV[Navigation]
        FOOTER[Footer]
        SIDEBAR[Sidebar]
    end
    
    subgraph "Feature Components"
        USERCARD[UserCard]
        PRODUCTLIST[ProductList]
        CART[ShoppingCart]
        FORM[ContactForm]
    end
    
    subgraph "UI Components"
        BUTTON[Button]
        INPUT[Input]
        MODAL[Modal]
        TOAST[Toast]
    end
    
    subgraph "Hooks & State"
        USESTATE[useState]
        USEEFFECT[useEffect]
        USECONTEXT[useContext]
        CUSTOM[Custom Hooks]
    end
    
    APP --> ROUTER
    APP --> CTX
    ROUTER --> HOME
    ROUTER --> PROFILE
    ROUTER --> DASHBOARD
    
    HOME --> HEADER
    HOME --> PRODUCTLIST
    HOME --> FOOTER
    
    PROFILE --> HEADER
    PROFILE --> USERCARD
    PROFILE --> FORM
    
    DASHBOARD --> NAV
    DASHBOARD --> SIDEBAR
    DASHBOARD --> CART
    
    USERCARD --> BUTTON
    PRODUCTLIST --> BUTTON
    FORM --> INPUT
    CART --> MODAL
    
    USERCARD --> USESTATE
    PRODUCTLIST --> USEEFFECT
    CART --> USECONTEXT
    FORM --> CUSTOM
    
    classDef frontend fill:#f778ba,stroke:#fff,color:#fff
    class APP,ROUTER,CTX,HOME,PROFILE,DASHBOARD,HEADER,NAV,FOOTER,SIDEBAR,USERCARD,PRODUCTLIST,CART,FORM,BUTTON,INPUT,MODAL,TOAST,USESTATE,USEEFFECT,USECONTEXT,CUSTOM frontend`
        },
        {
            id: 'frontend-2',
            title: 'Vue.js Application Structure',
            category: 'frontend',
            description: 'Composition API architecture in Vue 3 with composables, reactive state, and component organization.',
            tags: ['vue', 'composition-api', 'reactive', 'composables', 'vue3'],
            mermaid: `graph TB
    subgraph "Vue Application"
        APP[main.js]
        VUEAPP[Vue App Instance]
        ROUTER[Vue Router]
        STORE[Pinia Store]
    end
    
    subgraph "Views/Pages"
        HOME[HomeView]
        ABOUT[AboutView]
        CONTACT[ContactView]
    end
    
    subgraph "Components"
        COMP1[HeaderComponent]
        COMP2[ProductComponent]
        COMP3[CartComponent]
        COMP4[FooterComponent]
    end
    
    subgraph "Composables"
        USEUSER[useUser]
        USEAPI[useApi]
        USECART[useCart]
        USEAUTH[useAuth]
    end
    
    subgraph "Stores"
        USERSTORE[User Store]
        CARTSTORE[Cart Store]
        AUTHSTORE[Auth Store]
    end
    
    subgraph "Reactive System"
        REF[ref()]
        REACTIVE[reactive()]
        COMPUTED[computed()]
        WATCH[watch()]
    end
    
    APP --> VUEAPP
    VUEAPP --> ROUTER
    VUEAPP --> STORE
    
    ROUTER --> HOME
    ROUTER --> ABOUT
    ROUTER --> CONTACT
    
    HOME --> COMP1
    HOME --> COMP2
    ABOUT --> COMP1
    CONTACT --> COMP3
    CONTACT --> COMP4
    
    COMP2 --> USEUSER
    COMP2 --> USEAPI
    COMP3 --> USECART
    COMP3 --> USEAUTH
    
    USEUSER --> USERSTORE
    USECART --> CARTSTORE
    USEAUTH --> AUTHSTORE
    
    USEUSER --> REF
    USEAPI --> REACTIVE
    USECART --> COMPUTED
    USEAUTH --> WATCH
    
    classDef frontend fill:#f778ba,stroke:#fff,color:#fff
    class APP,VUEAPP,ROUTER,STORE,HOME,ABOUT,CONTACT,COMP1,COMP2,COMP3,COMP4,USEUSER,USEAPI,USECART,USEAUTH,USERSTORE,CARTSTORE,AUTHSTORE,REF,REACTIVE,COMPUTED,WATCH frontend`
        },
        
        // Additional DevOps Diagrams
        {
            id: 'devops-3',
            title: 'Docker Container Lifecycle',
            category: 'devops',
            description: 'Complete Docker workflow from image creation to container deployment and scaling in production environments.',
            tags: ['docker', 'containers', 'lifecycle', 'deployment'],
            mermaid: `graph TB
    subgraph "Development"
        A[Write Dockerfile] --> B[Build Image]
        B --> C[Test Locally]
        C --> D[Tag Image]
    end
    
    subgraph "Registry"
        D --> E[Push to Registry]
        E --> F[Security Scan]
        F --> G[Vulnerability Check]
    end
    
    subgraph "Deployment"
        G --> H[Pull Image]
        H --> I[Create Container]
        I --> J[Configure Network]
        J --> K[Mount Volumes]
        K --> L[Start Container]
    end
    
    subgraph "Runtime"
        L --> M[Health Checks]
        M --> N[Log Collection]
        N --> O[Monitoring]
        O --> P[Auto Scaling]
    end
    
    subgraph "Lifecycle Management"
        P --> Q[Update Strategy]
        Q --> R[Rolling Update]
        R --> S[Cleanup Old]
        S --> T[Resource Optimization]
    end
    
    classDef devops fill:#ff8b42,stroke:#fff,color:#fff
    class A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T devops`
        },
        {
            id: 'devops-4',
            title: 'Monitoring Stack Architecture',
            category: 'devops',
            description: 'Comprehensive monitoring setup with Prometheus, Grafana, and AlertManager for observability and incident response.',
            tags: ['monitoring', 'prometheus', 'grafana', 'alerting', 'observability'],
            mermaid: `graph TB
    subgraph "Data Sources"
        APP[Applications]
        INFRA[Infrastructure]
        DB[Databases]
        LB[Load Balancers]
    end
    
    subgraph "Collection Layer"
        NODE[Node Exporter]
        CADVISOR[cAdvisor]
        CUSTOM[Custom Exporters]
        LOGS[Log Collectors]
    end
    
    subgraph "Storage & Processing"
        PROM[Prometheus Server]
        LOKI[Loki Logs]
        JAEGER[Jaeger Tracing]
        TSDB[(Time Series DB)]
    end
    
    subgraph "Visualization"
        GRAFANA[Grafana Dashboards]
        ALERTS[Alert Manager]
        SLACK[Slack Integration]
        EMAIL[Email Notifications]
    end
    
    subgraph "Analysis"
        METRICS[Metrics Analysis]
        LOGS_A[Log Analysis]
        TRACES[Trace Analysis]
        REPORTS[Custom Reports]
    end
    
    APP --> NODE
    INFRA --> CADVISOR
    DB --> CUSTOM
    LB --> LOGS
    
    NODE --> PROM
    CADVISOR --> PROM
    CUSTOM --> PROM
    LOGS --> LOKI
    
    PROM --> TSDB
    PROM --> GRAFANA
    PROM --> ALERTS
    
    ALERTS --> SLACK
    ALERTS --> EMAIL
    
    GRAFANA --> METRICS
    LOKI --> LOGS_A
    JAEGER --> TRACES
    
    classDef devops fill:#ff8b42,stroke:#fff,color:#fff
    class APP,INFRA,DB,LB,NODE,CADVISOR,CUSTOM,LOGS,PROM,LOKI,JAEGER,TSDB,GRAFANA,ALERTS,SLACK,EMAIL,METRICS,LOGS_A,TRACES,REPORTS devops`
        },
        
        // Additional Development Diagrams  
        {
            id: 'dev-3',
            title: 'Microservices Architecture',
            category: 'development',
            description: 'Service decomposition pattern with bounded contexts, inter-service communication, and data management strategies.',
            tags: ['microservices', 'architecture', 'services', 'decomposition'],
            mermaid: `graph TB
    subgraph "Client Applications"
        WEB[Web App]
        MOBILE[Mobile App]
        API_CLIENT[API Client]
    end
    
    subgraph "API Gateway Layer"
        GATEWAY[API Gateway]
        AUTH[Authentication]
        RATE_LIMIT[Rate Limiting]
        ROUTING[Request Routing]
    end
    
    subgraph "Core Services"
        USER_SVC[User Service]
        PRODUCT_SVC[Product Service]
        ORDER_SVC[Order Service]
        PAYMENT_SVC[Payment Service]
        INVENTORY_SVC[Inventory Service]
    end
    
    subgraph "Supporting Services"
        NOTIFICATION[Notification Service]
        ANALYTICS[Analytics Service]
        RECOMMENDATION[Recommendation Service]
        AUDIT[Audit Service]
    end
    
    subgraph "Data Layer"
        USER_DB[(User Database)]
        PRODUCT_DB[(Product Database)]
        ORDER_DB[(Order Database)]
        CACHE[(Shared Cache)]
        MESSAGE_QUEUE[Message Queue]
    end
    
    WEB --> GATEWAY
    MOBILE --> GATEWAY
    API_CLIENT --> GATEWAY
    
    GATEWAY --> AUTH
    GATEWAY --> RATE_LIMIT
    GATEWAY --> ROUTING
    
    ROUTING --> USER_SVC
    ROUTING --> PRODUCT_SVC
    ROUTING --> ORDER_SVC
    ROUTING --> PAYMENT_SVC
    ROUTING --> INVENTORY_SVC
    
    ORDER_SVC -.->|Events| MESSAGE_QUEUE
    PAYMENT_SVC -.->|Events| MESSAGE_QUEUE
    
    MESSAGE_QUEUE --> NOTIFICATION
    MESSAGE_QUEUE --> ANALYTICS
    MESSAGE_QUEUE --> AUDIT
    
    USER_SVC --> USER_DB
    PRODUCT_SVC --> PRODUCT_DB
    ORDER_SVC --> ORDER_DB
    
    USER_SVC --> CACHE
    PRODUCT_SVC --> CACHE
    
    classDef development fill:#58a6ff,stroke:#fff,color:#fff
    class WEB,MOBILE,API_CLIENT,GATEWAY,AUTH,RATE_LIMIT,ROUTING,USER_SVC,PRODUCT_SVC,ORDER_SVC,PAYMENT_SVC,INVENTORY_SVC,NOTIFICATION,ANALYTICS,RECOMMENDATION,AUDIT,USER_DB,PRODUCT_DB,ORDER_DB,CACHE,MESSAGE_QUEUE development`
        },
        {
            id: 'dev-4',
            title: 'Event-Driven Architecture',
            category: 'development',
            description: 'Asynchronous messaging patterns with event sourcing, CQRS, and distributed event processing for scalable systems.',
            tags: ['event-driven', 'messaging', 'cqrs', 'event-sourcing', 'async'],
            mermaid: `graph TB
    subgraph "Command Side"
        CMD[Commands]
        CMD_HANDLER[Command Handlers]
        DOMAIN[Domain Models]
        EVENT_STORE[(Event Store)]
    end
    
    subgraph "Event Processing"
        EVENT_BUS[Event Bus]
        EVENT_PROCESSORS[Event Processors]
        SAGA[Saga Orchestrator]
        WORKFLOW[Workflow Engine]
    end
    
    subgraph "Query Side"
        READ_MODEL[(Read Models)]
        QUERY_HANDLER[Query Handlers]
        PROJECTIONS[Projections]
        CACHE_LAYER[(Cache Layer)]
    end
    
    subgraph "External Integrations"
        EXTERNAL_API[External APIs]
        WEBHOOKS[Webhooks]
        NOTIFICATIONS[Push Notifications]
        ANALYTICS[Analytics Engine]
    end
    
    subgraph "Event Types"
        USER_EVENTS[User Events]
        ORDER_EVENTS[Order Events]
        PAYMENT_EVENTS[Payment Events]
        SYSTEM_EVENTS[System Events]
    end
    
    CMD --> CMD_HANDLER
    CMD_HANDLER --> DOMAIN
    DOMAIN --> EVENT_STORE
    
    EVENT_STORE --> EVENT_BUS
    
    EVENT_BUS --> EVENT_PROCESSORS
    EVENT_BUS --> SAGA
    EVENT_BUS --> WORKFLOW
    
    EVENT_PROCESSORS --> READ_MODEL
    EVENT_PROCESSORS --> PROJECTIONS
    PROJECTIONS --> CACHE_LAYER
    
    QUERY_HANDLER --> READ_MODEL
    QUERY_HANDLER --> CACHE_LAYER
    
    EVENT_BUS --> USER_EVENTS
    EVENT_BUS --> ORDER_EVENTS
    EVENT_BUS --> PAYMENT_EVENTS
    EVENT_BUS --> SYSTEM_EVENTS
    
    EVENT_BUS --> EXTERNAL_API
    EVENT_BUS --> WEBHOOKS
    EVENT_BUS --> NOTIFICATIONS
    EVENT_BUS --> ANALYTICS
    
    classDef development fill:#58a6ff,stroke:#fff,color:#fff
    class CMD,CMD_HANDLER,DOMAIN,EVENT_STORE,EVENT_BUS,EVENT_PROCESSORS,SAGA,WORKFLOW,READ_MODEL,QUERY_HANDLER,PROJECTIONS,CACHE_LAYER,EXTERNAL_API,WEBHOOKS,NOTIFICATIONS,ANALYTICS,USER_EVENTS,ORDER_EVENTS,PAYMENT_EVENTS,SYSTEM_EVENTS development`
        },
        
        // Additional CI/CD Diagrams
        {
            id: 'cicd-3',
            title: 'Multi-Environment Pipeline',
            category: 'cicd',
            description: 'Environment promotion strategy from development through staging to production with automated gates and manual approvals.',
            tags: ['multi-environment', 'promotion', 'staging', 'production'],
            mermaid: `graph TB
    subgraph "Source Control"
        GIT[Git Repository]
        BRANCH[Feature Branch]
        PR[Pull Request]
        MERGE[Merge to Main]
    end
    
    subgraph "Development Environment"
        DEV_BUILD[Dev Build]
        DEV_TEST[Dev Tests]
        DEV_DEPLOY[Deploy to Dev]
        DEV_SMOKE[Smoke Tests]
    end
    
    subgraph "Testing Environment"
        TEST_PROMOTE[Promote to Test]
        TEST_DEPLOY[Deploy to Test]
        INTEGRATION_TEST[Integration Tests]
        UAT[User Acceptance Tests]
    end
    
    subgraph "Staging Environment"
        STAGE_GATE[Manual Approval]
        STAGE_DEPLOY[Deploy to Staging]
        PERF_TEST[Performance Tests]
        SECURITY_SCAN[Security Tests]
    end
    
    subgraph "Production Environment"
        PROD_GATE[Production Gate]
        BLUE_GREEN[Blue-Green Deploy]
        CANARY[Canary Release]
        FULL_DEPLOY[Full Deployment]
    end
    
    subgraph "Monitoring"
        HEALTH_CHECK[Health Checks]
        METRICS[Metrics Collection]
        ALERTS[Alert System]
        ROLLBACK[Auto Rollback]
    end
    
    GIT --> BRANCH
    BRANCH --> PR
    PR --> MERGE
    
    MERGE --> DEV_BUILD
    DEV_BUILD --> DEV_TEST
    DEV_TEST --> DEV_DEPLOY
    DEV_DEPLOY --> DEV_SMOKE
    
    DEV_SMOKE --> TEST_PROMOTE
    TEST_PROMOTE --> TEST_DEPLOY
    TEST_DEPLOY --> INTEGRATION_TEST
    INTEGRATION_TEST --> UAT
    
    UAT --> STAGE_GATE
    STAGE_GATE --> STAGE_DEPLOY
    STAGE_DEPLOY --> PERF_TEST
    PERF_TEST --> SECURITY_SCAN
    
    SECURITY_SCAN --> PROD_GATE
    PROD_GATE --> BLUE_GREEN
    BLUE_GREEN --> CANARY
    CANARY --> FULL_DEPLOY
    
    FULL_DEPLOY --> HEALTH_CHECK
    HEALTH_CHECK --> METRICS
    METRICS --> ALERTS
    ALERTS --> ROLLBACK
    
    classDef cicd fill:#3fb950,stroke:#fff,color:#fff
    class GIT,BRANCH,PR,MERGE,DEV_BUILD,DEV_TEST,DEV_DEPLOY,DEV_SMOKE,TEST_PROMOTE,TEST_DEPLOY,INTEGRATION_TEST,UAT,STAGE_GATE,STAGE_DEPLOY,PERF_TEST,SECURITY_SCAN,PROD_GATE,BLUE_GREEN,CANARY,FULL_DEPLOY,HEALTH_CHECK,METRICS,ALERTS,ROLLBACK cicd`
        },
        
        // Additional Backend Diagrams
        {
            id: 'backend-3',
            title: 'Database Architecture Patterns',
            category: 'backend',
            description: 'Database scaling patterns including master-slave replication, sharding strategies, and read replicas for high availability.',
            tags: ['database', 'scaling', 'replication', 'sharding', 'patterns'],
            mermaid: `graph TB
    subgraph "Application Layer"
        APP[Application Server]
        CONN_POOL[Connection Pool]
        QUERY_ROUTER[Query Router]
        CACHE_LAYER[Application Cache]
    end
    
    subgraph "Database Cluster"
        MASTER[(Master Database)]
        SLAVE1[(Read Replica 1)]
        SLAVE2[(Read Replica 2)]
        SLAVE3[(Read Replica 3)]
    end
    
    subgraph "Sharding Strategy"
        SHARD1[(Shard 1 - Users A-H)]
        SHARD2[(Shard 2 - Users I-P)]
        SHARD3[(Shard 3 - Users Q-Z)]
        SHARD_COORD[Shard Coordinator]
    end
    
    subgraph "Caching Layer"
        REDIS[(Redis Cache)]
        MEMCACHED[(Memcached)]
        CDN[Content Delivery Network]
    end
    
    subgraph "Backup & Recovery"
        BACKUP[Automated Backups]
        ARCHIVE[Archive Storage]
        REPLICA_DC[Cross-DC Replica]
        DISASTER_RECOVERY[Disaster Recovery]
    end
    
    subgraph "Monitoring"
        DB_MONITOR[Database Monitoring]
        PERF_METRICS[Performance Metrics]
        SLOW_QUERY[Slow Query Log]
        ALERT_SYSTEM[Alert System]
    end
    
    APP --> CONN_POOL
    CONN_POOL --> QUERY_ROUTER
    QUERY_ROUTER --> CACHE_LAYER
    
    QUERY_ROUTER -->|Writes| MASTER
    QUERY_ROUTER -->|Reads| SLAVE1
    QUERY_ROUTER -->|Reads| SLAVE2
    QUERY_ROUTER -->|Reads| SLAVE3
    
    MASTER -.->|Replication| SLAVE1
    MASTER -.->|Replication| SLAVE2
    MASTER -.->|Replication| SLAVE3
    
    QUERY_ROUTER --> SHARD_COORD
    SHARD_COORD --> SHARD1
    SHARD_COORD --> SHARD2
    SHARD_COORD --> SHARD3
    
    CACHE_LAYER --> REDIS
    CACHE_LAYER --> MEMCACHED
    APP --> CDN
    
    MASTER --> BACKUP
    BACKUP --> ARCHIVE
    MASTER -.->|Replication| REPLICA_DC
    REPLICA_DC --> DISASTER_RECOVERY
    
    MASTER --> DB_MONITOR
    SLAVE1 --> DB_MONITOR
    DB_MONITOR --> PERF_METRICS
    DB_MONITOR --> SLOW_QUERY
    DB_MONITOR --> ALERT_SYSTEM
    
    classDef backend fill:#a5a3ff,stroke:#fff,color:#fff
    class APP,CONN_POOL,QUERY_ROUTER,CACHE_LAYER,MASTER,SLAVE1,SLAVE2,SLAVE3,SHARD1,SHARD2,SHARD3,SHARD_COORD,REDIS,MEMCACHED,CDN,BACKUP,ARCHIVE,REPLICA_DC,DISASTER_RECOVERY,DB_MONITOR,PERF_METRICS,SLOW_QUERY,ALERT_SYSTEM backend`
        },
        
        // Additional Frontend Diagrams
        {
            id: 'frontend-3',
            title: 'Progressive Web App Flow',
            category: 'frontend',
            description: 'PWA architecture with service workers, offline functionality, push notifications, and app-like experience.',
            tags: ['pwa', 'service-worker', 'offline', 'notifications', 'caching'],
            mermaid: `graph TB
    subgraph "User Interface"
        UI[User Interface]
        SHELL[App Shell]
        CONTENT[Dynamic Content]
        MANIFEST[Web App Manifest]
    end
    
    subgraph "Service Worker"
        SW[Service Worker]
        CACHE_API[Cache API]
        FETCH_HANDLER[Fetch Handler]
        PUSH_HANDLER[Push Handler]
        SYNC_HANDLER[Background Sync]
    end
    
    subgraph "Caching Strategy"
        CACHE_FIRST[Cache First]
        NETWORK_FIRST[Network First]
        STALE_REVALIDATE[Stale While Revalidate]
        CACHE_ONLY[Cache Only]
    end
    
    subgraph "Network Layer"
        NETWORK[Network Requests]
        API[API Server]
        CDN[Content Delivery Network]
        PUSH_SERVER[Push Server]
    end
    
    subgraph "Storage"
        LOCAL_STORAGE[Local Storage]
        INDEXED_DB[IndexedDB]
        CACHE_STORAGE[Cache Storage]
        SESSION_STORAGE[Session Storage]
    end
    
    subgraph "Features"
        OFFLINE[Offline Functionality]
        INSTALL[App Installation]
        NOTIFICATIONS[Push Notifications]
        BACKGROUND_SYNC[Background Sync]
    end
    
    UI --> SHELL
    UI --> CONTENT
    UI --> MANIFEST
    
    SHELL --> SW
    CONTENT --> SW
    
    SW --> CACHE_API
    SW --> FETCH_HANDLER
    SW --> PUSH_HANDLER
    SW --> SYNC_HANDLER
    
    FETCH_HANDLER --> CACHE_FIRST
    FETCH_HANDLER --> NETWORK_FIRST
    FETCH_HANDLER --> STALE_REVALIDATE
    FETCH_HANDLER --> CACHE_ONLY
    
    CACHE_FIRST --> CACHE_STORAGE
    NETWORK_FIRST --> NETWORK
    NETWORK --> API
    NETWORK --> CDN
    
    PUSH_HANDLER --> PUSH_SERVER
    PUSH_SERVER --> NOTIFICATIONS
    
    SW --> LOCAL_STORAGE
    SW --> INDEXED_DB
    SW --> CACHE_STORAGE
    SW --> SESSION_STORAGE
    
    MANIFEST --> INSTALL
    SW --> OFFLINE
    SYNC_HANDLER --> BACKGROUND_SYNC
    
    classDef frontend fill:#f778ba,stroke:#fff,color:#fff
    class UI,SHELL,CONTENT,MANIFEST,SW,CACHE_API,FETCH_HANDLER,PUSH_HANDLER,SYNC_HANDLER,CACHE_FIRST,NETWORK_FIRST,STALE_REVALIDATE,CACHE_ONLY,NETWORK,API,CDN,PUSH_SERVER,LOCAL_STORAGE,INDEXED_DB,CACHE_STORAGE,SESSION_STORAGE,OFFLINE,INSTALL,NOTIFICATIONS,BACKGROUND_SYNC frontend`
        }
    ]
};

// Main Application Class
class DiagramsApp {
    constructor() {
        this.currentDiagrams = DIAGRAMS_DATA.diagrams;
        this.modal = document.getElementById('diagramModal');
        this.modalTitle = document.getElementById('modalTitle');
        this.modalDiagram = document.getElementById('modalDiagram');
        this.modalCategory = document.getElementById('modalCategory');
        this.modalDescription = document.getElementById('modalDescription');
        this.copyToast = document.getElementById('copyToast');
        this.currentDiagramCode = '';
        
        this.initializeApp();
    }
    
    initializeApp() {
        this.setupEventListeners();
        this.renderDiagrams(this.currentDiagrams);
        console.log('Diagrams app initialized with', this.currentDiagrams.length, 'diagrams');
    }
    
    setupEventListeners() {
        // Modal event listeners
        document.getElementById('closeModal').addEventListener('click', () => {
            this.closeModal();
        });
        
        document.getElementById('modalOverlay').addEventListener('click', () => {
            this.closeModal();
        });
        
        // Copy code button
        document.getElementById('copyCode').addEventListener('click', () => {
            this.copyDiagramCode();
        });
        
        // Fullscreen button
        document.getElementById('fullscreenBtn').addEventListener('click', () => {
            this.toggleFullscreen();
        });
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.closeModal();
            }
            if (e.key === 'c' && (e.ctrlKey || e.metaKey) && this.modal.classList.contains('active')) {
                e.preventDefault();
                this.copyDiagramCode();
            }
        });
    }
    
    renderDiagrams(diagrams) {
        const grid = document.getElementById('diagramsGrid');
        grid.innerHTML = '';
        
        diagrams.forEach((diagram, index) => {
            const card = this.createDiagramCard(diagram, index);
            grid.appendChild(card);
        });
        
        // Render Mermaid diagrams after DOM insertion
        setTimeout(() => {
            this.renderMermaidPreviews();
        }, 100);
    }
    
    createDiagramCard(diagram, index) {
        const card = document.createElement('div');
        card.className = 'diagram-card';
        card.style.animationDelay = `${(index % 6) * 0.1}s`;
        card.onclick = () => this.openModal(diagram);
        
        card.innerHTML = `
            <div class="diagram-preview">
                <div class="mermaid" data-diagram-id="${diagram.id}">
                    ${diagram.mermaid}
                </div>
            </div>
            <div class="diagram-card-content">
                <h3 class="diagram-title">${diagram.title}</h3>
                <p class="diagram-description">${diagram.description}</p>
                <div class="diagram-meta">
                    <div class="category-badge ${diagram.category}">${diagram.category.toUpperCase()}</div>
                    <div class="diagram-actions">
                        <button class="action-btn" onclick="event.stopPropagation(); window.DiagramsApp.copyDiagramCode('${diagram.id}')" title="Copy Code">
                            <i class="fas fa-copy"></i>
                        </button>
                        <button class="action-btn" onclick="event.stopPropagation(); window.DiagramsApp.openModal(window.DiagramsData.diagrams.find(d => d.id === '${diagram.id}'))" title="View Details">
                            <i class="fas fa-expand"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        return card;
    }
    
    async renderMermaidPreviews() {
        const mermaidElements = document.querySelectorAll('.diagram-preview .mermaid');
        
        for (const element of mermaidElements) {
            const diagramId = element.dataset.diagramId;
            const diagram = this.currentDiagrams.find(d => d.id === diagramId);
            
            if (diagram && window.MermaidUtils) {
                await window.MermaidUtils.render(element, diagram.mermaid, `preview-${diagramId}`);
            }
        }
    }
    
    async openModal(diagram) {
        this.currentDiagramCode = diagram.mermaid;
        
        // Update modal content
        this.modalTitle.textContent = diagram.title;
        this.modalCategory.className = `category-badge ${diagram.category}`;
        this.modalCategory.textContent = diagram.category.toUpperCase();
        this.modalDescription.textContent = diagram.description;
        
        // Clear and render diagram
        this.modalDiagram.innerHTML = '<div class="mermaid"></div>';
        const mermaidElement = this.modalDiagram.querySelector('.mermaid');
        
        if (window.MermaidUtils) {
            await window.MermaidUtils.render(mermaidElement, diagram.mermaid, `modal-${diagram.id}`);
        }
        
        // Show modal
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    closeModal() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
        this.currentDiagramCode = '';
    }
    
    copyDiagramCode(diagramId = null) {
        let codeToCopy = this.currentDiagramCode;
        
        if (diagramId) {
            const diagram = this.currentDiagrams.find(d => d.id === diagramId);
            if (diagram) {
                codeToCopy = diagram.mermaid;
            }
        }
        
        if (!codeToCopy) {
            console.warn('No diagram code to copy');
            return;
        }
        
        // Copy to clipboard
        navigator.clipboard.writeText(codeToCopy).then(() => {
            this.showToast('Mermaid code copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy code:', err);
            this.showToast('Failed to copy code', 'error');
        });
    }
    
    showToast(message, type = 'success') {
        this.copyToast.querySelector('span').textContent = message;
        this.copyToast.className = `toast ${type}`;
        this.copyToast.classList.add('show');
        
        setTimeout(() => {
            this.copyToast.classList.remove('show');
        }, 3000);
    }
    
    toggleFullscreen() {
        if (!document.fullscreenElement) {
            this.modal.requestFullscreen().catch(err => {
                console.error('Error attempting to enable fullscreen:', err);
            });
        } else {
            document.exitFullscreen();
        }
    }
    
    // Public methods for external access
    getDiagramById(id) {
        return this.currentDiagrams.find(d => d.id === id);
    }
    
    getDiagramsByCategory(category) {
        return this.currentDiagrams.filter(d => d.category === category);
    }
    
    searchDiagrams(query) {
        const searchTerm = query.toLowerCase();
        return this.currentDiagrams.filter(diagram => 
            diagram.title.toLowerCase().includes(searchTerm) ||
            diagram.description.toLowerCase().includes(searchTerm) ||
            diagram.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }
}

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Make diagrams data globally available
    window.DiagramsData = DIAGRAMS_DATA;
    
    // Initialize the main application
    window.DiagramsApp = new DiagramsApp();
    
    console.log('Architecture Diagrams application loaded successfully');
}); 