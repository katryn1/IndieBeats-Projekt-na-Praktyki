<script setup lang="ts">
// Upewniamy się, że dane są pobierane (używamy twojej ścieżki do API)
const { data: albums } = await useFetch("/api/tracks");

useHead({ 
  title: "Dyskografia – IndieBeats",
  bodyAttrs: { class: 'indiebeats-theme' }
});
</script>

<template>
  <main class="tracks-page">
    
    <div class="ambient-background">
      <div class="glow-sphere purple"></div>
      <div class="glow-sphere teal"></div>
    </div>

    <div v-if="albums" class="main-content-wrapper">
      <header class="page-header">
        <span class="badge">Katalog Dźwięków</span>
        <h1 class="neon-title">Nasza Muzyka</h1>
        <p class="subtitle">Przejrzyj historię albumów IndieBeats.</p>
      </header>

      <section v-for="album in albums" :key="album.id" class="album-card">
        <div class="album-content-grid">
          <div class="album-sidebar">
            <div class="album-meta">
              <span class="year-badge">{{ album.releaseYear }}</span>
              <h2 class="album-name">{{ album.albumTitle }}</h2>
            </div>
            <p class="album-desc">{{ album.description }}</p>
          </div>

          <div class="tracks-wrapper">
            <NuxtLink 
              v-for="t in album.tracks" 
              :key="t.id" 
              :to="`/tracks/${t.slug}`" 
              class="track-row"
            >
              <div class="track-left">
                <span class="play-btn">▶</span>
                <span class="track-name">{{ t.title }}</span>
              </div>
              <span class="track-time">{{ t.duration || '3:45' }}</span>
            </NuxtLink>
          </div>
        </div>
      </section>

      <NuxtLink to="/" class="back-home">← Wróć do strony głównej</NuxtLink>
    </div>

    <div v-else class="loading-state">
      <p>Ładowanie dyskografii...</p>
    </div>

  </main>
</template>

<style scoped>
/* Główne ustawienia strony */
.tracks-page {
  background-color: #050509; /* Bardzo ciemne tło */
  min-height: 100vh;
  color: #fff;
  padding: 4rem 1rem;
  position: relative; /* Kluczowe dla pozycjonowania tła */
}

/* --- POPRAWIONE TŁO (z-index: 1) --- */
.ambient-background {
  position: fixed; /* Tło podąża za scrollem */
  top: 0; left: 0; width: 100%; height: 100%;
  z-index: 1; /* NAJNIŻSZA WARSTWA */
  pointer-events: none; /* Kliknięcia przechodzą przez tło */
  overflow: hidden;
}

.glow-sphere {
  position: absolute;
  width: 600px;
  height: 600px;
  filter: blur(120px);
  border-radius: 50%;
  opacity: 0.1; /* Delikatny blask */
}

.purple { top: -200px; right: -200px; background: #6200ee; }
.teal { bottom: -200px; left: -200px; background: #03dac6; }

/* --- POPRAWIONA TREŚĆ (z-index: 10) --- */
.main-content-wrapper {
  position: relative;
  z-index: 10; /* NAJWYŻSZA WARSTWA - Treść na wierzchu tła */
  max-width: 1000px;
  margin: 0 auto;
}

/* --- NAGŁÓWEK --- */
.page-header {
  text-align: center;
  margin-bottom: 5rem;
}

.badge {
  color: #03dac6;
  border: 1px solid rgba(3, 218, 198, 0.3);
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.8rem;
  text-transform: uppercase;
}

.neon-title {
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-weight: 900;
  margin: 1rem 0;
  background: linear-gradient(to bottom, #fff 30%, #a5a5a5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -1px;
}

.subtitle {
  color: #888;
  font-size: 1.1rem;
}

/* --- KARTA ALBUMU --- */
.album-card {
  /* Szklany efekt */
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  margin-bottom: 3rem;
  padding: 2rem;
  transition: all 0.3s ease;
}

.album-card:hover {
  border-color: rgba(98, 0, 238, 0.3);
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.album-content-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr; /* Info obok utworów */
  gap: 2rem;
  align-items: start;
}

@media (max-width: 800px) {
  .album-content-grid { grid-template-columns: 1fr; gap: 1.5rem; }
}

/* Lewa strona karty */
.album-meta { margin-bottom: 1rem; }
.year-badge {
  background: rgba(98, 0, 238, 0.15);
  color: #bb86fc;
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-family: monospace;
}

.album-name {
  font-size: 2.2rem;
  margin: 0.5rem 0;
  font-weight: 800;
  color: #fff;
}

.album-desc {
  color: #aaa;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Prawo - Utwory (Zwarte) */
.tracks-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* Zwarte odstępy między piosenkami */
}

.track-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.9rem 1.2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  text-decoration: none;
  color: #fff;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.track-row:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(3, 218, 198, 0.3);
  transform: translateX(5px);
}

.track-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.play-btn { color: #03dac6; font-size: 0.8rem; opacity: 0.5; }
.track-row:hover .play-btn { opacity: 1; }

.track-name { font-weight: 500; font-size: 1rem; }
.track-time { color: #555; font-size: 0.85rem; font-family: monospace; }

.back-home {
  display: block;
  text-align: center;
  margin-top: 4rem;
  color: #555;
  text-decoration: none;
  transition: color 0.3s;
}

.back-home:hover { color: #fff; }

.loading-state { text-align: center; padding: 5rem; color: #888; }
</style>