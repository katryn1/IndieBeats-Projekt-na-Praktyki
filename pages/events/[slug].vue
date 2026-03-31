<script setup lang="ts">
const route = useRoute();
const { data: event, error } = await useFetch(`/api/events/${route.params.slug}`);

useHead({ 
  title: event.value ? `Koncert ${event.value.city} – IndieBeats` : "Bilet" 
});
</script>

<template>
  <main class="event-detail-page">
    <div class="ambient-glow"></div>

    <div v-if="event" class="container">
      <NuxtLink to="/events" class="back-btn">← WRÓĆ DO TRASY</NuxtLink>

      <div class="ticket-container">
        <div class="ticket-info">
          <header class="ticket-header">
            <span class="tour-label">KREW I NEON TOUR 2024</span>
            <h1>{{ event.city }}</h1>
            <p class="venue-sub">{{ event.venue }}</p>
          </header>

          <div class="ticket-grid">
            <div class="grid-item">
              <span class="label">DATA</span>
              <span class="value">{{ event.date }}</span>
            </div>
            <div class="grid-item">
              <span class="label">OTWARCIE DRZWI</span>
              <span class="value">{{ event.time }}</span>
            </div>
            <div class="grid-item">
              <span class="label">TYP BILETU</span>
              <span class="value">G/A (STOJĄCE)</span>
            </div>
            <div class="grid-item">
              <span class="label">STATUS</span>
              <span class="value status-text" :class="event.status === 'Dostępne' ? 'green' : 'orange'">
                {{ event.status }}
              </span>
            </div>
          </div>

          <div class="ticket-actions">
            <button v-if="event.status !== 'Wyprzedane'" class="buy-full-btn">
              POTWIERDŹ I KUP BILET NA TICKETMASTER
            </button>
            <div v-else class="sold-out-hero">MIEJSCA WYPRZEDANE</div>
            <p class="notice">* Wstęp od 16 lat za zgodą opiekuna. Dokument tożsamości wymagany przy wejściu.</p>
          </div>
        </div>

        <div class="ticket-stub">
          <div class="stub-inner">
            <div class="barcode-vertical">
              <div v-for="n in 30" :key="n" class="bar" :style="{ height: Math.random() * 100 + '%' }"></div>
            </div>
            <div class="stub-info">
              <span class="serial">NR: IB-000{{ event.id }}</span>
              <span class="side-text">VIP ACCESS</span>
            </div>
          </div>
        </div>
      </div>
      
      <section class="location-box">
        <h3>LOKALIZACJA WYDARZENIA</h3>
        <div class="dummy-map">
          <span>MAPA DLA: {{ event.venue.toUpperCase() }}, {{ event.city.toUpperCase() }}</span>
        </div>
      </section>
    </div>

    <div v-else class="error-box">
      <h2>UPS! COŚ POSZŁO NIE TAK.</h2>
      <NuxtLink to="/events">WRÓĆ DO LISTY</NuxtLink>
    </div>
  </main>
</template>

<style scoped>
.event-detail-page {
  background-color: #050509;
  min-height: 100vh;
  color: #fff;
  padding: 4rem 1rem;
  display: flex;
  justify-content: center;
}

.ambient-glow {
  position: fixed;
  inset: 0;
  background: radial-gradient(circle at 50% 10%, rgba(255, 0, 0, 0.15), transparent 60%);
  pointer-events: none;
}

.container { max-width: 1100px; width: 100%; position: relative; z-index: 10; }

.back-btn {
  display: inline-block;
  color: #444;
  text-decoration: none;
  font-weight: 800;
  margin-bottom: 2rem;
  letter-spacing: 2px;
  transition: color 0.3s;
}
.back-btn:hover { color: #ff0000; }

/* --- BILET --- */
.ticket-container {
  display: flex;
  background: #0d0d12;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0,0,0,0.6);
}

@media (max-width: 900px) { .ticket-container { flex-direction: column; } }

.ticket-info { flex: 3; padding: 4rem; }

.tour-label { color: #ff0000; font-weight: 900; font-size: 0.9rem; letter-spacing: 4px; }
h1 { font-size: clamp(3rem, 8vw, 6rem); font-weight: 900; margin: 1rem 0; text-transform: uppercase; line-height: 0.9; }
.venue-sub { font-size: 1.5rem; color: #888; margin-bottom: 3rem; }

.ticket-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  border-top: 1px solid #222;
  padding-top: 3rem;
  margin-bottom: 4rem;
}

.label { display: block; color: #444; font-size: 0.75rem; font-weight: 800; letter-spacing: 1px; margin-bottom: 8px; }
.value { font-size: 1.5rem; font-weight: 700; }
.status-text.green { color: #00ff88; }
.status-text.orange { color: #ffaa00; }

/* PRZYCISK KUPNA */
.buy-full-btn {
  width: 100%;
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 1.8rem;
  font-size: 1.2rem;
  font-weight: 900;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 10px 30px rgba(255, 0, 0, 0.2);
}
.buy-full-btn:hover { transform: translateY(-5px); background: #e60000; box-shadow: 0 15px 40px rgba(255, 0, 0, 0.4); }

.sold-out-hero {
  padding: 1.8rem;
  background: #222;
  text-align: center;
  border-radius: 16px;
  font-weight: 900;
  color: #555;
  letter-spacing: 2px;
}

.notice { margin-top: 1.5rem; color: #444; font-size: 0.8rem; text-align: center; }

/* --- STUB (BOCZNA CZĘŚĆ) --- */
.ticket-stub {
  flex: 0.6;
  background: #15151b;
  border-left: 2px dashed #050509;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

/* Wcięcia biletowe */
.ticket-stub::before, .ticket-stub::after {
  content: ''; position: absolute; left: -15px; width: 30px; height: 30px; background: #050509; border-radius: 50%;
}
.ticket-stub::before { top: -15px; }
.ticket-stub::after { bottom: -15px; }

.barcode-vertical {
  height: 300px; width: 60px; display: flex; align-items: flex-end; gap: 2px; opacity: 0.5;
}
.bar { flex: 1; background: #fff; }

.stub-info { transform: rotate(-90deg); position: absolute; right: -20px; color: #333; font-weight: 900; letter-spacing: 5px; white-space: nowrap; }

/* MAPKA */
.location-box { margin-top: 4rem; }
.location-box h3 { font-size: 0.8rem; letter-spacing: 3px; color: #444; margin-bottom: 1.5rem; }
.dummy-map {
  height: 300px; background: #0d0d12; border: 1px solid #1a1a1a; border-radius: 24px;
  display: flex; align-items: center; justify-content: center; color: #222; font-weight: 800;
}
</style>