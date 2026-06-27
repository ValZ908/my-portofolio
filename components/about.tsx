import { Server, Database, Code2, Terminal } from "lucide-react";

const highlights = [
  {
    icon: <Server className="size-5 text-blue-400" />,
    title: "API Design",
    description:
      "Building clean, well-documented APIs that are a pleasure to consume.",
  },
  {
    icon: <Database className="size-5 text-blue-400" />,
    title: "Database Engineering",
    description:
      "Designing schemas, writing optimized queries, and working with MySQL and Supabase.",
  },
  {
    icon: <Code2 className="size-5 text-blue-400" />,
    title: "Server-side Logic",
    description:
      "Implementing business logic, authentication flows, and background workers with Node.js.",
  },
  {
    icon: <Terminal className="size-5 text-blue-400" />,
    title: "Dev Tools & Infra",
    description:
      "Comfortable with Docker, Git, Linux environments, and basic CI/CD pipelines.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs uppercase tracking-widest text-blue-400 font-medium mb-3">
          About Me
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          The person behind the code
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div className="space-y-4 text-base leading-relaxed">
            <p className="text-cyan-300/90">
              I&apos;m Diah Safitri Pane, a backend developer in the making who
              finds joy in everything that happens <em>under the hood</em> of a
              web application. While the frontend dazzles users, I&apos;m drawn
              to the systems that make it all work — the servers, the databases,
              the queues, and the APIs.
            </p>
            <p className="text-sky-200/80">
              My journey started with curiosity: <em>how does data get from
              point A to point B securely and efficiently?</em> That question
              pulled me deep into backend development, and I haven&apos;t looked
              back since.
            </p>
            <p className="text-blue-200/80">
              I&apos;m currently focused on mastering Node.js and modern backend
              patterns. I believe great backend code is invisible to end users —
              it just works, fast and reliably.
            </p>
            <a
              href="#contact"
              className="inline-block mt-2 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              Let&apos;s build something together →
            </a>
          </div>

          {/* Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 hover:border-white/20 hover:bg-white/10 transition-all"
              >
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
