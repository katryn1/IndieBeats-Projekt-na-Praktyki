<script setup lang="ts">
const { data: albums } = await useFetch("/api/albums");
useHead({ title: "Albumy – IndieBeats" });
</script>

<template>
  <main class="albums-page">
    <div class="ambient-bg"></div>

    <div class="container">
      <header class="page-header">
        <span class="badge">Dyskografia</span>
        <h1 class="neon-title">Albumy</h1>
      </header>

      <section v-if="albums" class="albums-grid">
        <article v-for="a in albums" :key="a.id" class="album-item">
          <NuxtLink :to="`/albums/${a.slug}`" class="album-link">
            <div class="cover-wrapper">
              <img :src="a.cover" :alt="a.title" class="album-cover" />
              <div class="cover-overlay">
                <span>Zobacz szczegóły</span>
              </div>
            </div>
            <div class="album-info">
              <h3>{{ a.title }}</h3>
              <p class="year">{{ a.year }}</p>
            </div>
          </NuxtLink>
        </article>
      </section>

      <NuxtLink to="/" class="back-home">← Wróć do strony głównej</NuxtLink>
    </div>
  </main>
</template>

<style scoped>
.albums-page {
  background-color: #050509;
  min-height: 100vh;
  color: #fff;
  padding: 4rem 1rem;
  position: relative;
}

.ambient-bg {
  position: fixed;
  inset: 0;
  background: radial-gradient(circle at 50% -10%, rgba(98, 0, 238, 0.15), transparent 50%);
  z-index: 0;
}

.container {
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
}

.page-header { text-align: center; margin-bottom: 4rem; }
.badge { color: #03dac6; border: 1px solid rgba(3, 218, 198, 0.3); padding: 0.4rem 1rem; border-radius: 50px; font-size: 0.8rem; text-transform: uppercase; }
.neon-title { font-size: 4rem; margin: 1rem 0; background: linear-gradient(to bottom, #fff, #888); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

/* SIATKA 3-KOLUMNOWA */
.albums-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 kolumny obok siebie */
  gap: 2.5rem;
}

@media (max-width: 900px) { .albums-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .albums-grid { grid-template-columns: 1fr; } }

.album-link { text-decoration: none; color: inherit; }

.cover-wrapper {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 15px;
  background: #111;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.album-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cover-overlay {
  position: absolute;
  inset: 0;
  background: rgba(98, 0, 238, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
  backdrop-filter: blur(5px);
}

.album-item:hover .cover-wrapper { transform: scale(1.05) translateY(-10px); }
.album-item:hover .cover-overlay { opacity: 1; }

.album-info { margin-top: 1.5rem; text-align: center; }
.album-info h3 { font-size: 1.5rem; margin: 0; }
.year { color: #03dac6; font-family: monospace; margin-top: 5px; }

.back-home { display: block; text-align: center; margin-top: 5rem; color: #444; text-decoration: none; }
.back-home:hover { color: #fff; }
</style>