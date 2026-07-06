import { ExternalLink } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

interface Project {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  year: string;
  isLatest?: boolean;
  isOldest?: boolean;
  inProgress?: boolean;
  image: string;
}

const projects: Project[] = [
  {
    title: "SkillBridge",
    description:
      "A collaborative platform that connects learners with skill-based opportunities. Built with a team under the Xylem Group. Features authentication, user profiles, and a structured skill-matching system — currently under active development.",
    stack: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/SkillBridge-Xylem-Group/SkillBridge",
    year: "2026",
    isLatest: true,
    inProgress: true,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
  {
    title: "AI-Assisted Security Audit Platform",
    description:
      "A platform that leverages AI to assist with risk assessment and security auditing. Automates vulnerability analysis, generates audit reports, and helps identify potential security risks across systems and applications.",
    stack: ["Python", "AI/ML", "REST API"],
    github: "https://github.com/ValZ908/AI-Assisted-Risk-Assessment-Security-Audit-Platform-master",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80",
  },
  {
    title: "SSIP Food Delivery App",
    description:
      "A full-featured food delivery application built as part of a student software innovation project. Covers restaurant listings, menu management, order placement, and delivery tracking.",
    stack: ["Web", "Database", "REST API"],
    github: "https://github.com/ValZ908/SSIP-PROJECT-FOOD-DELIVERY-MAIN",
    year: "2025",
    isOldest: true,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs uppercase tracking-widest text-blue-400 font-medium mb-3">
          Projects
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          Things I&apos;ve built
        </h2>

        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-white/20 hover:bg-white/8 transition-all"
            >
              <div className="grid md:grid-cols-[2fr_1fr] gap-0">
                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col gap-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <div className="flex gap-2">
                      {project.inProgress && (
                        <span className="rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-[10px] font-medium px-2 py-0.5">
                          In Progress
                        </span>
                      )}
                      {project.isLatest && !project.inProgress && (
                        <span className="rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-[10px] font-medium px-2 py-0.5">
                          Latest
                        </span>
                      )}
                      {project.isOldest && (
                        <span className="rounded-full bg-muted/60 border border-white/10 text-muted-foreground text-[10px] font-medium px-2 py-0.5">
                          First Project
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <GithubIcon className="size-3.5" />
                        Source
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="size-3.5" />
                        Live
                      </a>
                    )}
                    <span className="ml-auto text-xs text-muted-foreground/60">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Image */}
                <div className="relative hidden md:block overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-30 group-hover:opacity-50 dark:opacity-30 dark:group-hover:opacity-50 transition-opacity duration-500 brightness-75 dark:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
