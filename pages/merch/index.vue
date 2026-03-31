<script setup lang="ts">
const { data: merch } = await useFetch("/api/merch");
useHead({ title: "Sklep – IndieBeats Merch" });
</script>

<template>
  <main class="merch-page">
    <div class="container">
      <header class="merch-header">
        <span class="collection-name">Kolekcja 2024</span>
        <h1>Official Merch</h1>
      </header>

      <section class="merch-grid">
        <article v-for="m in merch" :key="m.id" class="product-card">
          <NuxtLink :to="`/merch/${m.slug}`" class="product-link">
            <div class="image-wrapper">
              <span v-if="m.tag" class="product-tag">{{ m.tag }}</span>
              <div class="placeholder-img">{{ m.title[0] }}</div>
              <div class="hover-overlay">SZYBKI PODGLĄD</div>
            </div>
            <div class="product-info">
              <h3>{{ m.title }}</h3>
              <p class="price">{{ m.price }}</p>
            </div>
          </NuxtLink>
        </article>
      </section>
    </div>
  </main>
</template>

<style scoped>
.merch-page { background: #050509; min-height: 100vh; padding: 6rem 1rem; color: #fff; }
.container { max-width: 1200px; margin: 0 auto; }
.merch-header { text-align: center; margin-bottom: 5rem; }
.collection-name { color: #ff0000; letter-spacing: 4px; text-transform: uppercase; font-weight: 900; font-size: 0.8rem; }
h1 { font-size: 4.5rem; margin-top: 10px; text-transform: uppercase; letter-spacing: -2px; }

/* GRID SKLEPU */
.merch-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 3rem; }

.product-card { position: relative; transition: transform 0.4s ease; }
.product-card:hover { transform: translateY(-10px); }

.product-link { text-decoration: none; color: inherit; }

.image-wrapper { 
  aspect-ratio: 1/1; background: #111; border-radius: 20px; position: relative;
  overflow: hidden; display: flex; align-items: center; justify-content: center;
  border: 1px solid #1a1a1a;
}

.placeholder-img { font-size: 5rem; font-weight: 900; opacity: 0.1; }

.product-tag { 
  position: absolute; top: 1.5rem; left: 1.5rem; background: #ff0000; 
  color: #fff; padding: 5px 12px; font-size: 0.7rem; font-weight: 900; 
  border-radius: 4px; z-index: 2;
}

.hover-overlay { 
  position: absolute; inset: 0; background: rgba(255, 0, 0, 0.4); 
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: 0.3s; font-weight: 900; backdrop-filter: blur(5px);
}
.product-card:hover .hover-overlay { opacity: 1; }

.product-info { margin-top: 1.5rem; text-align: center; }
.product-info h3 { font-size: 1.2rem; font-weight: 700; margin-bottom: 5px; }
.price { color: #888; font-weight: 500; }
</style>