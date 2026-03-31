<script setup lang="ts">
useHead({ 
  title: "O nas – IndieBeats",
  meta: [
    { name: 'description', content: 'Poznaj historię IndieBeats – fuzja Gdańska, Berlina i Londynu w stylu Neon-Indie.' }
  ]
});
</script>

<template>
  <main class="about-page">
    <div class="ambient-bg"></div>

    <div class="container">
      <header class="about-hero">
        <span class="subtitle">MANIFEST ENERGII</span>
        <h1>O NAS</h1>
        <p class="lead">IndieBeats to nie tylko muzyka. To manifest energii, melancholii i cyfrowego brzmienia, który narodził się z przypadku.</p>
      </header>

      <section class="glass-section history">
        <div class="section-label">01 / HISTORIA</div>
        <h2>Garaż na Zaspie i Chmura</h2>
        <div class="text-content">
          <p>
            Wszystko zaczęło się w 2022 roku w garażu na gdańskiej Zaspie. <strong>IndieBeats</strong> powstało z inicjatywy trójki przyjaciół, którzy spotkali się na forum dla producentów muzycznych. Choć dzieliły ich setki kilometrów, połączyła ich wspólna wizja odświeżenia gatunku indie-rocka.
          </p>
          <p>
            Początkowo tworzyliśmy zdalnie, przesyłając sobie ścieżki dźwiękowe przez chmurę. Nasz pierwszy singiel, <em>„Pixel Hearts”</em>, stał się niespodziewanym hitem, co zmusiło nas do wyjścia z cienia.
          </p>
        </div>
      </section>

      <section class="members-section">
        <div class="section-label">02 / SKŁAD</div>
        <h2>Ludzie stojący za brzmieniem</h2>
        
        <div class="members-grid">
          <article class="member-card lumi-glow">
            <div class="member-photo-wrapper">
              <img src="/lena.png" alt="Lena Kowalska" class="member-photo" />
            </div>
            <div class="member-info">
              <h3>Lena „Lumi” Kowalska</h3>
              <span class="role">WOKAL / SYNTEZATORY / TEKSTY</span>
              <p>Architektka z Gdańska. To ona odpowiada za marzycielski, precyzyjnie skonstruowany klimat naszych utworów.</p>
            </div>
          </article>

          <article class="member-card vibe-glow">
            <div class="member-photo-wrapper">
              <img src="/marcus.png" alt="Marcus" class="member-photo" />
              </div>
            <div class="member-info">
              <h3>Marcus „Vibe” Weber</h3>
              <span class="role">GITARA / PRODUKCJA</span>
              <p>Berliński duch techno zamknięty w ciele rockmana. Jego surowe riffy to kręgosłup zespołu.</p>
            </div>
          </article>

          <article class="member-card oliver-glow">
            <div class="member-photo-wrapper">
               <img src="/oliver.png" alt="Olvier" class="member-photo" />
              </div>
            <div class="member-info">
              <h3>Oliver Bennet</h3>
              <span class="role">PERKUSJA</span>
              <p>Londyński puls. Wnosi niespokojny, jazzujący rytm, który nie pozwala słuchaczom stać w miejscu.</p>
            </div>
          </article>
        </div>
      </section>

      <section class="glass-section style">
        <div class="section-label">03 / STYL</div>
        <h2>Neon-Indie</h2>
        <p>
          Tworzymy muzykę, którą nazywamy <strong>„Neon-Indie”</strong>. To fuzja organicznych instrumentów z cyfrowym sercem. Inspirujemy się takimi artystami jak <em>The 1975</em> czy <em>Tame Impala</em>. Nasze teksty dotykają tematów dorastania w cyfrowym świecie i poszukiwania autentyczności.
        </p>
      </section>

      <footer class="about-footer">
        <NuxtLink to="/" class="back-home-large">
          <span class="arrow">←</span>
          <span class="text">POWRÓT DO STRONY GŁÓWNEJ</span>
        </NuxtLink>
      </footer>
    </div>
  </main>
</template>

<style scoped>
/* KONTEKST STRONY */
.about-page {
  background-color: #050509;
  color: #fff;
  min-height: 100vh;
  padding: 8rem 1.5rem;
  position: relative;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
}

/* TŁO AMBIENTOWE */
.ambient-bg {
  position: absolute;
  top: -10%; left: -10%;
  width: 120%; height: 120%;
  background: radial-gradient(circle at 20% 30%, rgba(98, 0, 238, 0.15) 0%, transparent 40%),
              radial-gradient(circle at 80% 70%, rgba(3, 218, 198, 0.1) 0%, transparent 40%);
  z-index: 0;
  pointer-events: none;
}

