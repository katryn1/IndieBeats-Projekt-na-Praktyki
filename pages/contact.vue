<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  subject: 'Booking',
  message: ''
});

const isSubmitted = ref(false);

const handleSubmit = () => {
  console.log('Wysłano wiadomość:', form.value);
  isSubmitted.value = true;
  setTimeout(() => {
    isSubmitted.value = false;
    form.value = { name: '', email: '', subject: 'Booking', message: '' };
  }, 5000);
};

useHead({ 
  title: "Kontakt – IndieBeats | Współpraca i Booking",
  meta: [
    { name: 'description', content: 'Skontaktuj się z zespołem IndieBeats. Formularz kontaktowy, dane biurowe w Gdańsku oraz informacje dotyczące bookingu i prasy.' },
    { property: 'og:title', content: 'Kontakt – IndieBeats Official' },
    { property: 'og:description', content: 'Masz propozycję koncertu lub pytanie do zespołu? Napisz do nas bezpośrednio przez formularz.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'theme-color', content: '#6200ee' }
  ],
  htmlAttrs: { lang: 'pl' }
});
</script>

<template>
  <main class="contact-page">
    <div class="glow-overlay"></div>

    <div class="container">
      <header class="contact-hero">
        <span class="top-tag">GET IN TOUCH</span>
        <h1>KONTAKT</h1>
        <p class="lead">Masz propozycję koncertu? Chcesz napisać recenzję? A może po prostu chcesz przybić piątkę?</p>
      </header>

      <div class="contact-grid">
        <section class="contact-info">
          <div class="info-card">
            <div class="card-label">LOKALIZACJA</div>
            <h3>IndieBeats Records</h3>
            <p>ul. Elektryków 4/B<br>80-863 Gdańsk, Polska<br><small>(Teren Stoczni Gdańskiej)</small></p>
          </div>

          <div class="info-card">
            <div class="card-label">DIRECT CONTACT</div>
            <p><strong>General:</strong> hello@indiebeats.pl</p>
            <p><strong>Booking:</strong> booking@indiebeats.pl</p>
            <p class="phone">+48 500 212 900</p>
          </div>

          <div class="social-section">
            <div class="card-label">SOCIAL MEDIA</div>
            <div class="social-grid">
              <a href="#" class="social-box">INSTA</a>
              <a href="#" class="social-box">SPOTIFY</a>
              <a href="#" class="social-box">YT</a>
              <a href="#" class="social-box">TIKTOK</a>
            </div>
          </div>
        </section>

        <section class="form-container">
          <transition name="fade" mode="out-in">
            <form v-if="!isSubmitted" @submit.prevent="handleSubmit" class="neon-form">
              <div class="form-row">
                <div class="form-group">
                  <label>IMIĘ I NAZWISKO</label>
                  <input type="text" v-model="form.name" placeholder="John Doe" required>
                </div>
                <div class="form-group">
                  <label>E-MAIL</label>
                  <input type="email" v-model="form.email" placeholder="john@example.com" required>
                </div>
              </div>

              <div class="form-group">
                <label>TEMAT ROZMOWY</label>
                <select v-model="form.subject">
                  <option value="Booking">Koncerty / Booking</option>
                  <option value="Press">Media / Press Pack</option>
                  <option value="Fan">Wiadomość od fana</option>
                  <option value="Other">Inne</option>
                </select>
              </div>

              <div class="form-group">
                <label>WIADOMOŚĆ</label>
                <textarea v-model="form.message" rows="5" placeholder="Twoja wiadomość..." required></textarea>
              </div>

              <button type="submit" class="submit-btn">
                <span>WYŚLIJ WIADOMOŚĆ</span>
              </button>
            </form>

            <div v-else class="success-screen">
              <div class="success-icon">✓</div>
              <h3>MESSAGE SENT</h3>
              <p>Nasz manager odezwie się wkrótce. Stay tuned.</p>
            </div>
          </transition>
        </section>
      </div>

      <section class="map-area">
        <div class="map-inner">
          <div class="coords">54.3644° N, 18.6491° E</div>
          <div class="map-label">STUDIO INDIEBEATS / GDAŃSK STOCZNIA</div>
        </div>
      </section>

      <footer class="contact-footer">
        <NuxtLink to="/" class="back-link">← POWRÓT DO HOME</NuxtLink>
      </footer>
    </div>
  </main>
</template>

<style scoped>
.contact-page {
  background: #050509;
  color: #fff;
  min-height: 100vh;
  padding: 6rem 1.5rem;
  position: relative;
  overflow: hidden;
}

.glow-overlay {
  position: absolute;
  top: 0; right: 0;
  width: 50%; height: 100%;
  background: radial-gradient(circle at 70% 30%, rgba(98, 0, 238, 0.1), transparent 70%);
  pointer-events: none;
}

.container { max-width: 1100px; margin: 0 auto; position: relative; z-index: 2; }

.contact-hero { margin-bottom: 6rem; }
.top-tag { color: #6200ee; font-weight: 900; letter-spacing: 5px; font-size: 0.8rem; }
h1 { font-size: clamp(3rem, 10vw, 6rem); font-weight: 900; letter-spacing: -3px; margin: 0.5rem 0; }
.lead { color: #666; font-size: 1.2rem; max-width: 500px; line-height: 1.6; }

.contact-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 6rem; align-items: start; }

@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; gap: 4rem; }
}

