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
    featured: true,
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
]

export const featuredProjects = projects.filter(p => p.featured)

export function getProjectBySlug(slug: string): Project | null {
  return projects.find(p => p.slug === slug) ?? null
}
