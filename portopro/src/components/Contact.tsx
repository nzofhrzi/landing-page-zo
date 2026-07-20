// Ganti nilai di bawah ini dengan kontak asli kamu.
const email = 'nama@email.com'
const github = 'https://github.com/username-kamu'
const linkedin = 'https://linkedin.com/in/username-kamu'

export default function Contact() {
  return (
    <section id="kontak" className="border-t border-board-line px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal">Kontak</p>
        <h2 className="mt-3 font-display text-3xl font-semibold">Ada proyek untuk didiskusikan?</h2>
        <p className="mx-auto mt-4 max-w-lg text-muted">
          Terbuka untuk kolaborasi seputar sistem sekolah, LMS, atau alat belajar interaktif lainnya.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 font-mono text-sm">
          <a
            href={`mailto:${email}`}
            className="rounded-sm bg-amber px-5 py-2.5 font-medium text-board transition-transform hover:-translate-y-0.5"
          >
            {email}
          </a>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm border border-board-line px-5 py-2.5 text-chalk transition-colors hover:border-teal hover:text-teal"
          >
            GitHub
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm border border-board-line px-5 py-2.5 text-chalk transition-colors hover:border-teal hover:text-teal"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
