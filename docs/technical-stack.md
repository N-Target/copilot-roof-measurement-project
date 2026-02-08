# Technológiai Stack

## 🎯 Projekt Célja
Egy web-alapú tető felület számító alkalmazás, amely satellite képek és kézi rajzolás segítségével kalkulálja a tetőfedési költségeket.

---

## 🖥️ Frontend Stack

### Core Technologies
- **Vite 5.x** - Build tool és dev server
  - Gyors hot reload
  - Modern ES modules
  - Egyszerű konfiguráció  

- **Vanilla JavaScript (ES6+)** - Alap programozási nyelv
  - Nincs framework overhead
  - Gyors tanulási görbe
  - Később könnyen átírható React/Vue-ra

- **HTML5 & CSS3** - Markup és styling
  - Semantic HTML
  - Modern CSS (Grid, Flexbox)
  - Responsive design

### UI/Styling
- **Tailwind CSS** - Utility-first CSS framework
  - Gyors fejlesztés
  - Kis bundle size
  - Testreszabható  
  
### Térképes Funkciók
- **Leaflet.js 1.9+** - Interaktív térképek
  - OpenStreetMap integration
  - Satellite tile layers
  - Zoom, pan, markers
  - Ingyenes, open-source

- **Nominatim API** - Géokódolás (cím → koordináták)
  - OpenStreetMap geocoding service
  - Ingyenes használat
  - Magyar címek támogatása

### Rajzolás & Canvas
- **Fabric.js 5.x** - Canvas manipuláció
  - Sokszögek (polygons) rajzolása
  - Drag & drop pontok
  - Terület számítás
  - SVG export

### PDF Generálás
- **jsPDF 2.x** - PDF készítés böngészőben
  - Client-side PDF generation
  - Képek, táblázatok beillesztése
  - Magyar karakterek támogatása

---

## 🔧 Backend Stack (Később, Post-MVP)

### API & Server
- **Node.js + Express** vagy **Python + FastAPI**
  - RESTful API
  - User authentication
  - Projektek mentése

### Adatbázis
- **PostgreSQL + PostGIS** - Térbeli adatok tárolása
  - Geospatial queries
  - Projektek, felhasználók
  - Anyagkatalógus

### File Storage
- **AWS S3** vagy **Cloudflare R2**
  - PDF-ek tárolása
  - Felhasználói logók
  - Drónfelvételek (későbbi feature)

---

## 📦 Package Dependencies

### Development
```json
{
  "vite": "^5.0.0",
  "tailwindcss": "^3.4.0",
  "postcss": "^8.4.0",
  "autoprefixer": "^10.4.0"
}
```

### Production
```json
{
  "leaflet": "^1.9.4",
  "fabric": "^5.3.0",
  "jspdf": "^2.5.1"
}
```

---

## 🌐 External APIs

| Service | Purpose | Cost | Limits |
|---------|---------|------|--------|
| OpenStreetMap | Térképi tiles | Ingyenes | Fair use |
| Nominatim | Géokódolás | Ingyenes | 1 req/sec |
| Mapbox (opcionális) | Satellite képek | Free tier | 50k requests/hó |

---

## 🚀 Deployment

### MVP Hosting
- **Frontend**: Vercel / Netlify
  - Ingyenes tier
  - Auto-deploy from GitHub
  - HTTPS included
  - CDN globally

### Post-MVP
- **Backend**: Railway / Render
- **Database**: Supabase / Railway
- **Domain**: .hu domain (~3000 Ft/év)

---

## 📱 Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

**Mobile:**
- iOS Safari 14+
- Chrome Mobile 90+

---

## 🔒 Security Considerations

### MVP
- Client-side validation
- HTTPS only (enforced by Vercel/Netlify)
- No sensitive data storage yet

### Post-MVP
- JWT authentication
- Password hashing (bcrypt)
- Rate limiting
- CORS policies
- Input sanitization

---

## 📊 Performance Targets

| Metric | Target | Tools |
|--------|--------|-------|
| First Contentful Paint | < 1.5s | Lighthouse |
| Time to Interactive | < 3s | Lighthouse |
| Bundle Size | < 500KB | Vite bundle analyzer |
| Lighthouse Score | > 90 | Chrome DevTools |

---

## 🧪 Testing (Post-MVP)

- **Unit Tests**: Vitest
- **E2E Tests**: Playwright
- **Visual Regression**: Percy (opcionális)

---

## 📚 Development Tools

- **IDE**: VS Code
- **Extensions**:
  - Tailwind CSS IntelliSense
  - ESLint
  - Prettier
  - Live Server  
- **Version Control**: Git + GitHub
- **Package Manager**: npm vagy pnpm

---

## 🎨 Design Resources

- **Icons**: Heroicons / Font Awesome
- **Fonts**: Google Fonts (Roboto / Inter)
- **Colors**: Tailwind default palette
- **Wireframes**: Figma (ha kell)

---

## 🔄 Migration Path (Ha később kell)

### React/Vue átállás
```
Vanilla JS → React
├── Components izolálása
├── State management (useState/Pinia)
├── Routing (React Router/Vue Router)
└── Fokozatos átírás
```

---

## ✅ Döntések Indoklása

### Miért Vanilla JS és nem React?
- ✅ Gyorsabb kezdés (nincs setup overhead)
- ✅ Kevesebb tanulnivaló
- ✅ Kisebb bundle size
- ✅ MVP-hez elegendő
- ✅ Később átírható

### Miért Leaflet és nem Google Maps?
- ✅ Ingyenes, korlátlan használat
- ✅ Open-source
- ✅ Jó magyar térképi lefedettség
- ✅ Könnyű integráció

### Miért Vite és nem Webpack?
- ✅ Gyorsabb dev server
- ✅ Egyszerűbb konfiguráció
- ✅ Modern, aktív fejlesztés
- ✅ Out-of-the-box TypeScript support (ha később kell)

---

**Utolsó frissítés:** 2026-02-08
**Verzió:** 1.0 (MVP)