export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden px-6 pb-24 pt-40">
      <div className="pointer-events-none absolute inset-0 bg-grain bg-grain opacity-40" />

      {/* stamp badge */}
      <div className="absolute right-6 top-28 hidden -rotate-6 rounded-full border border-amber/60 px-4 py-3 text-center font-mono text-[10px] uppercase tracking-widest text-amber sm:block">
        Guru &amp; Developer
        <br />
        Sejak 2020
      </div>

      <div className="relative mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal">
          Mata Pelajaran — Pendidikan &amp; Rekayasa Web
        </p>
        <h1 className="mt-4 font-display text-5xl font-semibold leading-tight sm:text-6xl">
          Sanvira
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Saya merancang materi belajar di depan kelas, lalu membangun{' '}
          <span className="marker-underline text-chalk">sistem yang menjalankannya</span> —
          portal ujian, LMS, dan alat kelas yang benar-benar dipakai murid dan guru.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#proyek"
            className="rounded-sm bg-amber px-5 py-2.5 font-mono text-sm font-medium text-board transition-transform hover:-translate-y-0.5"
          >
            Lihat Proyek
          </a>
          <a
            href="#kontak"
            className="rounded-sm border border-board-line px-5 py-2.5 font-mono text-sm font-medium text-chalk transition-colors hover:border-teal hover:text-teal"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  )
}
