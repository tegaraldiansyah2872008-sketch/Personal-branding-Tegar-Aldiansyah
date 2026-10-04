# 🌐 Panduan Fitur Multi-Bahasa (Indonesia/English)

Fitur multi-bahasa sudah disetup! Sekarang website bisa switch antara Bahasa Indonesia dan English.

## ✅ Yang Sudah Selesai:

1. ✅ **Sistem translations** (`src/lib/translations.ts`)
2. ✅ **Language context** (`src/contexts/language-context.tsx`)
3. ✅ **Navbar dengan tombol bahasa** (icon globe + ID/EN)
4. ✅ **Integration di layout.tsx**

---

## 🔧 Cara Kerja:

### **1. File Translations (`src/lib/translations.ts`)**
Berisi semua teks dalam 2 bahasa:
```typescript
export const translations = {
  en: { /* English text */ },
  id: { /* Indonesian text */ }
}
```

### **2. Language Context**
Menyimpan bahasa yang dipilih user di localStorage, jadi tidak reset saat refresh.

### **3. Tombol di Navbar**
- Icon **Globe** dengan badge **ID** atau **EN**
- Klik untuk switch bahasa
- Tersimpan otomatis di localStorage

---

## 📝 Cara Menggunakan di Component:

### **Import hook:**
```typescript
import { useLanguage } from "@/contexts/language-context"
```

### **Gunakan di component:**
```typescript
export function MyComponent() {
  const { t } = useLanguage()  // t = translations
  
  return (
    <div>
      <h1>{t.hero.greeting}</h1>
      <p>{t.hero.description}</p>
    </div>
  )
}
```

---

## 🎯 Component yang Perlu Diupdate:

Berikut list component yang perlu diupdate untuk support multi-bahasa:

### **✅ Sudah Selesai:**
- [x] `src/components/sections/navbar.tsx`

### **⏳ Perlu Update:**
- [ ] `src/components/sections/hero.tsx`
- [ ] `src/components/sections/about.tsx`
- [ ] `src/components/sections/skills.tsx`
- [ ] `src/components/sections/portfolio.tsx`
- [ ] `src/components/sections/CV.tsx`
- [ ] `src/components/sections/contact.tsx`
- [ ] `src/components/sections/footer.tsx`
- [ ] `src/components/section-heading.tsx`

---

## 📖 Contoh Update Component:

### **Sebelum:**
```typescript
export function Hero() {
  return (
    <div>
      <h1>Hi, Saya</h1>
      <p>Fullstack Developer & Network</p>
    </div>
  )
}
```

### **Sesudah:**
```typescript
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const { t } = useLanguage()
  
  return (
    <div>
      <h1>{t.hero.greeting}</h1>
      <p>{t.hero.role}</p>
    </div>
  )
}
```

---

## 🔄 Workflow Update:

Untuk setiap component:

1. **Import useLanguage** di atas
2. **Panggil hook:** `const { t } = useLanguage()`
3. **Ganti hardcoded text** dengan `t.section.key`
4. **Cek translations.ts** untuk key yang tersedia

---

## 🚀 Testing:

1. Jalankan: `npm run dev`
2. Buka website
3. Klik **icon Globe** di navbar
4. Teks berubah dari Indonesia → English
5. Refresh page → Bahasa tetap tersimpan

---

## 💾 Update File Satu Per Satu:

Saya sudah siapkan semua translations. Sekarang tinggal update component satu per satu.

Mau saya lanjutkan update semua component sekarang? Atau Anda mau coba update sendiri untuk belajar? 😊

---

## 📌 Catatan:

- Bahasa default: **Indonesia** (ID)
- Bisa switch ke: **English** (EN)
- Tersimpan di localStorage
- Tidak perlu refresh setelah ganti bahasa
- Semua teks sudah ditranslate di `translations.ts`

---

**Next Step:** Update semua component dengan pattern di atas! 🎉
