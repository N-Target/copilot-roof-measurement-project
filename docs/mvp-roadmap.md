# MVP Roadmap - Fejlesztési Ütemterv

## 🎯 MVP Célkitűzés

Egy működőképes, alapvető funkciókkal rendelkező alkalmazás létrehozása 8-12 hét alatt, amely:
- Cím alapján betölt egy satellite képet
- Lehetővé teszi tető felületek kézi rajzolását
- Egyszerű anyag- és munkaköltség kalkulációt végez
- PDF árajánlatot generál

---

## 📅 Fázis 1: Alapok (1-2 hét)

### Hét 1: Projekt Setup
- [x] Repository létrehozása
- [ ] Projekt struktúra kialakítása
- [ ] Development environment beállítása
- [ ] Git workflow meghatározása (branch stratégia)

**Deliverables:**
```
copilot-roof-measurement-project/
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   └── src/
├── backend/
│   └── package.json
├── docs/
└── .gitignore
```

### Hét 2: UI/UX Wireframes
- [ ] Landing page design (Figma vagy kézi rajz)
- [ ] Főképernyő layout (térkép + eszköztár)
- [ ] Kalkuláció űrlap
- [ ] PDF preview

**Eszközök:** Figma, Excalidraw, vagy papír+ceruza

---

## 🗺️ Fázis 2: Térkép & Geocoding (2-3 hét)

### Hét 3-4: Térkép Integráció
- [ ] Leaflet.js beállítása
- [ ] OpenStreetMap tiles betöltése
- [ ] Cím keresés (Nominatim API)
- [ ] Geokódolás (cím → koordináták)
- [ ] Térkép zoom és pan funkciók

**Példa kód:**
```javascript
// Alapvető Leaflet térkép
const map = L.map('map').setView([47.4979, 19.0402], 13); // Budapest
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
```

### Hét 5: Satellite Képek
- [ ] Mapbox vagy Google Static API integráció
- [ ] Satellite réteg váltás (utca/satellite)
- [ ] Képek cache-elése
- [ ] Error handling (ha nincs satellite kép)

---

## ✏️ Fázis 3: Rajzolás & Szerkesztés (2-3 hét)

### Hét 6-7: Canvas Rajzolás
- [ ] Fabric.js vagy Konva.js beállítása
- [ ] Sokszög rajzolás eszköz (polygon tool)
- [ ] Pontok hozzáadása/törlése
- [ ] Szerkesztés mód (drag & drop pontok)
- [ ] Terület számítás (pixel → m²)

**Funkciók:**
- Kattintással új pont hozzáadása
- Utolsó pont törlése (undo)
- Sokszög lezárása (close polygon)
- Méretek megjelenítése

### Hét 8: Többszegmensű Tetők
- [ ] Több sokszög rajzolása (különböző tetőfelületek)
- [ ] Szegmensek listája (sidebar)
- [ ] Szegmens szerkesztése/törlése
- [ ] Csatorna vonal vs. tető él megkülönböztetése
- [ ] Összterület számítás

---

## 💰 Fázis 4: Kalkuláció (1-2 hét)

### Hét 9: Anyagok & Munka
- [ ] Anyag adatbázis (hardcoded vagy JSON)
  - Tetőfedő anyagok (cserép, lemez, zsindely)
  - Szigetelő fólia
  - Lécezés
  - Ereszcsatorna
- [ ] Munkafolyamatok listája
  - Bontás (opcionális)
  - Lécezés
  - Fólia
  - Fedés
- [ ] Kalkuláció logika (terület × egységár)

**Példa struktúra:**
```javascript
const materials = [
  { id: 1, name: 'Cserép téglavörös', price: 3500, unit: 'm²' },
  { id: 2, name: 'Trapézlemez', price: 2800, unit: 'm²' },
  { id: 3, name: 'Szigetelő fólia', price: 800, unit: 'm²' }
];
```

