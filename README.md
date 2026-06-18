<div align="center">

# 📌 Görev Yöneticim

**React · Tailwind CSS · LocalStorage**

Görevlerini ekle, düzenle, tamamla ve sil.  
Veriler tarayıcında saklanır — sayfa yenilenince kaybolmaz.



## ✨ Özellikler

- ➕ **Görev ekleme** — başlık, açıklama ve öncelik seviyesi ile
- 📋 **Listeleme** — tümü / aktif / tamamlanan filtresiyle
- ✏️ **Düzenleme** — mevcut görevi güncelle
- 🗑️ **Silme** — tek görev veya tamamlananları toplu sil
- 💾 **LocalStorage** — veriler tarayıcıda kalıcı olarak saklanır
- 📊 **İstatistik kartı** — kaç görev var, kaçı tamamlandı
- 📱 **Responsive tasarım** — mobil ve masaüstünde çalışır



## 🖼️ Ekran Görüntüsü

```
┌──────────────────────────────────────┐
│  📌 Görev Yöneticim         %40 ████░│
│  Toplam: 5 | Aktif: 3 | Tamam: 2    │
├──────────────────────────────────────┤
│  ➕ Yeni Görev Ekle                  │
│  ┌─────────────────────────────────┐ │
│  │ Başlık...                       │ │
│  │ Açıklama...                     │ │
│  │ Öncelik: [Orta ▼]   [ Ekle ]   │ │
│  └─────────────────────────────────┘ │
├──────────────────────────────────────┤
│  [ Tümü 5 ] [ Aktif ] [ Tamamlanan ] │
├──────────────────────────────────────┤
│  ○  React öğren          [✏️] [🗑️]  │
│     🔴 Yüksek · 18 Haz 2026         │
│  ✓  HTML tamamla         [✏️] [🗑️]  │
│     🟢 Düşük  · 15 Haz 2026         │
└──────────────────────────────────────┘
```

---

## 📁 Proje Yapısı

```
task-manager-app/
│
├── 📂 public/
│   └── index.html              # Ana HTML şablonu
│
├── 📂 src/
│   ├── 📂 components/          # Yeniden kullanılabilir bileşenler
│   │   ├── TaskForm.jsx        # Ekleme & düzenleme formu
│   │   ├── TaskCard.jsx        # Tek görev kartı
│   │   ├── TaskList.jsx        # Görev listesi
│   │   └── StatsBar.jsx        # İstatistik başlığı
│   │
│   ├── 📂 pages/               # Sayfa bileşenleri
│   │   └── HomePage.jsx        # Ana sayfa — CRUD mantığı burada
│   │
│   ├── 📂 interfaces/          # Veri modelleri
│   │   └── Task.js             # Task tipi ve yardımcı fonksiyonlar
│   │
│   ├── 📂 hooks/               # Özel React hook'ları
│   │   └── useLocalStorage.js  # LocalStorage senkronizasyonu
│   │
│   ├── App.js
│   ├── index.js
│   └── index.css
│
├── tailwind.config.js
├── netlify.toml                # Netlify deploy ayarları
├── .gitignore
└── package.json
```

---

## ⚙️ CRUD İşlemleri

| İşlem | Fonksiyon | Dosya |
|:---:|---|---|
| ➕ **Ekle** | `handleAdd()` | `pages/HomePage.jsx` |
| 📋 **Listele** | filtreli `tasks` state | `components/TaskList.jsx` |
| ✏️ **Güncelle** | `handleUpdate()` | `pages/HomePage.jsx` |
| 🗑️ **Sil** | `handleDelete()` | `pages/HomePage.jsx` |

---

## 🚀 Kurulum

### Gereksinimler

- [Node.js](https://nodejs.org) v16 veya üzeri
- npm (Node.js ile birlikte gelir)

### Adımlar

```bash
# 1. Projeyi klonla
git clone https://github.com/kullanici-adin/task-manager-app.git
cd task-manager-app

# 2. Bağımlılıkları yükle
npm install

# 3. Tailwind CSS kur
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 4. Geliştirme sunucusunu başlat
npm start
```

Tarayıcıda **http://localhost:3000** adresini aç. 🎉

---

## 📦 Production Build

```bash
npm run build
```

`/build` klasörü oluşur. Bu klasör Netlify veya benzeri platformlara yüklenir.

---

## 🌍 Yayına Alma — Netlify

### Yöntem 1: GitHub ile Otomatik Deploy *(Önerilen)*

1. Projeyi GitHub'a yükle
2. [netlify.com](https://netlify.com) → **New site from Git**
3. GitHub repo'nu seç
4. Ayarları gir:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
5. **Deploy site** → ✅

> Her `git push` sonrası Netlify otomatik olarak yeniden deploy eder.

### Yöntem 2: Manuel Upload

```bash
npm run build
# /build klasörünü Netlify'ın sürükle-bırak alanına at
```

---

## 📤 GitHub'a Yükleme

```bash
git init
git add .
git commit -m "ilk commit: görev yöneticisi uygulaması"

# GitHub'da yeni bir public repo oluştur, sonra:
git remote add origin https://github.com/KULLANICI_ADIN/task-manager-app.git
git branch -M main
git push -u origin main
```

---

## 🛠️ Kullanılan Teknolojiler

| Teknoloji | Açıklama |
|---|---|
| [ReactJS](https://react.dev) | UI bileşen mimarisi |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first CSS çerçevesi |
| [LocalStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) | Tarayıcı tabanlı kalıcı veri saklama |
| [React Hooks](https://react.dev/reference/react) | `useState`, `useEffect`, özel `useLocalStorage` |

---

## 📚 Öğrenilen Kavramlar

Bu proje aşağıdaki konuları kapsamaktadır:

- ✅ HTML semantik yapısı
- ✅ CSS utility sınıfları (Tailwind)
- ✅ JavaScript ES6+ (arrow functions, destructuring, spread)
- ✅ React bileşen mimarisi (Component, Props, State)
- ✅ React Hooks (`useState`, `useEffect`)
- ✅ Özel Hook yazımı (`useLocalStorage`)
- ✅ CRUD operasyonları
- ✅ GitHub'a proje yükleme
- ✅ Netlify ile yayına alma

---

## 👤 Geliştirici

**Barış Kaya**

[![GitHub](https://img.shields.io/badge/GitHub-profil-181717?style=flat-square&logo=github)](https://github.com/kullanici-adin)

---

<div align="center">

Eğitim projesi kapsamında geliştirilmiştir · MIT Lisansı

</div>
