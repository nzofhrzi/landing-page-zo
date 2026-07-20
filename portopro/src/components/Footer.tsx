export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-board-line px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 font-mono text-xs text-muted sm:flex-row">
        <span>© {year} Sanvira. Dibangun dengan React &amp; Tailwind CSS.</span>
        <span>Diterbitkan lewat GitHub + Vercel.</span>
      </div>
    </footer>
  )
}
