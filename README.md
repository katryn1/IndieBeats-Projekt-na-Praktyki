# IndieBeats – Strona internetowa zespołu indie

**Opis projektu**

IndieBeats to projekt webowy prezentujący zespół muzyczny w stylu Neon-Indie.  
Celem było stworzenie nowoczesnej strony wykorzystującej:

- **Frontend:** Nuxt 3 + Vue 3 + TypeScript
- **Backend:** minimalistyczne API w TypeScript
- **SEO:** zopytmalizowane pod silink wyszukiwania 

Strona pokazuje:

- historię zespołu (`/about`)  
- skład zespołu  
- utwory (`/tracks`)  
- albumy (`/albums`)  
- trasę koncertową (`/events`)  
- merch (`/merch`)  
- kontakt (`/contact`)  

---

## 🔹 Struktura aplikacji

INDIEBEATS/
├── .nuxt/                  # Automatycznie generowane pliki Nuxt
├── node_modules/           # Zależności projektu
├── pages/                  # System routingu oparty na plikach .vue
│   ├── albums/
│   │   ├── [slug].vue      # Widok pojedynczego albumu (dynamiczny)
│   │   └── index.vue       # Lista wszystkich albumów
│   ├── events/
│   │   ├── [slug].vue      # Detale wydarzenia (dynamiczny)
│   │   └── index.vue       # Kalendarz koncertów / Lista wydarzeń
│   ├── merch/
│   │   ├── [slug].vue      # Karta produktu (dynamiczny)
│   │   └── index.vue       # Sklep / Lista produktów
│   ├── tracks/
│   │   ├── [slug].vue      # Detale utworu (dynamiczny)
│   │   └── index.vue       # Lista utworów
│   ├── about.vue           # Strona o zespole
│   ├── background.png      # Tło używane na stronach
│   ├── contact.vue         # Formularz i dane kontaktowe
│   └── index.vue           # Strona główna (Landing Page)
├── public/                 # Statyczne zasoby dostępne publicznie
│   ├── album.png           # Okładka albumu "Krew i Neon"
│   ├── echo.png            # Zasób graficzny
│   ├── favicon.ico         # Ikona strony
│   ├── lena.png            # Zdjęcie członka zespołu (Lena)
│   ├── marcus.png          # Zdjęcie członka zespołu (Marcus)
│   ├── neon.png            # Zasób graficzny / logo
│   ├── oliver.png          # Zdjęcie członka zespołu (Oliver)
│   └── robots.txt          # Konfiguracja dla robotów wyszukiwarek
├── server/
│   └── api/                # Warstwa backendowa (API Routes)
│       ├── albums/
│       │   └── [slug].ts   # Endpoint dla konkretnego albumu
│       ├── events/
│       │   └── [slug].ts   # Endpoint dla konkretnego wydarzenia
│       ├── merch/
│       │   └── [slug].ts   # Endpoint dla konkretnego produktu
│       ├── tracks/
│       │   └── [slug].ts   # Endpoint dla konkretnego utworu
│       ├── albums.ts       # API zwracające listę albumów
│       ├── events.ts       # API zwracające listę koncertów
│       ├── home.ts         # Dane dla strony głównej
│       ├── merch.ts        # API dla sklepu
│       └── tracks.ts       # API dla listy utworów
├── .gitignore              # Pliki ignorowane przez Git
├── nuxt.config.ts          # Główna konfiguracja Nuxt
├── package-lock.json       # Dokładna wersja zainstalowanych pakietów
├── package.json            # Skrypty i definicje zależności
└── README.md               # Dokumentacja projektu

## 🔹 Backend API

1. `/api/home` – dane do strony głównej (nagłówki, opisy)  
2. `/api/items` – lista wszystkich elementów (utwory, albumy, koncerty, merch)  
3. `/api/items/[slug]` – szczegóły elementu dla strony dynamicznej  


## 🔹 Decyzje SEO

1. **Poprawna struktura HTML**  
   - `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`  
   - Jedno logiczne `<h1>` na każdej stronie  

2. **Meta tagi**  
   - `<title>` dopasowany do strony (np. „O nas – IndieBeats”)  
   - `<meta description>` opisuje treść strony, a nie jest lorem ipsum  

3. **Alt dla obrazków**  
   - Każdy obrazek członka zespołu lub merchu ma opis w `alt`, co wspiera SEO  

4. **Linkowanie wewnętrzne**  
   - NuxtLink między podstronami (np. utwory → albumy → merch → koncerty)  
   - Pomaga robotom Google w zrozumieniu struktury  

5. **Treść dopasowana do intencji użytkownika**  
   - Opisy zespołu, historii, utworów i albumów są konkretne  
   - Nie użyto lorem ipsum  

6. **Oddzielenie contentu dla użytkownika od meta**  
   - `<title>` i `<meta description>` zoptymalizowane pod wyszukiwarki  
   - Treść widoczna na stronie jest naturalna i atrakcyjna dla użytkownika  
