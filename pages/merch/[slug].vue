<script setup lang="ts">
const route = useRoute();
const { data: item } = await useFetch(`/api/merch/${route.params.slug}`);
useHead({ title: item.value ? `${item.value.title} – IndieBeats` : "Sklep" });
</script>

<template>
  <main v-if="item" class="product-detail">
    <div class="container">
      <NuxtLink to="/merch" class="back-link">← POWRÓT DO SKLEPU</NuxtLink>
      
      <div class="product-layout">
        <div class="product-visual">
          <div class="main-image-placeholder">{{ item.title[0] }}</div>
        </div>
        
        <div class="product-content">
          <span class="status-stock">W MAGAZYNIE</span>
          <h1>{{ item.title }}</h1>
          <p class="price-big">{{ item.price }}</p>
          <p class="desc">{{ item.description }}</p>
          
          <div class="selectors">
            <div class="select-box">
              <label>ROZMIAR</label>
              <select>
                <option>S</option><option>M</option><option>L</option><option>XL</option>
              </select>
            </div>
          </div>

          <button class="add-to-cart">DODAJ DO KOSZYKA</button>
          
          <div class="shipping-info">
            <p>🚚 Wysyłka w 24h</p>
            <p>🔄 30 dni na darmowy zwrot</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.product-detail { background: #050509; min-height: 100vh; padding: 6rem 1rem; color: #fff; }
.container { max-width: 1100px; margin: 0 auto; }
.back-link { color: #444; text-decoration: none; font-weight: 900; font-size: 0.8rem; display: block; margin-bottom: 3rem; }
.back-link:hover { color: #ff0000; }

.product-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; }
@media (max-width: 800px) { .product-layout { grid-template-columns: 1fr; } }

.product-visual { background: #111; aspect-ratio: 1/1; border-radius: 30px; display: flex; align-items: center; justify-content: center; }
.main-image-placeholder { font-size: 10rem; font-weight: 900; opacity: 0.05; }

.status-stock { color: #00ff88; font-weight: 900; font-size: 0.7rem; letter-spacing: 2px; }
h1 { font-size: 3.5rem; margin: 10px 0; text-transform: uppercase; line-height: 1; }
.price-big { font-size: 2rem; color: #ff0000; font-weight: 900; margin-bottom: 2rem; }
.desc { color: #888; line-height: 1.6; font-size: 1.1rem; margin-bottom: 3rem; }

.select-box { margin-bottom: 2rem; }
.select-box label { display: block; font-size: 0.7rem; font-weight: 900; color: #444; margin-bottom: 10px; }
select { background: #111; color: #fff; border: 1px solid #222; padding: 12px; width: 100%; border-radius: 8px; }

.add-to-cart { 
  width: 100%; background: #fff; color: #000; border: none; padding: 1.5rem; 
  font-weight: 900; border-radius: 12px; cursor: pointer; transition: 0.3s;
}
.add-to-cart:hover { background: #ff0000; color: #fff; transform: translateY(-3px); }

.shipping-info { margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #111; color: #444; font-size: 0.9rem; }
</style>