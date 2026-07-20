const groups = [
  { title: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS'] },
  { title: 'Backend & Infra', items: ['Node.js', 'Vercel Serverless Functions', 'GitHub API'] },
  { title: 'Realtime & Data', items: ['Supabase Realtime', 'Supabase Edge Functions'] },
  { title: 'Mobile', items: ['Capacitor / Cordova', 'WebView Kiosk Mode'] },
  { title: 'Pendidikan', items: ['Kurikulum Merdeka', 'PBL', 'Discovery Learning', 'LKPD & Modul Ajar'] },
]

export default function Skills() {
  return (
    <section id="keahlian" className="border-t border-board-line px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal">Keahlian</p>
        <h2 className="mt-3 font-display text-3xl font-semibold">Alat yang saya pakai sehari-hari</h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-amber">{group.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-board-line bg-board-surface px-3 py-1.5 text-sm text-chalk"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
