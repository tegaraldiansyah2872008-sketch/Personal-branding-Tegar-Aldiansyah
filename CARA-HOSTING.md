# 🚀 Cara Hosting Website Portfolio

## Metode 1: Vercel (PALING MUDAH - RECOMMENDED)

### Langkah-langkah:

#### 1. Install Git (jika belum ada)
- Download Git: https://git-scm.com/download/win
- Install dengan setting default
- Restart komputer setelah install

#### 2. Buat Akun GitHub
- Buka: https://github.com
- Klik "Sign up" dan buat akun gratis
- Verifikasi email Anda

#### 3. Upload Project ke GitHub

Buka Terminal/Command Prompt di folder project ini, lalu jalankan:

```bash
# Inisialisasi Git
git init

# Tambahkan semua file
git add .

# Commit pertama
git commit -m "Initial commit - Portfolio website"

# Login ke GitHub (akan muncul browser untuk login)
gh auth login

# Buat repository baru di GitHub
gh repo create portfolio-tegar --public --source=. --remote=origin --push
```

**ATAU cara manual:**
1. Buka https://github.com/new
2. Nama repository: `portfolio-tegar`
3. Public
4. Klik "Create repository"
5. Ikuti instruksi yang muncul

#### 4. Deploy ke Vercel

**Cara A: Lewat Website (Paling Mudah)**
1. Buka: https://vercel.com
2. Klik "Sign Up" → pilih "Continue with GitHub"
3. Setelah login, klik "Add New..." → "Project"
4. Pilih repository `portfolio-tegar`
5. Klik "Deploy"
6. Tunggu 2-3 menit
7. ✅ Website sudah online!

**Cara B: Lewat CLI**
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy production
vercel --prod
```

#### 5. Custom Domain (Opsional)
- Beli domain di Niagahoster, Rumahweb, atau Namecheap
- Di Vercel dashboard → Settings → Domains
- Tambahkan domain Anda
- Update DNS sesuai instruksi Vercel

---

## Metode 2: Netlify

### Langkah-langkah:

1. **Upload ke GitHub** (ikuti langkah 1-3 dari Metode 1)

2. **Deploy ke Netlify:**
   - Buka: https://netlify.com
   - Sign up dengan GitHub
   - Klik "Add new site" → "Import an existing project"
   - Pilih GitHub → pilih repository `portfolio-tegar`
   - Build settings (otomatis terdeteksi):
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Klik "Deploy site"
   - ✅ Website online!

---

## Metode 3: GitHub Pages (Static Export)

### Langkah-langkah:

#### 1. Update next.config.ts

Tambahkan di `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
```

#### 2. Build Static
```bash
npm run build
```

#### 3. Deploy ke GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Tambahkan script di package.json
# "deploy": "gh-pages -d out"

# Deploy
npm run deploy
```

#### 4. Setting GitHub Pages
- Buka repository di GitHub
- Settings → Pages
- Source: gh-pages branch
- Save
- Website akan online di: `https://username.github.io/portfolio-tegar`

---

## 📊 Perbandingan Platform

| Platform | Kecepatan | Kemudahan | Domain Gratis | Custom Domain |
|----------|-----------|-----------|---------------|---------------|
| **Vercel** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ .vercel.app | ✅ |
| **Netlify** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ .netlify.app | ✅ |
| **GitHub Pages** | ⭐⭐⭐ | ⭐⭐⭐ | ✅ .github.io | ✅ |

---

## 🎯 Rekomendasi

**Untuk pemula:** Gunakan **Vercel** (Metode 1)
- Paling mudah
- Otomatis deploy setiap kali push ke GitHub
- Gratis selamanya
- Performa terbaik untuk Next.js

---

## 🔧 Troubleshooting

### Error: Git not found
- Install Git dari https://git-scm.com
- Restart terminal/komputer

### Error: Build failed
```bash
# Coba build lokal dulu
npm run build

# Jika ada error, perbaiki dulu
# Lalu commit dan push lagi
```

### Error: Images not loading
- Pastikan semua gambar ada di folder `public/`
- Path harus diawali dengan `/` (contoh: `/images/foto.jpg`)

---

## 📞 Butuh Bantuan?

Jika ada masalah saat hosting, tanyakan saja! 😊

**Link Penting:**
- Vercel: https://vercel.com
- Netlify: https://netlify.com
- GitHub: https://github.com
- Git Download: https://git-scm.com
