const skillGroups = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    category: "Frameworks & Runtime",
    skills: ["Node.js", "Express.js", "Fastify", "Next.js"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "Redis", "Supabase"],
  },
  {
    category: "APIs",
    skills: ["REST", "GraphQL", "WebSocket", "JWT / OAuth2"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "Git & GitHub", "Linux", "Postman"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 bg-white/[0.02]">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs uppercase tracking-widest text-blue-400 font-medium mb-3">
          Skills
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          Technologies I work with
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:border-white/20 transition-all"
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="size-1 rounded-full bg-blue-400/70 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
