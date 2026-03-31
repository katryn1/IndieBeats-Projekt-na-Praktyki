<script setup lang="ts">
const { data } = await useFetch("/api/home", {
  default: () => ({
    headline: "Witaj w Magicznym Lesie Brzmień",
    description: "IndieBeats: Gdzie neonowa energia spotyka baśniową melancholię."
  })
});

useHead({ 
  title: "IndieBeats – Oficjalna Strona Zespołu | Krew i Neon",
  meta: [
    { name: 'description', content: 'Oficjalna strona zespołu IndieBeats. Poznaj nasze brzmienie Neon-Indie, sprawdź trasę koncertową i zamów najnowszy merch.' },
    { property: 'og:title', content: 'IndieBeats – Oficjalna Strona Zespołu' },
    { property: 'og:description', content: 'Gdzie neonowa energia spotyka baśniową melancholię. Posłuchaj nowego albumu Krew i Neon.' },
    { property: 'og:image', content: '/album.png' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'IndieBeats – Oficjalna Strona Zespołu' },
    { name: 'twitter:description', content: 'Poznaj świat IndieBeats. Nowy album już dostępny.' },
    { name: 'twitter:image', content: '/album.png' },
    { name: 'theme-color', content: '#6200ee' }
  ],
  bodyAttrs: { class: 'indiebeats-theme' },
  htmlAttrs: { lang: 'pl' }
});
</script>

<template>
  <div class="page-wrapper">
    
    <section class="hero-section">
      <div class="hero-overlay"></div>
      
      <div class="container">
        <header class="hero-content">
          <div class="neon-logo">IndieBeats</div>
          <h1 class="main-title">{{ data?.headline }}</h1>
          <p class="main-desc">{{ data?.description }}</p>
        </header>

        <nav class="glass-nav">
          <NuxtLink to="/tracks" class="nav-item"><span>🎵</span> Utwory</NuxtLink>
          <NuxtLink to="/albums" class="nav-item"><span>💽</span> Albumy</NuxtLink>
          <NuxtLink to="/events" class="nav-item"><span>✨</span> Trasa</NuxtLink>
          <NuxtLink to="/merch" class="nav-item"><span>👕</span> Merch</NuxtLink>
          <NuxtLink to="/about" class="nav-item"><span>📖</span> O nas</NuxtLink>
          <NuxtLink to="/contact" class="nav-item"><span>📩</span> Kontakt</NuxtLink>
        </nav>

        <div class="scroll-hint">Przewiń, aby odkryć nowość ⬇️</div>
      </div>
    </section>

    <section class="album-section">
      <div class="album-overlay"></div>
      
      <div class="container album-grid">
        <div class="album-text">
          <span class="status-badge">Nowe Wydanie</span>
          <h2 class="album-title">Krew i Neon</h2>
          <p>
            Nasz najnowszy album to podróż przez mroczne zakamarki miasta, 
            gdzie czerwień krwi miesza się z zimnym blaskiem neonów. 
            Premiera już wkrótce we wszystkich serwisach streamingowych.
          </p>
          <div class="action-buttons">
            <button class="btn-primary">Pre-save na Spotify</button>
            <button class="btn-secondary">Zobacz tracklistę</button>
          </div>
        </div>

        <img src="/album.png" alt="Krew i Neon Album Cover" class="album-img" />
      </div>
    </section>

  </div>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #050509;
  overflow-x: hidden;
}

#__nuxt {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
}

.indiebeats-theme {
  background-color: #050509;
  color: #fff;
  margin: 0;
  font-family: 'Inter', sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
}

.hero-section {
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background-image: url(background.png);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, rgba(10,10,20,0.3) 0%, rgba(5,5,9,0.9) 90%);
}

.neon-logo {
  font-size: 3.5rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #fff;
  text-shadow: 0 0 10px #03dac6, 0 0 20px #6200ee;
  margin-bottom: 1rem;
}

.main-title {
  font-size: clamp(2rem, 5vw, 4rem);
  margin-bottom: 1rem;
  background: linear-gradient(to right, #03dac6, #fff, #6200ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.main-desc {
  font-size: 1.2rem;
  color: #ccc;
  max-width: 600px;
  margin-bottom: 3rem;
}

.glass-nav {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.nav-item {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 12px;
  text-decoration: none;
  color: #fff;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: 0.3s;
}

.nav-item:hover {
  transform: translateY(-5px);
  background: rgba(98, 0, 238, 0.2);
  border-color: #6200ee;
}

.album-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background-color: #0a0000;
  padding: 100px 0;
}

.album-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, #050509 0%, transparent 20%, #0a0000 100%);
}

.album-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

@media (max-width: 768px) {
  .album-grid { grid-template-columns: 1fr; text-align: center; }
}

.status-badge {
  color: #ff0000;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 0.9rem;
  border: 1px solid #ff0000;
  padding: 5px 15px;
  border-radius: 20px;
}

.album-title {
  font-size: clamp(3rem, 8vw, 5rem);
  margin: 20px 0;
  color: #fff;
  text-shadow: 0 0 15px #ff0000;
}

.album-img {
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0 0 50px rgba(255, 0, 0, 0.3);
  transition: transform 0.5s;
}

.album-img:hover {
  transform: scale(1.05) rotate(2deg);
}

.btn-primary {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 15px;
  box-shadow: 0 0 15px rgba(255, 0, 0, 0.4);
}

.btn-secondary {
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  padding: 15px 30px;
  border-radius: 5px;
  cursor: pointer;
}

.scroll-hint {
  margin-top: 4rem;
  text-align: center;
  color: #03dac6;
  font-size: 0.9rem;
  letter-spacing: 2px;
}
</style>