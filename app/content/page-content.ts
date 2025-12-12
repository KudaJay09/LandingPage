// Content data for the landing page
// You can easily modify content here without touching the components

export const pageContent = {
  hero: {
    badge: "Full-stack developer · Django & React",
    title: "Build. Launch. Scale.",
    highlight: "Your product, engineered to last.",
    description:
      "I help founders, creatives, and businesses turn ideas into production-ready platforms using Django, React, and modern deployment workflows. From MVP to scalable architecture, you get clean code and a polished experience.",
    primaryCTA: {
      href: "#contact",
      text: "Start your project",
    },
    secondaryCTA: {
      href: "#projects",
      text: "View recent work",
    },
    features: [
      { color: "bg-emerald-400", text: "Scalable architecture" },
      { color: "bg-blue-400", text: "Modern UI/UX" },
      { color: "bg-cyan-400", text: "Local & global-ready" },
    ],
    techCards: [
      {
        category: "Backend",
        title: "Django & DRF",
        description: "Robust APIs, auth, and business logic built for scale.",
      },
      {
        category: "Frontend",
        title: "React & Next.js",
        description:
          "Fast, responsive, SEO-ready interfaces users enjoy using.",
      },
      {
        category: "Deployment",
        title: "Render & Vercel",
        description: "From idea to live URL with production best practices.",
      },
      {
        category: "Extras",
        title: "3D & Creative",
        description: "Blender & Three.js experiments for standout experiences.",
      },
    ],
    quote:
      "Clean architecture, clear communication, and deployment support included on every project.",
  },

  services: {
    title: "Services built for real products",
    description:
      "From first MVP to production launch, I help you ship features that actually move your business forward.",
    note: "Focus: web platforms, marketplaces, internal tools, and creative sites.",
    services: [
      {
        title: "Full-stack product development",
        description:
          "Design, backend, frontend, and deployment handled end-to-end. Ideal for founders and small teams who need a technical partner, not just a coder.",
        features: [
          "Django REST Framework APIs",
          "React / Next.js frontends",
          "Auth, roles, dashboards",
        ],
      },
      {
        title: "Deployment & technical setup",
        description:
          "I configure your app for real-world traffic: environment variables, production settings, and reliable hosting integrations.",
        features: [
          "Render + Vercel deployment",
          "Domain & SSL configuration",
          "Staging & production flows",
        ],
      },
      {
        title: "Custom experiences & experimentation",
        description:
          "For brands that want something different: 3D flourishes, delightful micro-interactions, and portfolio-style storytelling.",
        features: [
          "React Three Fiber scenes",
          "Smooth UI animations",
          "Creative landing pages",
        ],
      },
    ],
  },

  projects: {
    title: "Recent & sample projects",
    description:
      "A glimpse of the kind of platforms I build — from marketplaces to creative portfolios.",
    note: "Ask for a live demo link during our chat.",
    projects: [
      {
        category: "Online bookstore",
        categoryColor: "text-blue-300",
        title: "Full-stack bookstore with live API",
        description:
          "Django backend, React frontend, live product feed, and deployment to production. Built to be easily extended into a full e-commerce experience.",
        stack: "Django, DRF, React, Render, Vercel",
      },
      {
        category: "Marketplace MVP",
        categoryColor: "text-emerald-300",
        title: "Marketplace with auth & product flows",
        description:
          "JWT authentication, product creation, API design focused on scalability, and a mobile-friendly interface tuned for African markets.",
        stack: "Django, DRF, JWT, React",
      },
      {
        category: "Creative portfolio",
        categoryColor: "text-pink-300",
        title: "Portfolio for a creative brand",
        description:
          "Clean, client-friendly layout highlighting services, portfolio work, and an easy contact flow for new inquiries.",
        stack: "React, modern UI, contact integrations",
      },
    ],
  },

  process: {
    title: "How we build together",
    description:
      "Clear steps, no confusion. You always know where your project stands and what comes next.",
    steps: [
      {
        step: "Step 1",
        title: "Discovery call",
        description:
          "We talk through your idea, target users, and what success looks like for you.",
      },
      {
        step: "Step 2",
        title: "Plan & proposal",
        description:
          "You receive a clear, simple breakdown of scope, timeline, and investment before we start.",
      },
      {
        step: "Step 3",
        title: "Build & iterate",
        description:
          "I build in focused sprints, sharing progress so we can adjust early instead of late.",
      },
      {
        step: "Step 4",
        title: "Launch & support",
        description:
          "We deploy, monitor, and refine together so your users get a smooth experience from day one.",
      },
    ],
  },

  contact: {
    testimonials: {
      title: "What it's like to work together",
      description:
        "Here's how clients describe the experience of taking an idea from zero to launch.",
      items: [
        {
          quote:
            "Kuda transformed a rough idea into a polished, functional website. Clear communication, reliable delivery, and a real eye for how everything fits together.",
          author: "Creative brand owner",
        },
        {
          quote:
            "The marketplace MVP was built with scale in mind from day one. Clean API design and a smooth frontend that our users love.",
          author: "Startup founder",
        },
      ],
    },
    contact: {
      badge: "Let's start your project",
      title: "Tell me a bit about what you're building",
      description:
        "Share a quick overview and how to reach you. I'll reply with a few ideas and next steps.",
      note: "Prefer chat? Reach out on WhatsApp or Facebook and share this page as a reference.",
    },
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Devblog. All rights reserved.`,
    location: "Built from Zimbabwe, for global users.",
    email: "michaeljeranyama@gmail.com",
  },
};
