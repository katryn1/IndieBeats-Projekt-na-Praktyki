export default defineEventHandler((event) => {
  const slug = getRouterParam(event, "slug");

  // Pełna baza danych podzielona na albumy
  const albums = [
    {
      albumTitle: "Neon Dreams",
      year: 2022,
      tracks: [
        { id: 101, slug: "midnight-city", title: "Midnight City", description: "Energetyczny utwór indie o nocnym życiu w Berlinie.", bpm: 120, key: "Am" },
        { id: 102, slug: "lost-signal", title: "Lost Signal", description: "Ambientowy track o zagubieniu w cyfrowym świecie.", bpm: 95, key: "Em" },
        { id: 103, slug: "digital-ghosts", title: "Digital Ghosts", description: "Melancholijna ballada o śladach, które zostawiamy w sieci.", bpm: 80, key: "C" },
      ]
    },
    {
      albumTitle: "Echoes of Tomorrow",
      year: 2023,
      tracks: [
        { id: 201, slug: "summer-dream", title: "Summer Dream", description: "Lekki indie pop idealny na lato i festiwalowe wieczory.", bpm: 112, key: "G" },
        { id: 202, slug: "berlin-underground", title: "Berlin Underground", description: "Surowe brzmienie inspirowane niemiecką sceną klubową.", bpm: 128, key: "F#m" },
      ]
    },
    {
      albumTitle: "Krew i Neon",
      year: 2024,
      tracks: [
        { id: 301, slug: "blood-moon", title: "Blood Moon", description: "Ciężki, rytmiczny utwór otwierający nową erę zespołu.", bpm: 140, key: "Dm" },
        { id: 302, slug: "cyber-pink", title: "Cyber Pink", description: "Szybki, buntowniczy hymn o wolności.", bpm: 145, key: "E" },
      ]
    }
  ];

  // Logika szukania: przechodzimy przez każdy album i szukamy utworu o danym slugu
  let foundTrack = null;
  let trackAlbum = null;

  for (const album of albums) {
    const track = album.tracks.find(t => t.slug === slug);
    if (track) {
      foundTrack = track;
      trackAlbum = { title: album.albumTitle, year: album.year };
      break;
    }
  }

  if (!foundTrack) {
    throw createError({
      statusCode: 404,
      statusMessage: "Nie znaleziono takiego utworu. Może został usunięty przez system?",
    });
  }

  // Zwracamy dane utworu wzbogacone o info o albumie
  return {
    ...foundTrack,
    album: trackAlbum
  };
});