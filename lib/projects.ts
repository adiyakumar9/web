export interface Project {
  slug:        string
  num:         string
  title:       string
  shortDesc:   string
  description: string
  tags:        string[]
  hotTags:     string[]
  impact:      string
  icon:        string
  featured:    boolean
  caseStudy?: {
    problem:     string
    role:        string
    solution:    string
    highlights:  string[]
    results:     { label: string; value: string }[]
    techDetails: { name: string; why: string }[]
  }
}

export const projects: Project[] = [
  {
    slug:      'tdx-trading-platform',
    num:       '01',
    title:     'TDX — Real-time Trading Platform',
    shortDesc: 'Live market data, order management and portfolio analytics for 5,000+ concurrent users.',
    description:
      'A real-time trading dashboard built for high-concurrency environments. Handles live WebSocket market data, order book updates, and portfolio analytics with sub-100ms latency.',
    tags:     ['WebSocket', 'PostgreSQL', 'Redis', 'Docker'],
    hotTags:  ['Next.js', 'GraphQL'],
    impact:   '−60% GraphQL latency · 5k concurrent users',
    icon:     '📈',
    featured: true,
    caseStudy: {
      problem:
        'The existing REST-based trading platform struggled with latency under load. GraphQL queries were taking 800ms+ and WebSocket connections were dropping at scale.',
      role: 'Lead front-end engineer, also contributed to GraphQL schema design and query optimization.',
      solution:
        'Migrated to Next.js App Router for SSR where needed, DataLoader pattern for GraphQL batching, Redis pub/sub for WebSocket fanout, and PostgreSQL connection pooling via PgBouncer.',
      highlights: [
        'DataLoader pattern eliminated N+1 queries — 60% latency reduction',
        'Redis pub/sub handles real-time order book updates to 5k clients',
        'Optimistic UI updates for order placement with rollback on failure',
        'WebSocket reconnection logic with exponential backoff',
      ],
      results: [
        { label: 'GraphQL response time', value: '−60%' },
        { label: 'Concurrent users',      value: '5,000+' },
        { label: 'Order processing',      value: '<100ms' },
      ],
      techDetails: [
        { name: 'Next.js',    why: 'SSR for initial data load, faster first paint on dashboard' },
        { name: 'GraphQL',    why: 'Flexible querying for complex order/portfolio relationships' },
        { name: 'Redis',      why: 'Pub/sub for WebSocket fanout, session cache' },
        { name: 'PostgreSQL', why: 'ACID transactions for order integrity' },
      ],
    },
  },
  {
    slug:      'ai-portfolio-chatbot',
    num:       '02',
    title:     'AI Portfolio Chatbot',
    shortDesc: 'Full-stack AI assistant with real-time responses, rate limiting, and JWT auth.',
    description:
      'An AI-powered chatbot integrated directly into this portfolio. Built with Botpress SDK on a Node.js/Express backend, served through a React chat UI.',
    tags:     ['Node.js', 'React', 'Express', 'JWT'],
    hotTags:  ['Botpress'],
    impact:   '100ms avg response · Rate-limited · JWT secured',
    icon:     '🤖',
    featured: false,
    caseStudy: {
      problem:
        'Wanted a portfolio differentiator that demonstrated full-stack skills — not just a static CV.',
      role: 'Sole engineer — full-stack design, backend, frontend, deployment.',
      solution:
        'Express API proxying Botpress SDK with JWT signing, rate limiting per IP, and a custom React chat UI with streaming-style response display.',
      highlights: [
        'Botpress SDK integration with custom conversation context',
        'Rate limiting (100 req/15min per IP) via express-rate-limit',
        'JWT-signed requests prevent direct API abuse',
        'Markdown message rendering in chat window',
      ],
      results: [
        { label: 'Avg response time',  value: '<100ms' },
        { label: 'Uptime',             value: '99.9%'  },
        { label: 'Daily interactions', value: '50+'    },
      ],
      techDetails: [
        { name: 'Botpress SDK', why: 'Managed NLP + conversation flow' },
        { name: 'Express',      why: 'Lightweight proxy with middleware chain' },
        { name: 'JWT',          why: 'Stateless request signing' },
      ],
    },
  },
  {
    slug:      'multi-tenant-rbac',
    num:       '03',
    title:     'Multi-tenant RBAC System',
    shortDesc: 'Enterprise-grade role-based access control with JWT + MFA for media tech platforms.',
    description:
      'A multi-tenant RBAC system for enterprise media clients. Handles role assignment, permission inheritance, JWT-based session management, and MFA enforcement.',
    tags:     ['Angular', 'JWT', 'PostgreSQL', 'MFA'],
    hotTags:  [],
    impact:   '5,000+ concurrent users · MFA enforced',
    icon:     '🔐',
    featured: false,
    caseStudy: {
      problem:
        'The existing system had a flat permission model that could not scale to enterprise clients with complex org hierarchies.',
      role: 'Lead front-end + contributed to backend permission model design.',
      solution:
        'Hierarchical RBAC with inherited permissions, Angular module lazy-loading, JWT with MFA step-up tokens, and an admin dashboard for role management.',
      highlights: [
        'Hierarchical permission model supports org/team/user scoping',
        'Angular lazy-loaded modules reduced initial bundle 40%',
        'MFA step-up flow for sensitive admin actions',
        '40+ reusable UI components in internal library',
      ],
      results: [
        { label: 'Concurrent users', value: '5,000+' },
        { label: 'Lighthouse score', value: '95+'    },
        { label: 'Test coverage',    value: '85%'    },
      ],
      techDetails: [
        { name: 'Angular',    why: 'Strong DI and module system suits enterprise RBAC complexity' },
        { name: 'JWT',        why: 'Stateless auth with embedded role claims' },
        { name: 'PostgreSQL', why: 'Recursive CTEs for permission tree queries' },
      ],
    },
  },
  {
    slug:      'oshodhara-event-platform',
    num:       '04',
    title:     'Oshodhara — Enterprise Event Platform',
    shortDesc: 'Admin panel for an event booking platform processing 10,000+ monthly bookings with dynamic pricing.',
    description:
      'Architected the admin panel for a large-scale event management platform. Multi-step booking workflows, real-time seat availability, 5-level RBAC, and a dynamic pricing engine.',
    tags:     ['Angular', 'Node.js', 'PostgreSQL', 'Chart.js'],
    hotTags:  ['RBAC'],
    impact:   '10k+ monthly bookings · 5 permission levels',
    icon:     '🎪',
    featured: false,
  },
  {
    slug:      't-pro-project-management',
    num:       '05',
    title:     'T-Pro — Project Management System',
    shortDesc: 'Team and project management dashboard with real-time analytics and data visualisation.',
    description:
      'Led frontend development for a team management SaaS. Secure routing, complex form handling via React Query + Formik, and real-time analytics dashboards.',
    tags:     ['React', 'React Query', 'Formik', 'TypeScript'],
    hotTags:  ['React Query'],
    impact:   'Production · pms.recru.in',
    icon:     '📋',
    featured: false,
  },
  {
    slug:      'social-collider',
    num:       '06',
    title:     'Social Collider — Engagement Platform',
    shortDesc: 'Task-based social platform incentivising engagement across Twitter, Telegram, and YouTube.',
    description:
      'Frontend for a social engagement platform where users earn rewards for completing tasks across Twitter, Telegram, and YouTube. Built with Angular and a RESTful API backend.',
    tags:     ['Angular', 'TypeScript', 'RESTful APIs'],
    hotTags:  [],
    impact:   'Production · bizthon.com',
    icon:     '📱',
    featured: false,
  },
  {
    slug:      'media-intercept',
    num:       '07',
    title:     'Media Intercept — Affiliate Marketing Platform',
    shortDesc: 'Full-stack SaaS for affiliate networks — click tracking, fraud detection, and payout management across 3 portals.',
    description:
      'An Everflow-inspired affiliate marketing platform built from scratch. Node.js/GraphQL backend with 45 database entities, fraud detection via 24metrics API, and three role-based portals (network, affiliate, advertiser) built in Next.js 16.',
    tags:     ['Node.js', 'PostgreSQL', 'TypeORM', 'Docker'],
    hotTags:  ['GraphQL', 'Next.js'],
    impact:   '10k+ clicks/min · 45 entities · 3 portals',
    icon:     '📊',
    featured: true,
    caseStudy: {
      problem:
        'The team needed a production-grade affiliate tracking platform — replacing an expensive Everflow subscription — with custom fraud detection, multi-tenant RBAC, and a clean publisher-facing portal.',
      role: 'Full-stack engineer — owned GraphQL API design, entity modelling, fraud integration, and Next.js frontend across all three portals.',
      solution:
        'Apollo Server 5 GraphQL API with 15 resolver modules, TypeORM with 45 entities and optimised indexes for high-volume click ingestion, 24metrics fraud API integration, payout rate-locking at click time, and a Next.js 16 + shadcn/ui component library shared across employee, affiliate, and advertiser portals.',
      highlights: [
        'Payout rates locked at click time — prevents mid-month disputes when custom rates change',
        'DataLoader pattern across all GraphQL resolvers — eliminates N+1 queries at scale',
        '24metrics fraud API with monitor/soft-block/hard-block modes + manual override',
        'Ticket-based cherry-pick CI/CD pipeline — selective deployment to staging and production',
        '3 fully-isolated Next.js portals sharing one Apollo Client + shadcn component library',
        'BigInt IDs on Click/Conversion entities — supports 9.2 quintillion records',
      ],
      results: [
        { label: 'Click throughput',   value: '10k+/min' },
        { label: 'Database entities',  value: '45'       },
        { label: 'GraphQL resolvers',  value: '15'       },
        { label: 'User portals',       value: '3'        },
      ],
      techDetails: [
        { name: 'Apollo Server 5', why: 'Type-safe GraphQL with resolver-level auth and permission directives' },
        { name: 'TypeORM + PostgreSQL', why: '45-entity schema with JSONB, BigInt IDs, and strategic indexes for aggregation queries' },
        { name: 'Next.js 16 + shadcn/ui', why: 'App Router server components for each portal; Radix-based component library ensures a11y' },
        { name: 'Docker + GitLab CI', why: 'Ticket-based cherry-pick pipeline — deploy individual tickets to staging or production without full branch merge' },
      ],
    },
  },
  {
    slug:      'smart-attendance',
    num:       '08',
    title:     'SmartAttendance — Biometric Attendance System',
    shortDesc: 'Offline-first Android app with face recognition, active liveness detection, and GPS geofencing for enterprise attendance.',
    description:
      'An enterprise-grade mobile attendance system built with React Native. Uses Neurotec SDK 13.1 for 1:N face matching and active liveness detection, WatermelonDB for offline-first storage, and an Android foreground service for background sync. Works fully offline; records sync automatically on reconnect.',
    tags:     ['React Native', 'WatermelonDB', 'Android', 'TypeScript'],
    hotTags:  ['Neurotec SDK'],
    impact:   'Offline-first · 1:N biometrics · 17.6k LoC',
    icon:     '🤳',
    featured: true,
    caseStudy: {
      problem:
        'Field and factory employees often work in areas with poor connectivity. Traditional attendance systems requiring constant internet connection caused widespread missed check-ins and unreliable records.',
      role: 'Lead React Native engineer — architected the offline-first data layer, Neurotec SDK bridge, background sync service, and role-based navigation stacks.',
      solution:
        'WatermelonDB as the offline-first reactive database with a SyncOrchestrator that queues all operations in a pending_operations table. An Android foreground service handles background sync and resumes after device reboot. Neurotec SDK 13.1 is bridged via native Java modules for 1:N face matching at FAR 0.01%, with multi-step active liveness (passive, blink, head-turn) to prevent spoofing.',
      highlights: [
        '1:N face matching via Neurotec SDK 13.1 — 0.01% FAR with configurable threshold',
        'Multi-step active liveness detection (passive + blink + head-turn) prevents photo spoofing',
        'Offline-first: all attendance operations work without internet; auto-sync on reconnect',
        'Android foreground service persists sync across app lifecycle and device reboots',
        'GPS geofencing validates attendance is marked within the authorised office radius',
        'Conflict resolver handles offline-created users being duplicated online by emp_code deduplication',
        'Repository pattern with mock implementations — full demo mode without a backend',
      ],
      results: [
        { label: 'Matching accuracy', value: 'FAR 0.01%'  },
        { label: 'Codebase',          value: '17.6k LoC'  },
        { label: 'DB tables',         value: '8 (WatermelonDB)' },
        { label: 'Offline capable',   value: '100%'       },
      ],
      techDetails: [
        { name: 'Neurotec SDK 13.1', why: 'Industry-leading 1:N face matching with active liveness detection and demographics extraction — bridged via custom Java native module' },
        { name: 'WatermelonDB', why: 'Reactive offline-first SQLite — observable queries keep UI in sync with local DB without explicit re-fetching' },
        { name: 'Android Foreground Service', why: 'SyncService runs independently of app lifecycle; BootReceiver re-registers sync after device restart' },
        { name: 'React Native + TypeScript', why: 'Single codebase across Android; strict TypeScript prevents runtime type errors in safety-critical biometric flow' },
      ],
    },
  },
]

export const featuredProjects = projects.filter(p => p.featured)

export function getProjectBySlug(slug: string): Project | null {
  return projects.find(p => p.slug === slug) ?? null
}