.info-card { margin-bottom: 3rem; }
.card-label { font-size: 0.65rem; font-weight: 900; color: #444; letter-spacing: 3px; margin-bottom: 1.5rem; }
h3 { font-size: 1.8rem; margin-bottom: 1rem; }
p { color: #888; line-height: 1.6; font-size: 1.1rem; }
small { font-size: 0.8rem; color: #444; }
.phone { font-size: 1.5rem; color: #fff; font-weight: 800; margin-top: 1rem; }

.social-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
.social-box {
  border: 1px solid #1a1a1a;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  color: #555;
  font-weight: 900;
  font-size: 0.7rem;
  transition: 0.3s;
  border-radius: 8px;
}
.social-box:hover { border-color: #6200ee; color: #fff; background: rgba(98, 0, 238, 0.05); }

.neon-form {
  background: rgba(255, 255, 255, 0.02);
  padding: 3rem;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem; }
@media (max-width: 600px) { .form-row { grid-template-columns: 1fr; } }

.form-group { margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 8px; }
.form-group label { font-size: 0.65rem; font-weight: 800; color: #444; letter-spacing: 1px; }

input, select, textarea {
  background: #0d0d12;
  border: 1px solid #1a1a1a;
  padding: 1rem;
  color: #fff;
  border-radius: 12px;
  font-size: 1rem;
  transition: 0.3s;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: #6200ee;
  background: #11111a;
}

.submit-btn {
  width: 100%;
  padding: 1.5rem;
  background: #6200ee;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-weight: 900;
  letter-spacing: 2px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: 0.3s;
}

.submit-btn:hover {
  background: #7b2cff;
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(98, 0, 238, 0.3);
}

.success-screen {
  text-align: center;
  padding: 4rem 2rem;
  background: rgba(3, 218, 198, 0.05);
  border-radius: 30px;
  border: 1px solid rgba(3, 218, 198, 0.2);
}
.success-icon { font-size: 3rem; color: #03dac6; margin-bottom: 1rem; }

.map-area { margin-top: 8rem; }
.map-inner {
  height: 250px;
  background: #0d0d12;
  border: 1px solid #1a1a1a;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-image: radial-gradient(#1a1a1a 1px, transparent 1px);
  background-size: 20px 20px;
}
.coords { font-family: monospace; color: #6200ee; font-size: 1.2rem; font-weight: bold; margin-bottom: 10px; }
.map-label { font-size: 0.7rem; letter-spacing: 3px; color: #444; font-weight: 800; }

.contact-footer { margin-top: 4rem; text-align: center; }
.back-link { color: #444; text-decoration: none; font-weight: 800; font-size: 0.8rem; transition: 0.3s; }
.back-link:hover { color: #fff; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>