export type Project = {
  name: string
  role: string
  description: string
  stack: string[]
  status: 'Produksi' | 'Aktif Dikembangkan' | 'Prototipe'
  link?: string
}

// Edit atau tambah proyek di sini — urutan array = urutan tampil.
export const projects: Project[] = [
  {
    name: 'Tunton Luk',
    role: 'Katalog & Streaming Film',
    description:
      'Situs katalog film dengan panel admin untuk moderasi komentar, dibangun di atas GitHub + Vercel sebagai penyimpanan data JSON.',
    stack: ['React', 'Vercel Functions', 'GitHub API'],
    status: 'Aktif Dikembangkan',
  },
  {
    name: 'Smansanam Exam Portal',
    role: 'Sistem Ujian Online',
    description:
      'Portal ujian untuk SMAN 1 Namang, lengkap dengan formulir ujian bertahap dan log integritas per insiden kecurangan.',
    stack: ['JavaScript', 'Vercel Functions', 'GitHub Store'],
    status: 'Produksi',
  },
  {
    name: 'Academy Eji',
    role: 'Platform Belajar',
    description:
      'Platform konten edukasi dengan panel admin yang dioptimalkan untuk tampilan mobile — tabel scrollable dan kartu responsif.',
    stack: ['React', 'Tailwind CSS'],
    status: 'Produksi',
  },
  {
    name: 'LMS Unmuh Babel',
    role: 'LMS Kampus',
    description:
      'Sistem pembelajaran kampus dengan dashboard mahasiswa & dosen berbasis kelas, presensi, dan forum diskusi.',
    stack: ['JavaScript', 'REST API', 'JSON Store'],
    status: 'Produksi',
  },
  {
    name: 'Match-3 Edukasi',
    role: 'Game Kelas Kolaboratif',
    description:
      'Game edukasi berbasis giliran dengan papan bersama secara real-time, memicu sesi tanya-jawab di ambang skor tertentu.',
    stack: ['Supabase Realtime', 'Edge Functions'],
    status: 'Prototipe',
  },
]