.container { max-width: 1000px; margin: 0 auto; position: relative; z-index: 1; }

/* HERO SECTION */
.about-hero { text-align: center; margin-bottom: 8rem; }
.subtitle { color: #6200ee; letter-spacing: 6px; font-weight: 900; font-size: 0.8rem; text-transform: uppercase; }
h1 { font-size: clamp(4rem, 12vw, 8rem); margin: 10px 0; font-weight: 900; letter-spacing: -4px; line-height: 1; text-transform: uppercase; }
.lead { font-size: 1.4rem; color: #888; max-width: 600px; margin: 2rem auto; font-style: italic; line-height: 1.5; }

/* SEKCJE SZKLANE */
.glass-section {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 4rem;
  border-radius: 40px;
  margin-bottom: 4rem;
  backdrop-filter: blur(15px);
}

.section-label { font-size: 0.7rem; font-weight: 900; color: #444; letter-spacing: 3px; margin-bottom: 1rem; }
h2 { font-size: 2.5rem; margin-bottom: 2rem; color: #fff; font-weight: 800; }
p { color: #aaa; font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem; }
strong { color: #03dac6; }

/* CZŁONKOWIE GRID */
.members-section { margin: 8rem 0; }
.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
}

.member-card {
  background: #0d0d12;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid #1a1a1a;
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
}

/* KONTENER NA ZDJĘCIE - IDEALNY KWADRAT */
.member-photo-wrapper {
  width: 100%;
  aspect-ratio: 1 / 1; /* To gwarantuje kwadrat */
  overflow: hidden;
  position: relative;
  background: #1a1a1a;
}

.member-photo {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Zdjęcie wypełnia kwadrat nie psując proporcji */
  filter: grayscale(20%); /* Delikatny styl */
  transition: transform 0.5s ease;
}

/* Placeholdery, jeśli nie ma zdjęć */
.photo-placeholder {
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
  font-weight: 900; font-size: 2.5rem;
}

.vibe-bg { background: rgba(3, 218, 198, 0.1); color: rgba(3, 218, 198, 0.3); }
.oliver-bg { background: rgba(255, 0, 0, 0.1); color: rgba(255, 0, 0, 0.3); }

/* Hover efekty dla kart */
.member-card:hover .member-photo { transform: scale(1.05); filter: grayscale(0%); }

/* Warianty neonowej poświaty na hover */
.lumi-glow:hover { border-color: #6200ee; box-shadow: 0 15px 40px rgba(98, 0, 238, 0.3); }
.vibe-glow:hover { border-color: #03dac6; box-shadow: 0 15px 40px rgba(3, 218, 198, 0.2); }
.oliver-glow:hover { border-color: #ff0000; box-shadow: 0 15px 40px rgba(255, 0, 0, 0.2); }

.member-info { padding: 2rem; flex-grow: 1; }
.member-info h3 { font-size: 1.4rem; margin-bottom: 5px; color: #fff; font-weight: 800; }
.role { display: block; color: #6200ee; font-size: 0.7rem; font-weight: 800; letter-spacing: 2px; margin-bottom: 1rem; text-transform: uppercase; }

/* Dynamiczna zmiana koloru roli na hover */
.lumi-glow:hover .role { color: #8e44ad; }
.vibe-glow:hover .role { color: #03dac6; }
.oliver-glow:hover .role { color: #ff0000; }

.member-info p { font-size: 0.95rem; color: #777; margin-bottom: 0; line-height: 1.6; }

/* STOPKA POWROTU */
.about-footer {
  margin-top: 8rem;
  padding-bottom: 4rem;
  display: flex;
  justify-content: center;
}

.back-home-large {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  text-decoration: none;
  color: #fff;
  background: rgba(255, 255, 255, 0.03);
  padding: 1.5rem 4rem;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.back-home-large .arrow {
  font-size: 1.5rem;
  color: #6200ee;
  transition: transform 0.3s ease;
}

.back-home-large .text {
  font-weight: 900;
  letter-spacing: 3px;
  font-size: 0.8rem;
  text-transform: uppercase;
}

.back-home-large:hover {
  background: rgba(98, 0, 238, 0.1);
  border-color: #6200ee;
  transform: scale(1.05);
  box-shadow: 0 0 40px rgba(98, 0, 238, 0.2);
}

.back-home-large:hover .arrow { transform: translateX(-10px); }

/* RESPONSYWNOŚĆ */
@media (max-width: 768px) {
  .glass-section { padding: 2rem; border-radius: 24px; }
  h1 { font-size: 3.5rem; }
  h2 { font-size: 1.8rem; }
  .about-hero { margin-bottom: 5rem; }
  .back-home-large { width: 100%; padding: 1.2rem; justify-content: center; }
}
</style>