import { Mail, MapPin } from "lucide-react";

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

export function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-widest text-blue-400 font-medium mb-3">
          Contact
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Let&apos;s work together
        </h2>
        <p className="text-base text-muted-foreground max-w-xl mx-auto mb-12">
          I&apos;m currently open to internship and entry-level backend
          opportunities. Whether you have a project idea, a question, or just
          want to connect — my inbox is always open.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:Diahsafitripane@gmail.com"
            className="flex items-center gap-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/80 dark:bg-white/5 backdrop-blur-sm px-5 py-4 text-sm hover:border-gray-300 dark:hover:border-white/25 hover:bg-gray-100/80 dark:hover:bg-white/10 transition-all w-full sm:w-auto justify-center"
          >
            <Mail className="size-4 text-blue-400 shrink-0" />
            Diahsafitripane@gmail.com
          </a>

          <a
            href="https://github.com/ValZ908"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/80 dark:bg-white/5 backdrop-blur-sm px-5 py-4 text-sm hover:border-gray-300 dark:hover:border-white/25 hover:bg-gray-100/80 dark:hover:bg-white/10 transition-all w-full sm:w-auto justify-center"
          >
            <GithubIcon className="size-4 text-blue-400 shrink-0" />
            github.com/ValZ908
          </a>

          <a
            href="https://www.linkedin.com/in/diah-safitri-pane-a5982b325/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/80 dark:bg-white/5 backdrop-blur-sm px-5 py-4 text-sm hover:border-gray-300 dark:hover:border-white/25 hover:bg-gray-100/80 dark:hover:bg-white/10 transition-all w-full sm:w-auto justify-center"
          >
            <LinkedinIcon className="size-4 text-blue-400 shrink-0" />
            Diah Safitri Pane
          </a>
        </div>

        <div className="flex items-center justify-center gap-1.5 mt-8 text-xs text-muted-foreground">
          <MapPin className="size-3.5" />
          Indonesia · GMT+7
        </div>
      </div>
    </section>
  );
}
