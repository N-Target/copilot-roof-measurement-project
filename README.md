# 🏠 Tető Kalkulátor - Roof Measurement Calculator

## 📋 Projekt Leírás

Modern, web-alapú tető felület számító alkalmazás tetőfedő szakemberek, építési vállalkozók és magánszemélyek számára.

## ✨ Főbb Funkciók

- 🗺️ **Cím alapú keresés** - Magyar címek keresése
- 🛰️ **Interaktív térkép** - OpenStreetMap integráció
- ✏️ **Tető rajzolás** - Kézi rajzolás a térképen
- 📐 **Területszámítás** - Automatikus m² kalkuláció
- 💰 **Költségbecslés** - Anyag és munkaköltség kalkuláció
- 📄 **PDF export** - Professzionális árajánlat generálás

## 🚀 Gyors Telepítés

```bash
# Repository klónozása
git clone https://github.com/N-Target/copilot-roof-measurement-project.git
cd copilot-roof-measurement-project

# Függőségek telepítése
npm install

# Development szerver indítása
npm run dev
```

A böngésződben nyisd meg: `http://localhost:3000`

## 📁 Projekt Struktúra

```
copilot-roof-measurement-project/
├── docs/                    # Dokumentáció
│   ├── project-overview.md
│   ├── technical-stack.md
│   └── mvp-roadmap.md
├── src/                     # Forráskód
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── app.js
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Technológiák

- **Vite** - Build tool
- **Leaflet.js** - Térképek
- **Fabric.js** - Canvas rajzolás
- **jsPDF** - PDF generálás
- **Vanilla JavaScript** - Nincs framework overhead

## 📖 Használati Útmutató

### 1. Cím keresése
Írj be egy magyar címet (pl: "Budapest, Andrássy út 1") és kattints a **Keresés** gombra.

### 2. Tető rajzolása
- Kattints a **Rajzolás indítása** gombra
- Jelöld ki a tető sarkait a térképen
- Befejezéshez kattints újra a gombra

### 3. Kalkuláció
- Válassz tetőfedő anyagot
- Jelöld be a szükséges munkákat
- Kattints a **Kalkuláció** gombra

### 4. PDF Export
Kattints a **PDF Árajánlat** gombra a dokumentum letöltéséhez.

## 🎯 Roadmap

- [x] Alapvető projekt struktúra
- [x] Térkép integráció
- [x] Cím keresés
- [x] Rajzolás funkció
- [x] Kalkuláció
- [x] PDF export
- [ ] Felhasználói fiókok
- [ ] Projekt mentés
- [ ] Tetőforma sablonok
- [ ] Mobilalkalmazás

## 🤝 Közreműködés

Pull request-eket szívesen fogadunk! Nagyobb változtatások esetén nyiss egy issue-t.

## 📧 Kapcsolat

- **GitHub**: [@N-Target](https://github.com/N-Target)
- **Projekt**: [copilot-roof-measurement-project](https://github.com/N-Target/copilot-roof-measurement-project)

## 📝 Licenc

MIT License - lásd a LICENSE fájlt a részletekért.

---

**Verzió**: 0.1.0  
**Státusz**: 🚧 MVP Fejlesztés alatt  
**Utolsó frissítés**: 2026-02-08