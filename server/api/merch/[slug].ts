export default defineEventHandler((event) => {
  const slug = getRouterParam(event, "slug");
  const merch = [
    { id: 1, slug: "tshirt-neon-dreams", title: "T-shirt Neon Dreams", price: "129 PLN", image: "/merch/t1.png", tag: "New Drop", description: "Oversize'owy t-shirt z grafiką z albumu. 100% bawełna czesana. Krój unisex." },
    { id: 2, slug: "hoodie-krew-neon", title: "Hoodie Krew i Neon", price: "249 PLN", image: "/merch/h1.png", tag: "Bestseller", description: "Ciężka bluza z kapturem (450g), haftowane logo na piersi i duży nadruk na plecach." },
    { id: 3, slug: "vinyl-limited", title: "Winyl Neon Dreams (Clear)", price: "189 PLN", image: "/merch/v1.png", tag: "Limited", description: "Limitowana edycja na przezroczystym winylu. Zawiera insert z tekstami i kod do pobrania MP3." },
    { id: 4, slug: "cap-indie-beats", title: "Czapka z daszkiem Logo", price: "89 PLN", image: "/merch/c1.png", tag: "", description: "Klasyczny dad hat z regulacją i zakrzywionym daszkiem. Kolor sprany czarny." },
    { id: 5, slug: "tote-bag-eco", title: "Torba Bawełniana", price: "45 PLN", image: "/merch/b1.png", tag: "Eco", description: "Ekologiczna torba na zakupy z nadrukiem trasy koncertowej. Bardzo wytrzymała." },
    { id: 6, slug: "poster-tour-2024", title: "Plakat Krew i Neon", price: "39 PLN", image: "/merch/p1.png", tag: "", description: "Plakat formatu B2, papier satynowy 200g. Autografy zespołu dla pierwszych 50 osób." },
  ];
  return merch.find(m => m.slug === slug);
});