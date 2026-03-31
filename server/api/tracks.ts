export default defineEventHandler(() => [
  {
    id: 1,
    albumTitle: "Neon Dreams",
    releaseYear: 2022,
    cover: "/images/neon-dreams-cover.png",
    description: "Debiutancki album, który zdefiniował nasze brzmienie – połączenie syntezatorów z gdańskim chłodem.",
    tracks: [
      { id: 101, slug: "midnight-city", title: "Midnight City", duration: "3:45", description: "Energetyczny utwór indie o nocnym życiu w Berlinie." },
      { id: 102, slug: "lost-signal", title: "Lost Signal", duration: "4:12", description: "Ambientowy track o zagubieniu w cyfrowym świecie." },
      { id: 103, slug: "digital-ghosts", title: "Digital Ghosts", duration: "3:58", description: "Melancholijna ballada o śladach, które zostawiamy w sieci." },
      { id: 104, slug: "static-sky", title: "Static Sky", duration: "3:20", description: "Szybki, gitarowy numer z mocnym syntezatorowym basem." }
    ]
  },
  {
    id: 2,
    albumTitle: "Echoes of Tomorrow",
    releaseYear: 2023,
    cover: "/images/echoes-cover.png",
    description: "Eksperymentalna płyta nagrana podczas trasy koncertowej po Europie.",
    tracks: [
      { id: 201, slug: "summer-dream", title: "Summer Dream", duration: "3:30", description: "Lekki indie pop idealny na lato i festiwalowe wieczory." },
      { id: 202, slug: "berlin-underground", title: "Berlin Underground", duration: "5:05", description: "Surowe brzmienie inspirowane niemiecką sceną klubową." },
      { id: 203, slug: "vhs-memories", title: "VHS Memories", duration: "4:15", description: "Nostalgiczny powrót do lat 90. w nowoczesnym wydaniu." },
      { id: 204, slug: "wired-soul", title: "Wired Soul", duration: "3:50", description: "Utwór o relacjach międzyludzkich w dobie AI." }
    ]
  },
  {
    id: 3,
    albumTitle: "Krew i Neon",
    releaseYear: 2024,
    cover: "/album.png",
    description: "Nasz najnowszy, najbardziej mroczny materiał. Fuzja agresywnych riffów i czerwonego neonu.",
    tracks: [
      { id: 301, slug: "blood-moon", title: "Blood Moon", duration: "4:20", description: "Ciężki, rytmiczny utwór otwierający nową erę zespołu." },
      { id: 302, slug: "cyber-punk", title: "Cyber Pink", duration: "3:40", description: "Szybki, buntowniczy hymn o wolności." },
      { id: 303, slug: "heartbeat-sensor", title: "Heartbeat Sensor", duration: "4:55", description: "Mroczny utwór z wykorzystaniem sampli bicia serca." },
      { id: 304, slug: "final-level", title: "Final Level", duration: "6:10", description: "Epickie zakończenie albumu z długim solówkowym outro." }
    ]
  }
]);