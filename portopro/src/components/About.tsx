const rows = [
  {
    label: 'Pendidikan',
    detail: 'Modul Ajar & LKPD (IPS SMP–SMA), Kurikulum Merdeka, PBL, Discovery Learning',
  },
  {
    label: 'Pengembangan Web',
    detail: 'React, TypeScript, Tailwind CSS, Vercel Serverless Functions',
  },
  {
    label: 'Arsitektur Data',
    detail: 'GitHub sebagai penyimpanan JSON, integrasi PAT & environment variables',
  },
  {
    label: 'Realtime & Mobile',
    detail: 'Supabase Realtime, Edge Functions, pembungkus WebView (Capacitor)',
  },
]

export default function About() {
  return (
    <section id="tentang" className="border-t border-board-line px-6 py-24">
      <div className="mx-auto grid max-w-5xl gap-12 sm:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal">Tentang</p>
          <h2 className="mt-3 font-display text-3xl font-semibold">Dua peran, satu ruang kelas</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Sebagian besar proyek saya lahir dari kebutuhan nyata di sekolah — ujian yang butuh
            diawasi lebih ketat, dashboard yang harus jalan mulus di HP siswa, atau materi belajar
            yang perlu wadah interaktif. Latar belakang mengajar itu yang menentukan apa yang saya
            bangun, bukan sebaliknya.
          </p>
        </div>
        <div className="border border-board-line">
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-[auto_1fr] gap-4 px-5 py-4 ${
                i !== rows.length - 1 ? 'border-b border-board-line' : ''
              }`}
            >
              <span className="font-mono text-xs uppercase tracking-widest text-amber">
                {row.label}
              </span>
              <span className="text-sm text-muted">{row.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
