<script setup lang="ts">
const { data: events } = await useFetch("/api/events");
useHead({ title: "Trasa Koncertowa 2024 – IndieBeats" });
</script>

<template>
  <main class="events-page">
    <div class="glow-bg"></div>

    <div class="container">
      <header class="tour-header">
        <span class="tour-badge">Live Tour 2024</span>
        <h1 class="neon-text">Krew i Neon</h1>
        <p class="tour-desc">Poczuj energię na żywo. Wybierz swoje miasto.</p>
      </header>

      <div class="events-list">
        <div 
          v-for="e in events" 
          :key="e.id" 
          class="event-card" 
          :class="{ 'sold-out-card': e.status === 'Wyprzedane' }"
        >
          <div class="date-section">
            <span class="day">{{ e.date.split('.')[0] }}</span>
            <span class="month">{{ e.date.split('.')[1] === '10' ? 'PAŹDZIERNIKA' : 'LISTOPADA' }}</span>
          </div>

          <div class="info-section">
            <h2 class="city">{{ e.city }}</h2>
            <p class="venue">{{ e.venue }}</p>
            <span class="time">Start: {{ e.time }}</span>
          </div>

          <div class="action-section">
            <div class="status-indicator">
              <span class="dot" :class="e.status.toLowerCase().replace(' ', '-')"></span>
              {{ e.status }}
            </div>
            
            <NuxtLink 
              v-if="e.status !== 'Wyprzedane'" 
              :to="`/events/${e.slug}`" 
              class="ticket-btn available"
            >
              KUP BILET
            </NuxtLink>
            
            <button v-else disabled class="ticket-btn disabled">
              WYPRZEDANE
            </button>
          </div>
        </div>
      </div>

      <NuxtLink to="/" class="back-home">← WRÓĆ DO STRONY GŁÓWNEJ</NuxtLink>
    </div>
  </main>
</template>

<style scoped>
.events-page {
  background-color: #050509;
  min-height: 100vh;
  color: #fff;
  padding: 5rem 1rem;
  font-family: 'Inter', sans-serif;
}

.glow-bg {
  position: fixed;
  top: 0; left: 50%; transform: translateX(-50%);
  width: 100%; height: 600px;
  background: radial-gradient(circle, rgba(255, 0, 0, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

.container { max-width: 1000px; margin: 0 auto; position: relative; z-index: 10; }

.tour-header { text-align: center; margin-bottom: 6rem; }
.tour-badge { color: #ff0000; letter-spacing: 5px; font-weight: 800; text-transform: uppercase; font-size: 0.9rem; }
.neon-text { font-size: 5rem; font-weight: 900; margin: 15px 0; text-transform: uppercase; letter-spacing: -2px; }
.tour-desc { color: #666; font-size: 1.2rem; }

/* KARTY KONCERTOWE - WIĘKSZE I SZERSZE */
.events-list { display: flex; flex-direction: column; gap: 1.5rem; }

.event-card {
  display: grid;
  grid-template-columns: 180px 1fr 220px;
  align-items: center;
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.event-card:hover:not(.sold-out-card) {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 0, 0, 0.4);
  transform: translateY(-5px) scale(1.01);
}

/* Sekcja Daty */
.date-section { text-align: center; border-right: 1px solid rgba(255, 255, 255, 0.1); padding-right: 1rem; }
.day { display: block; font-size: 3.5rem; font-weight: 900; line-height: 1; color: #fff; }
.month { font-size: 0.75rem; color: #ff0000; font-weight: 700; letter-spacing: 1px; }

/* Sekcja Info */
.info-section { padding: 0 3rem; }
.city { font-size: 2.2rem; margin: 0; font-weight: 800; text-transform: uppercase; }
.venue { color: #aaa; font-size: 1.1rem; margin: 5px 0; }
.time { color: #555; font-family: monospace; }

/* Sekcja Akcji */
.action-section { text-align: center; }
.status-indicator { 
  display: flex; align-items: center; justify-content: center; gap: 8px;
  font-size: 0.8rem; font-weight: 600; text-transform: uppercase; margin-bottom: 1.5rem; color: #888;
}

.dot { width: 8px; height: 8px; border-radius: 50%; }
.dot.dostępne { background: #00ff88; box-shadow: 0 0 10px #00ff88; }
.dot.ostatnie-bilety { background: #ffaa00; box-shadow: 0 0 10px #ffaa00; }
.dot.wyprzedane { background: #444; }

/* PRZYCISKI - WIĘKSZE I KOLOROWE */
.ticket-btn {
  display: block;
  width: 100%;
  padding: 1.2rem;
  border-radius: 12px;
  font-weight: 900;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
}

.available {
  background: #00ff88;
  color: #050509;
  box-shadow: 0 4px 15px rgba(0, 255, 136, 0.2);
}

.available:hover {
  background: #00cc6e;
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(0, 255, 136, 0.4);
}

.disabled {
  background: #222;
  color: #555;
  cursor: not-allowed;
}

.sold-out-card { opacity: 0.5; filter: grayscale(0.8); }

.back-home {
  display: block; text-align: center; margin-top: 6rem;
  color: #444; text-decoration: none; font-weight: 700; font-size: 0.9rem;
  letter-spacing: 2px;
}

.back-home:hover { color: #fff; }

/* Responsywność */
@media (max-width: 900px) {
  .event-card { grid-template-columns: 1fr; text-align: center; gap: 2rem; }
  .date-section { border-right: none; padding: 0; }
  .info-section { padding: 0; }
}
</style>