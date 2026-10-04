# 🔄 Update Components untuk Multi-Bahasa

File ini berisi instruksi untuk update setiap component agar support multi-bahasa.

## ⚡ Quick Update:

Karena update manual memakan waktu lama, berikut cara tercepat:

### **Opsi 1: Update Manual (Recommended untuk Belajar)**

Untuk setiap file component, lakukan:

1. **Tambahkan import:**
```typescript
import { useLanguage } from "@/contexts/language-context"
```

2. **Panggil hook di dalam component:**
```typescript
export function MyComponent() {
  const { t } = useLanguage()
  // ... rest of code
}
```

3. **Ganti hardcoded text dengan t.section.key:**
   - `"Beranda"` → `{t.nav.home}`
   - `"Hi, Saya"` → `{t.hero.greeting}`
   - dsb (lihat `src/lib/translations.ts` untuk key lengkap)

---

### **Opsi 2: Contoh Per Component**

Saya akan berikan contoh code lengkap untuk beberapa component penting:

---

## 📄 1. Hero Component

**File:** `src/components/sections/hero.tsx`

**Import yang perlu ditambah:**
```typescript
import { useLanguage } from "@/contexts/language-context"
```

**Hook di dalam component:**
```typescript
const { t } = useLanguage()
```

**Text yang perlu diganti:**
- Greeting: `{t.hero.greeting}` (Hi, Saya / Hi, I'm)
- Role: `{t.hero.role}`
- Description: `{t.hero.description}`
- CTA Button: `{t.hero.cta}`

---

## 📄 2. About Component

**File:** `src/components/sections/about.tsx`

**Slides menggunakan array dari translations:**
```typescript
const { t } = useLanguage()

{t.about.slides.map((slide, i) => (
  <div key={i}>
    <h3>{slide.title}</h3>
    <p>{slide.content}</p>
  </div>
))}
```

---

## 📄 3. Contact Component

**File:** `src/components/sections/contact.tsx`

**Text yang perlu diganti:**
- Title: `{t.contact.cta_title}`
- Description: `{t.contact.cta_description}`
- Email title: `{t.contact.email_title}`
- WhatsApp title: `{t.contact.whatsapp_title}`
- Instagram title: `{t.contact.instagram_title}`
- Tip: `{t.contact.tip}`

---

## 📄 4. SectionHeading Component

**File:** `src/components/section-heading.tsx`

Component ini hanya menerima props, jadi tidak perlu diubah!
Tapi pastikan parent component yang memanggil SectionHeading sudah menggunakan translations.

Contoh:
```typescript
<SectionHeading
  label={t.about.label}
  title={t.about.title}
  description={t.about.description}
/>
```

---

## 📄 5. Footer Component

**File:** `src/components/sections/footer.tsx`

**Text yang perlu diganti:**
- Tagline: `{t.footer.tagline}`
- Copyright: `{t.footer.copyright}`
- Back to top: `{t.footer.back_to_top}`

---

## 🎯 Prioritas Update:

**Urgent (User-facing text):**
1. ✅ Navbar (sudah selesai)
2. ⏳ Hero
3. ⏳ Contact
4. ⏳ About

**Medium:**
5. ⏳ Skills
6. ⏳ Portfolio
7. ⏳ CV

**Low (Mostly fixed text):**
8. ⏳ Footer

---

## 🚀 Cara Testing:

1. Update 1 component
2. Save file
3. Refresh browser
4. Klik tombol Globe di navbar
5. Lihat apakah teks berubah

---

## 💡 Tips:

- Jangan lupa `"use client"` di atas file (sudah ada)
- Import `useLanguage` dari `@/contexts/language-context`
- Panggil `const { t } = useLanguage()` di dalam component
- Gunakan `{t.section.key}` untuk teks dinamis
- Teks statis yang tidak perlu ditranslate (email, nomor WA) biarkan saja

---

**Mau saya buatkan code lengkap untuk setiap component? Atau Anda mau coba update sendiri mengikuti pattern ini?** 😊

Kalau mau saya buatkan lengkap, saya akan generate full code untuk Hero, About, Contact, dll dalam pesan berikutnya.
