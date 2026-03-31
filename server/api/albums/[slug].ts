export default defineEventHandler((event) => {
  const slug = getRouterParam(event, "slug");

  // Ta baza musi być identyczna jak w api/albums/index.ts
  const albums = [
    { 
      id: 1, 
      slug: "neon-dreams", 
      title: "Neon Dreams", 
      year: 2022,
      cover: "/neon.png",
      description: "Debiutancki album, który zdefiniował nasze brzmienie – fuzja syntezatorów i nostalgii. Nagrany w całości w nocnym studiu w Gdańsku." 
    },
    { 
      id: 2, 
      slug: "echoes-of-tomorrow", 
      title: "Echoes of Tomorrow", 
      year: 2023,
      cover: "/echo.png",
      description: "Eksperymentalna płyta nagrana podczas europejskiej trasy koncertowej. Zawiera unikalne sample z berlińskiego metra." 
    },
    { 
      id: 3, 
      slug: "krew-i-neon", 
      title: "Krew i Neon", 
      year: 2024,
      cover: "/album.png", 
      description: "Nasz najnowszy materiał. Mroczna podróż przez nocne miasto, gdzie czerwień krwi miesza się z zimnym światłem neonów." 
    },
  ];

  const album = albums.find(a => a.slug === slug);

  if (!album) {
    throw createError({
      statusCode: 404,
      statusMessage: "Nie znaleziono takiego albumu w naszej dyskografii.",
    });
  }

  return album;
});