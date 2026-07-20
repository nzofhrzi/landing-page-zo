# Portfolio Sanvira

Template portfolio React + TypeScript + Tailwind CSS, siap dipakai lokal maupun langsung deploy ke Vercel via GitHub.

## Menjalankan lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Struktur folder

```
├── index.html              # entry HTML, judul & meta tag
├── src/
│   ├── main.tsx             # entry React
│   ├── App.tsx               # menyusun semua section
│   ├── index.css             # Tailwind + gaya global
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── data/
│       └── projects.ts       # daftar proyek — edit di sini untuk update
├── tailwind.config.js        # warna, font, token desain
└── vercel.json (tidak perlu, Vercel auto-detect Vite)
```

## Yang perlu kamu edit

1. **`src/data/projects.ts`** — tambah/hapus/ubah proyek yang ditampilkan.
2. **`src/components/Contact.tsx`** — ganti `email`, `github`, `linkedin` dengan data asli kamu.
3. **`src/components/About.tsx`** — sesuaikan deskripsi diri kalau perlu.
4. **`index.html`** — ganti `<title>` dan meta description kalau mau.

## Upload ke GitHub

**Cara A — lewat web (upload manual per file/batch):**
1. Buat repo baru di GitHub (public atau private, bebas).
2. Klik "Add file" → "Upload files".
3. Seret seluruh isi folder ini (termasuk folder `src`, `public`, dan file-file di root seperti `package.json`, `tailwind.config.js`, dst).
4. Commit langsung ke branch `main`.

**Cara B — lewat git di komputer (lebih aman untuk struktur folder):**
```bash
cd portfolio
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

> Folder `node_modules` sudah otomatis diabaikan lewat `.gitignore` — jangan upload folder itu, Vercel yang akan generate ulang saat build.

## Deploy ke Vercel

1. Buka [vercel.com](https://vercel.com) → **Add New Project**.
2. Pilih repo GitHub yang barusan dibuat.
3. Vercel otomatis mendeteksi framework **Vite** — biarkan default (`npm run build`, output `dist`).
4. Klik **Deploy**. Selesai dalam 1–2 menit.

Setiap kali kamu push perubahan ke `main`, Vercel otomatis build & deploy ulang.
