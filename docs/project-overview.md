# Tető Felület Számító Alkalmazás

## 📋 Projekt Leírás

Egy modern, web-alapú alkalmazás tetőfedő szakemberek, építési vállalkozók és magánszemélyek számára, amely segít gyorsan és pontosan kalkulálni a tetőfelújítás vagy tetőcsere költségeit.

## 🎯 Fő Funkciók

### MVP (Minimum Viable Product)
- 🗺️ **Cím alapú keresés** - Géokódolás és térképi megjelenítés
- 🛰️ **Satellite képek** - Épület felülnézeti képe
- ✏️ **Kézi rajzolás** - Tető felületek precíz megjelölése
- 📐 **Területszámítás** - Automatikus m² kalkuláció
- 💰 **Költségbecslés** - Anyag és munka költségek
- 📄 **PDF árajánlat** - Professzionális dokumentum generálás

### Post-MVP Fejlesztések
- 👤 Felhasználói fiókok és projekt mentés
- 📂 Tetőforma sablonok (nyereg, kontyolt, mansard)
- 📏 Ereszcsatorna kalkuláció
- 🏢 Saját logó feltöltés
- 📊 Anyagkatalógus bővítés
- 📱 Mobilalkalmazás

## 🌍 Piaci Probléma

Magyarországon nincs magyar nyelvű, könnyen használható tető kalkulátor alkalmazás. A jelenlegi nemzetközi megoldások:
- ❌ Nem magyar nyelvűek
- ❌ Drágák (előfizetés alapúak)
- ❌ Nem veszik figyelembe a magyar piaci árakat
- ❌ Túl komplexek kisebb vállalkozóknak

## ✅ Megoldás

Egy egyszerű, gyors és precíz eszköz, amely:
- ✅ Magyar nyelven működik
- ✅ Magyar címekkel dolgozik
- ✅ Magyar piaci árakat használ
- ✅ Egyszerű felület (öregebb szakembereknek is)
- ✅ Mobil és desktop kompatibilis
- ✅ Ingyenes alapfunkciókkal

## 👥 Célközönség

### Elsődleges
- **Tetőfedők és ácsmesterek** - Gyors, professzionális árajánlatok
- **Kis építési vállalkozók** - Kalkuláció eszköz

### Másodlagos
- **Közös képviselők** - Társasházi felújítások tervezése
- **Pályázatírók** - Dokumentáció készítés
- **Magánszemélyek** - Saját költségbecslés

## 💰 Üzleti Modell (Tervezett)

### Freemium
- **Ingyenes**: 
  - 3 kalkuláció/hónap
  - Alapvető PDF export
  - Standard anyagárak

- **Prémium** (5-10 EUR/hó):
  - Korlátlan kalkuláció
  - Saját logó
  - Projekt mentés
  - Részletes anyagkatalógus
  - Prioritási támogatás

### B2B Lehetőség
- Anyaggyárak white-label megoldása
- Építőanyag kereskedők számára branded verzió

## 🛠️ Technológia

- **Frontend**: Vite + Vanilla JavaScript
- **Térképek**: Leaflet.js + OpenStreetMap
- **Rajzolás**: Fabric.js
- **PDF**: jsPDF
- **Hosting**: Vercel/Netlify (ingyenes)

→ [Részletes technológiai dokumentáció](./technical-stack.md)

## 📅 Fejlesztési Ütemterv

→ [Teljes MVP Roadmap](./mvp-roadmap.md)

**Összesítés:**
- **MVP kész**: 8-13 hét
- **Béta teszt**: +2 hét
- **Public launch**: ~3-4 hónap

## 🚀 Kezdő Lépések (Fejlesztőknek)

```bash
# Repository klónozása
git clone https://github.com/N-Target/copilot-roof-measurement-project.git
cd copilot-roof-measurement-project

# Függőségek telepítése
npm install

# Development szerver indítása
npm run dev

# Build production-re
npm run build
```

## 📁 Projekt Struktúra

```
copilot-roof-measurement-project/
├── docs/                    # Dokumentáció
│   ├── project-overview.md  # Ez a fájl
│   ├── technical-stack.md   # Tech stack részletek
│   └── mvp-roadmap.md       # Fejlesztési ütemterv
├── src/                     # Forráskód
│   ├── index.html          # Fő HTML
│   ├── css/                # Stílusok
│   ├── js/                 # JavaScript modulok
│   └── assets/             # Képek, ikonok
├── public/                 # Statikus fájlok
├── package.json            # NPM konfiguráció
└── vite.config.js          # Vite beállítások
```

## 🤝 Közreműködés

Ez egy nyílt forráskódú projekt. Ha hozzá szeretnél járulni:
1. Fork-old a repository-t
2. Készíts egy feature branch-et (`git checkout -b feature/amazing-feature`)
3. Commit-old a változásokat (`git commit -m 'Add amazing feature'`)
4. Push-old a branch-et (`git push origin feature/amazing-feature`)
5. Nyiss egy Pull Request-et

## 📧 Kapcsolat

- **Projekt tulajdonos**: @N-Target
- **GitHub**: [N-Target/copilot-roof-measurement-project](https://github.com/N-Target/copilot-roof-measurement-project)

## 📝 Licenc

*TODO: Válassz licencet (MIT, GPL, stb.)*

## 🙏 Köszönet

- OpenStreetMap közösség
- Leaflet.js fejlesztők
- Fabric.js csapat
- GitHub Copilot

---

**Verzió**: 0.1.0 (Pre-MVP)  
**Utolsó frissítés**: 2026-02-08  
**Státusz**: 🚧 Aktív fejlesztés alatt