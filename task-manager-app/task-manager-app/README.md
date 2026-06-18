# 📌 Görev Yöneticim — React + Tailwind CSS

> Eğitim projesi kapsamında geliştirilen, **ReactJS** ve **Tailwind CSS** kullanan tam CRUD görev yönetici uygulaması.

---

## 🚀 Proje Özeti

| Özellik | Detay |
|---|---|
| **Çerçeve** | ReactJS (CRA) |
| **Stil** | Tailwind CSS |
| **Veri Saklama** | LocalStorage |
| **Deploy** | Netlify |

---

## 📁 Dosya Ağaç Yapısı

```
task-manager-app/
├── public/
│   └── index.html
├── src/
│   ├── components/          ← Yeniden kullanılabilir bileşenler
│   │   ├── TaskForm.jsx     ← Ekle & Güncelle formu
│   │   ├── TaskCard.jsx     ← Tek görev kartı
│   │   ├── TaskList.jsx     ← Görev listesi
│   │   └── StatsBar.jsx     ← İstatistik başlığı
│   ├── pages/               ← Sayfa bileşenleri
│   │   └── HomePage.jsx     ← Ana sayfa (CRUD mantığı burada)
│   ├── interfaces/          ← Veri modelleri / tip tanımları
│   │   └── Task.js          ← Task modeli ve yardımcı fonksiyonlar
│   ├── hooks/               ← Özel React hook'ları
│   │   └── useLocalStorage.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── netlify.toml
├── .gitignore
└── package.json
```

---

## ✅ CRUD İşlemleri

| İşlem | Nerede? | Açıklama |
|---|---|---|
| **Ekle** | `TaskForm.jsx` → `HomePage.jsx / handleAdd` | Yeni görev oluşturur |
| **Listele** | `TaskList.jsx` + filtreler | Tüm/Aktif/Tamamlanan görünümü |
| **Güncelle** | `TaskForm.jsx` → `HomePage.jsx / handleUpdate` | Başlık, açıklama, öncelik düzenlenir |
| **Sil** | `TaskCard.jsx` → `HomePage.jsx / handleDelete` | Onay sonrası kalıcı silme |

---

## 🛠 Kurulum

### 1. Bağımlılıkları Yükle

```bash
npm install
```

### 2. Tailwind CSS Kur

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Geliştirme Sunucusunu Başlat

```bash
npm start
```

Tarayıcıda `http://localhost:3000` adresine git.

---

## 📦 Production Build

```bash
npm run build
```

`/build` klasörü oluşur — Netlify'a bu klasör yüklenir.

---

## 🌍 Netlify ile Yayına Alma

### Yöntem 1: GitHub Entegrasyonu (Önerilen)

1. Projeyi GitHub'a yükle (aşağıya bak)
2. [netlify.com](https://netlify.com) → **New site from Git**
3. GitHub repo'nu seç
4. Build komutu: `npm run build`
5. Publish directory: `build`
6. **Deploy site** düğmesine tıkla ✅

Repo'ya her `git push` yaptığında Netlify otomatik deploy eder.

### Yöntem 2: Manuel Upload

```bash
npm run build
# /build klasörünü Netlify'ın "drag & drop" alanına sürükle
```

---

## 📤 GitHub'a Yükleme

```bash
# 1. Repo başlat
git init
git add .
git commit -m "ilk commit: görev yöneticisi uygulaması"

# 2. GitHub'da yeni bir public repo oluştur, sonra:
git remote add origin https://github.com/KULLANICI_ADIN/task-manager-app.git
git branch -M main
git push -u origin main
```

---

## 🖼 Ekran Görüntüsü

> `npm start` sonrası tarayıcıda görünüm:

```
┌────────────────────────────────┐
│  📌 Görev Yöneticim    %60 ██░ │
│  Toplam:3 | Aktif:1 | Tamam:2  │
├────────────────────────────────┤
│  ➕ Yeni Görev Ekle            │
│  [Başlık        ] [Ekle]       │
├────────────────────────────────┤
│  [Tümü] [Aktif] [Tamamlanan]   │
├────────────────────────────────┤
│ ● React öğren      [✏][🗑]    │
│ ✓ HTML tamamla     [✏][🗑]    │
└────────────────────────────────┘
```

---

## 📚 Kullanılan Teknolojiler

- **ReactJS** — UI bileşen mimarisi
- **Tailwind CSS** — utility-first CSS çerçevesi
- **LocalStorage API** — tarayıcı tabanlı kalıcı veri saklama
- **React Hooks** — `useState`, `useEffect`, özel `useLocalStorage`

---

## 👤 Geliştirici

Adın Soyadın — [GitHub Profilin](https://github.com/kullanici_adin)

**Netlify URL:** https://proje-adi.netlify.app
