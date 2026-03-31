<script setup lang="ts">
const route = useRoute();
const { data: album } = await useFetch(`/api/albums/${route.params.slug}`);
useHead({ title: album.value ? `${album.value.title} – IndieBeats` : "Album" });
</script>

<template>
  <main class="album-detail">
    <div v-if="album" class="container">
      <div class="content-row">
        <div class="cover-side">
          <img :src="album.cover" :alt="album.title" class="big-cover" />
        </div>
        <div class="info-side">
          <span class="year-tag">{{ album.year }}</span>
          <h1>{{ album.title }}</h1>
          <p class="desc">{{ album.description }}</p>
          <NuxtLink to="/albums" class="btn-back">← Wróć do listy</NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.album-detail { background: #050509; min-height: 100vh; padding: 6rem 2rem; color: #fff; }
.container { max-width: 1000px; margin: 0 auto; }
.content-row { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
@media (max-width: 768px) { .content-row { grid-template-columns: 1fr; text-align: center; } }

.big-cover { width: 100%; border-radius: 20px; box-shadow: 0 0 40px rgba(98, 0, 238, 0.3); }
.year-tag { color: #03dac6; font-family: monospace; font-size: 1.2rem; }
h1 { font-size: 4rem; margin: 10px 0; }
.desc { font-size: 1.2rem; line-height: 1.6; color: #aaa; margin-bottom: 2rem; }
.btn-back { color: #fff; text-decoration: none; border-bottom: 1px solid #6200ee; }
</style>