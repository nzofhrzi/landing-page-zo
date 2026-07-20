const links = [
  { href: '#beranda', label: 'Beranda' },
  { href: '#tentang', label: 'Tentang' },
  { href: '#proyek', label: 'Proyek' },
  { href: '#keahlian', label: 'Keahlian' },
  { href: '#kontak', label: 'Kontak' },
]

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-board-line bg-board/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#beranda" className="font-display text-lg tracking-wide text-chalk">
          Sanvira
        </a>
        <ul className="hidden gap-1 font-mono text-xs uppercase tracking-widest text-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-sm px-3 py-1.5 transition-colors hover:bg-board-surface hover:text-amber"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
