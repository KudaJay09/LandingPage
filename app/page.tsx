import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navbar */}
      <header className="border-b border-slate-800/70 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-xs font-semibold text-blue-400">
              KD
            </div>
            <span className="text-sm font-semibold tracking-tight text-slate-100">
              Kuda Dev Solutions
            </span>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#services" className="hover:text-slate-50">
              Services
            </a>
            <a href="#projects" className="hover:text-slate-50">
              Projects
            </a>
            <a href="#process" className="hover:text-slate-50">
              Process
            </a>
            <a href="#contact" className="hover:text-slate-50">
              Contact
            </a>
          </nav>
          <Link
            href="#contact"
            className="rounded-full bg-blue-500 px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-blue-600"
          >
            Start a project
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-slate-800/70 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-24">
          <div className="flex-1">
            <p className="mb-3 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
              Full-stack developer · Django & React
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
              Build. Launch. Scale.
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text">
                Your product, engineered to last.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              I help founders, creatives, and businesses turn ideas into
              production-ready platforms using Django, React, and modern
              deployment workflows. From MVP to scalable architecture, you get
              clean code and a polished experience.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="#contact"
                className="rounded-full bg-blue-500 px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-blue-500/40 hover:bg-blue-600 sm:text-sm"
              >
                Start your project
              </Link>
              <Link
                href="#projects"
                className="rounded-full border border-slate-700 px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-slate-200 hover:border-slate-500 sm:text-sm"
              >
                View recent work
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-400 sm:text-sm">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Scalable architecture
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                Modern UI/UX
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Local & global-ready
              </span>
            </div>
          </div>

          <div className="mt-8 flex-1 md:mt-0">
            <div className="relative mx-auto max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-blue-500/10">
              <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
                <span>Tech snapshot</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[0.65rem] font-medium text-emerald-300">
                  Ready for production
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3">
                  <p className="text-[0.7rem] text-slate-400">Backend</p>
                  <p className="mt-1 text-sm font-semibold text-slate-50">
                    Django & DRF
                  </p>
                  <p className="mt-1 text-[0.7rem] text-slate-400">
                    Robust APIs, auth, and business logic built for scale.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3">
                  <p className="text-[0.7rem] text-slate-400">Frontend</p>
                  <p className="mt-1 text-sm font-semibold text-slate-50">
                    React & Next.js
                  </p>
                  <p className="mt-1 text-[0.7rem] text-slate-400">
                    Fast, responsive, SEO-ready interfaces users enjoy using.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3">
                  <p className="text-[0.7rem] text-slate-400">Deployment</p>
                  <p className="mt-1 text-sm font-semibold text-slate-50">
                    Render & Vercel
                  </p>
                  <p className="mt-1 text-[0.7rem] text-slate-400">
                    From idea to live URL with production best practices.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3">
                  <p className="text-[0.7rem] text-slate-400">Extras</p>
                  <p className="mt-1 text-sm font-semibold text-slate-50">
                    3D & Creative
                  </p>
                  <p className="mt-1 text-[0.7rem] text-slate-400">
                    Blender & Three.js experiments for standout experiences.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-[0.75rem] text-slate-400">
                “Clean architecture, clear communication, and deployment support
                included on every project.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="border-b border-slate-800/70 bg-slate-950"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Services built for real products
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-400 sm:text-base">
                From first MVP to production launch, I help you ship features
                that actually move your business forward.
              </p>
            </div>
            <p className="text-xs text-slate-500 sm:text-sm">
              Focus: web platforms, marketplaces, internal tools, and creative
              sites.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-slate-50">
                Full-stack product development
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Design, backend, frontend, and deployment handled end-to-end.
                Ideal for founders and small teams who need a technical partner,
                not just a coder.
              </p>
              <ul className="mt-3 space-y-1 text-xs text-slate-400">
                <li>• Django REST Framework APIs</li>
                <li>• React / Next.js frontends</li>
                <li>• Auth, roles, dashboards</li>
              </ul>
            </div>

            <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-slate-50">
                Deployment & technical setup
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                I configure your app for real-world traffic: environment
                variables, production settings, and reliable hosting
                integrations.
              </p>
              <ul className="mt-3 space-y-1 text-xs text-slate-400">
                <li>• Render + Vercel deployment</li>
                <li>• Domain & SSL configuration</li>
                <li>• Staging & production flows</li>
              </ul>
            </div>

            <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-slate-50">
                Custom experiences & experimentation
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                For brands that want something different: 3D flourishes,
                delightful micro-interactions, and portfolio-style storytelling.
              </p>
              <ul className="mt-3 space-y-1 text-xs text-slate-400">
                <li>• React Three Fiber scenes</li>
                <li>• Smooth UI animations</li>
                <li>• Creative landing pages</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-b border-slate-800/70 bg-slate-950"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Recent & sample projects
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-400 sm:text-base">
                A glimpse of the kind of platforms I build — from marketplaces
                to creative portfolios.
              </p>
            </div>
            <p className="text-xs text-slate-500 sm:text-sm">
              Ask for a live demo link during our chat.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-blue-300">
                Online bookstore
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-50">
                Full-stack bookstore with live API
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Django backend, React frontend, live product feed, and
                deployment to production. Built to be easily extended into a
                full e-commerce experience.
              </p>
              <p className="mt-3 text-xs text-slate-500">
                Stack: Django, DRF, React, Render, Vercel
              </p>
            </article>

            <article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-emerald-300">
                Marketplace MVP
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-50">
                Marketplace with auth & product flows
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                JWT authentication, product creation, API design focused on
                scalability, and a mobile-friendly interface tuned for African
                markets.
              </p>
              <p className="mt-3 text-xs text-slate-500">
                Stack: Django, DRF, JWT, React
              </p>
            </article>

            <article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-pink-300">
                Creative portfolio
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-50">
                Portfolio for a creative brand
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Clean, client-friendly layout highlighting services, portfolio
                work, and an easy contact flow for new inquiries.
              </p>
              <p className="mt-3 text-xs text-slate-500">
                Stack: React, modern UI, contact integrations
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        id="process"
        className="border-b border-slate-800/70 bg-slate-950"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              How we build together
            </h2>
            <p className="mt-2 text-sm text-slate-400 sm:text-base">
              Clear steps, no confusion. You always know where your project
              stands and what comes next.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Step 1
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-50">
                Discovery call
              </h3>
              <p className="mt-2 text-xs text-slate-400">
                We talk through your idea, target users, and what success looks
                like for you.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Step 2
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-50">
                Plan & proposal
              </h3>
              <p className="mt-2 text-xs text-slate-400">
                You receive a clear, simple breakdown of scope, timeline, and
                investment before we start.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Step 3
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-50">
                Build & iterate
              </h3>
              <p className="mt-2 text-xs text-slate-400">
                I build in focused sprints, sharing progress so we can adjust
                early instead of late.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Step 4
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-50">
                Launch & support
              </h3>
              <p className="mt-2 text-xs text-slate-400">
                We deploy, monitor, and refine together so your users get a
                smooth experience from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials + Contact */}
      <section
        id="contact"
        className="border-b border-slate-800/70 bg-slate-950"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            {/* Testimonials */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                What it&apos;s like to work together
              </h2>
              <p className="mt-2 text-sm text-slate-400 sm:text-base">
                Here&apos;s how clients describe the experience of taking an
                idea from zero to launch.
              </p>

              <div className="mt-6 space-y-4">
                <figure className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <p className="text-sm text-slate-200">
                    “Kuda transformed a rough idea into a polished, functional
                    website. Clear communication, reliable delivery, and a real
                    eye for how everything fits together.”
                  </p>
                  <figcaption className="mt-2 text-xs text-slate-400">
                    Creative brand owner
                  </figcaption>
                </figure>
                <figure className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <p className="text-sm text-slate-200">
                    “The marketplace MVP was built with scale in mind from day
                    one. Clean API design and a smooth frontend that our users
                    love.”
                  </p>
                  <figcaption className="mt-2 text-xs text-slate-400">
                    Startup founder
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* Contact / Lead capture */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                Let&apos;s start your project
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-50">
                Tell me a bit about what you&apos;re building
              </h3>
              <p className="mt-2 text-xs text-slate-400">
                Share a quick overview and how to reach you. I&apos;ll reply
                with a few ideas and next steps.
              </p>

              {/* For now this is a basic HTML form that sends to email client.
                  Later, you can wire it to a real backend/API. */}
              <form className="mt-4 space-y-3">
                <div>
                  <label className="text-xs font-medium text-slate-300">
                    Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-300">
                    What are you looking to build?
                  </label>
                  <textarea
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
                    rows={4}
                    placeholder="Share a short description of your idea, timeline, and any links."
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-blue-500 px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-white hover:bg-blue-600"
                >
                  Send message
                </button>
              </form>

              <p className="mt-4 text-[0.7rem] text-slate-500">
                Prefer chat? Reach out on WhatsApp or Facebook and share this
                page as a reference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Kuda Dev Solutions. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-3">
            <span>Built from Zimbabwe, for global users.</span>
            <span className="hidden text-slate-600 sm:inline">·</span>
            <a
              href="mailto:info@yourdomain.com"
              className="text-slate-400 hover:text-slate-200"
            >
              info@yourdomain.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
