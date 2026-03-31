<script setup lang="ts">
const route = useRoute();
// Pobieramy dane o utworze z Twojego API
const { data: track, error } = await useFetch(`/api/tracks/${route.params.slug}`);

useHead({ 
  title: track.value ? `${track.value.title} – IndieBeats` : "Utwór" 
});
</script>

<template>
  <main class="track-detail-page">
    <div class="background-overlay"></div>

    <div v-if="track" class="container">
      <NuxtLink to="/tracks" class="back-link">← POWRÓT DO PLAYLISTY</NuxtLink>

      <div class="player-container">
        <div class="visual-side">
          <div class="vinyl-record">
            <div class="record-center"></div>
          </div>
          <div class="wave-animation">
            <div v-for="n in 20" :key="n" class="bar"></div>
          </div>
        </div>

        <div class="info-side">
          <div class="track-header">
            <span class="now-playing">TERAZ ODTWARZANE</span>
            <h1>{{ track.title }}</h1>
            <p class="album-name">Album: Neon Dreams</p>
          </div>

          <div class="player-controls">
            <div class="progress-area">
              <div class="time-info">
                <span>0:00</span>
                <span>{{ track.duration }}</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill"></div>
              </div>
            </div>

            <div class="buttons-row">
              <button class="ctrl-btn secondary">⏮</button>
              <button class="ctrl-btn main-play">▶</button>
              <button class="ctrl-btn secondary">⏭</button>
            </div>
          </div>

          <div class="lyrics-preview">
            <h3>O utworze</h3>
            <p>
              „{{ track.title }}” to esencja brzmienia IndieBeats. Utwór łączy w sobie 
              głębokie linie basowe z nostalgicznym syntezatorem lat 80.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="error-state">
      <h2>Nie znaleziono utworu.</h2>
      <NuxtLink to="/tracks">Wróć do utworów</NuxtLink>
    </div>
  </main>
</template>

<style scoped>
.track-detail-page {
  background: radial-gradient(circle at center, #1a1a2e 0%, #050509 100%);
  min-height: 100vh;
  color: #fff;
  padding: 6rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container { max-width: 1000px; width: 100%; position: relative; z-index: 10; }

.back-link {
  color: #03dac6;
  text-decoration: none;
  font-weight: 800;
  font-size: 0.8rem;
  letter-spacing: 2px;
  margin-bottom: 2rem;
  display: inline-block;
}

/* PLAYER BOX */
.player-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: rgba(13, 13, 18, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 40px;
  overflow: hidden;
  backdrop-filter: blur(20px);
  box-shadow: 0 50px 100px rgba(0,0,0,0.8);
}

@media (max-width: 800px) { .player-container { grid-template-columns: 1fr; } }

/* WIZUALIZACJA */
.visual-side {
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  position: relative;
}

.vinyl-record {
  width: 250px;
  height: 250px;
  background: repeating-radial-gradient(#222, #000 10%);
  border-radius: 50%;
  position: relative;
  box-shadow: 0 0 30px rgba(0,0,0,1);
  animation: spin 5s linear infinite;
}

.record-center {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 80px; height: 80px;
  background: #03dac6;
  border-radius: 50%;
  border: 5px solid #111;
}

@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

.wave-animation {
  display: flex;
  gap: 4px;
  height: 40px;
  margin-top: 3rem;
  align-items: center;
}

.bar {
  width: 4px;
  height: 100%;
  background: #03dac6;
  border-radius: 2px;
  animation: wave 1s ease-in-out infinite alternate;
}

@keyframes wave { 
  from { height: 10%; opacity: 0.3; } 
  to { height: 100%; opacity: 1; } 
}

/* INFO */
.info-side { padding: 4rem; display: flex; flex-direction: column; justify-content: space-between; }

.now-playing { color: #03dac6; font-weight: 800; font-size: 0.7rem; letter-spacing: 3px; }
h1 { font-size: 3.5rem; margin: 0.5rem 0; font-weight: 900; }
.album-name { color: #666; margin-bottom: 2rem; }

/* KONTROLKI */
.progress-area { margin-bottom: 2rem; }
.time-info { display: flex; justify-content: space-between; font-family: monospace; color: #555; margin-bottom: 8px; }
.progress-bar { width: 100%; height: 6px; background: #222; border-radius: 3px; overflow: hidden; }
.progress-fill { width: 35%; height: 100%; background: #03dac6; box-shadow: 0 0 10px #03dac6; }

.buttons-row { display: flex; align-items: center; gap: 2rem; justify-content: center; }
.ctrl-btn { background: none; border: none; color: #fff; font-size: 1.5rem; cursor: pointer; transition: 0.3s; }
.main-play { 
  width: 70px; height: 70px; 
  background: #fff; color: #000; 
  border-radius: 50%; font-size: 2rem; 
  display: flex; align-items: center; justify-content: center;
}
.main-play:hover { transform: scale(1.1); box-shadow: 0 0 30px rgba(255,255,255,0.2); }
.secondary:hover { color: #03dac6; }

.lyrics-preview { margin-top: 3rem; border-top: 1px solid #222; padding-top: 2rem; }
.lyrics-preview h3 { font-size: 0.8rem; color: #444; text-transform: uppercase; margin-bottom: 1rem; }
.lyrics-preview p { color: #888; line-height: 1.6; font-style: italic; }
</style>