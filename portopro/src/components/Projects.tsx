import { projects } from '../data/projects'

const statusColor: Record<string, string> = {
  'Produksi': 'text-teal',
  'Aktif Dikembangkan': 'text-amber',
  'Prototipe': 'text-muted',
}

export default function Projects() {
  return (
    <section id="proyek" className="border-t border-board-line px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal">Buku Nilai Proyek</p>
        <h2 className="mt-3 font-display text-3xl font-semibold">Proyek yang sedang &amp; sudah berjalan</h2>

        <div className="mt-10 divide-y divide-board-line border-t border-board-line">
          {projects.map((project) => (
            <div
              key={project.name}
              className="grid gap-3 py-6 sm:grid-cols-[1.2fr_2fr_auto] sm:items-start sm:gap-6"
            >
              <div>
                <h3 className="font-display text-xl">{project.name}</h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted">
                  {project.role}
                </p>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-muted">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm border border-board-line px-2 py-0.5 font-mono text-[11px] text-teal"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className={`font-mono text-xs uppercase tracking-widest ${statusColor[project.status]}`}>
                {project.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
