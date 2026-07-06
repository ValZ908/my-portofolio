export function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 bg-white/[0.02]">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs uppercase tracking-widest text-blue-400 font-medium mb-3">
          Experience & Education
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">My journey so far</h2>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 dark:bg-white/10" />

          <ol className="space-y-10 pl-12">
            <li className="relative">
              <span className="absolute -left-[2.05rem] top-1 size-3 rounded-full border-2 bg-blue-500 border-blue-400" />
              <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/80 dark:bg-white/5 backdrop-blur-sm p-5 hover:border-gray-300 dark:hover:border-white/20 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-semibold text-base">Bachelor of Computer Science</h3>
                    <p className="text-base text-blue-400">President University</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                      2024 – Present
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded-full border border-blue-300 dark:border-blue-500/30 bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300">
                      Education
                    </span>
                  </div>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Focusing on software engineering, algorithms, and database systems.
                  Active in the campus programming club and open-source community.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
