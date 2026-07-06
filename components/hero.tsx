"use client";

import { ArrowDown, Mail } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="size-[600px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-xs text-muted-foreground">
          <span className="size-1.5 rounded-full bg-green-400 animate-pulse" />
          Open to opportunities
        </span>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Diah Safitri Pane
          </span>
        </h1>

        {/* Role */}
        <p className="text-xl sm:text-2xl font-medium text-muted-foreground">
          Aspiring{" "}
          <span className="text-foreground font-semibold">Backend Developer</span>
        </p>

        {/* Bio */}
        <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          I&apos;m passionate about building the invisible backbone of great
          software — designing APIs that are clean, databases that perform, and
          server logic that scales. Currently sharpening my skills in{" "}
          <span className="text-foreground">Node.js</span> to craft
          systems that developers love to work with.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <a
            href="#projects"
            className="rounded-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 text-sm font-medium transition-colors shadow-lg shadow-blue-500/25"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-gray-300 dark:border-white/20 bg-gray-50/80 dark:bg-white/10 backdrop-blur-sm px-6 py-2.5 text-sm font-semibold text-gray-800 dark:text-foreground hover:bg-gray-100 dark:hover:bg-white/20 transition-all"
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4 mt-2">
          <a
            href="https://github.com/ValZ908"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-white/15 bg-white/5 p-2.5 hover:bg-white/15 transition-all"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/diah-safitri-pane-a5982b325/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white/15 bg-white/5 p-2.5 hover:bg-white/15 transition-all"
          >
            <LinkedinIcon className="size-4" />
          </a>
          <a
            href="mailto:Diahsafitripane@gmail.com"
            aria-label="Email"
            className="rounded-full border border-white/15 bg-white/5 p-2.5 hover:bg-white/15 transition-all"
          >
            <Mail className="size-4" />
          </a>
        </div>

      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="text-xs">Scroll</span>
        <ArrowDown className="size-4 animate-bounce" />
      </a>
    </section>
  );
}