### Hét 10: Kalkuláció UI
- [ ] Anyag választó (dropdown vagy checkbox)
- [ ] Munkafolyamatok kiválasztása
- [ ] Egységárak megjelenítése/szerkesztése
- [ ] Összegzés (előnézet)

---

## 📄 Fázis 5: PDF Generálás (1-2 hét)

### Hét 11: PDF Export
- [ ] jsPDF integráció
- [ ] PDF sablon (2-3 oldal)
  - **1. oldal**: Fejléc, cím, összesítő táblázat
  - **2. oldal**: Tető rajz (screenshot vagy SVG)
  - **3. oldal**: Tételes költségbecslés
- [ ] Saját logó feltöltés (opcionális MVP-ben)

**Példa kód:**
```javascript
import jsPDF from 'jspdf';

const doc = new jsPDF();
doc.text('Tetőfelület Árajánlat', 10, 10);
doc.text(`Cím: ${address}`, 10, 20);
doc.text(`Összterület: ${totalArea} m��`, 10, 30);
doc.save('ajanlat.pdf');
```

### Hét 12: Finomítások
- [ ] PDF formázás (betűtípusok, színek)
- [ ] Táblázatok (anyagok, munkák)
- [ ] Képek beillesztése (tető rajz)
- [ ] PDF letöltés gomb

---

## 🧪 Fázis 6: Tesztelés & Deploy (1 hét)

### Hét 12: Tesztelés
- [ ] Manuális tesztek (különböző címek)
- [ ] Edge case-ek (rossz cím, nincs satellite kép)
- [ ] Mobil reszponzivitás ellenőrzése
- [ ] Böngésző kompatibilitás (Chrome, Firefox, Safari)

### Deploy
- [ ] Frontend deploy (Vercel/Netlify)
- [ ] Domain név (opcionális)
- [ ] HTTPS beállítása
- [ ] Landing page (projekt bemutató)

---

## ✅ MVP Checklist - Kész Funkciók

Egy funkció akkor **kész**, ha:
- [ ] Működik hibamentesen
- [ ] Mobil és desktop nézetben is használható
- [ ] Van error handling (mit csinál rossz input esetén?)
- [ ] Kód kommentálva (főbb részek)

---

## 🚀 MVP Után (Post-MVP)

### Fázis 2 Továbbfejlesztések
1. **Felhasználói fiókok**
   - Regisztráció/bejelentkezés
   - Projektek mentése
   
2. **Sablonok**
   - Előre definiált tetőformák (nyereg, kontyolt, mansard)
   - Gyors betöltés
   
3. **Ereszcsatorna kalkuláció**
   - Hossz mérése
   - Anyagköltség
   
4. **Admin panel**
   - Anyagárak szerkesztése
   - Felhasználók kezelése

---

## 📊 Időbecslés Összesítő

| Fázis | Hetek | Fő Feladatok |
|-------|-------|--------------|
| 1. Alapok | 1-2 | Setup, wireframes |
| 2. Térkép | 2-3 | Leaflet, geocoding, satellite |
| 3. Rajzolás | 2-3 | Canvas, polygon, szerkesztés |
| 4. Kalkuláció | 1-2 | Anyagok, munka, UI |
| 5. PDF | 1-2 | jsPDF, sablon, export |
| 6. Deploy | 1 | Tesztelés, hosting |
| **ÖSSZESEN** | **8-13 hét** | **MVP kész** |

---

## 💡 Tippek a Fejlesztéshez

1. **Kezdd az egyszerűvel:** Ne próbálj mindent egyszerre megcsinálni
2. **Tesztelj folyamatosan:** Minden új funkció után próbáld ki
3. **Commit gyakran:** Kis lépésekben, értelmes commit üzenetekkel
4. **Dokumentálj:** Írj megjegyzéseket a kódba, ha valami trükkös
5. **Kérdezz:** Ha elakadsz, kérdezz! (GitHub Issues vagy itt a chatben)

---

**Kezdjük?** Mondd meg, melyik fázissal szeretnél indítani! 🚀