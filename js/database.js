class Producto {
  constructor(id, nombre, img, genero, nombrePublicacion, precio, intercambio) {
    this.id = id;
    this.nombre = nombre;
    this.img = img;
    this.genero = genero;
    this.nombrePublicacion = nombrePublicacion;
    this.precio = precio;
    this.intercambio = intercambio;
  }
}

const productos = [
  new Producto(
    4,
    "Age of Empires II: Definitive Edition",
    "../img/products-AoE",
    "Estrategia",
    "XxTheRexxX",
    1550,
    "Terraria"
  ),
  new Producto(
    5,
    "Project Zomboid",
    "../img/products-Project-Zomboid",
    "Zombis",
    "Juan_sE04",
    700,
    "Batman: Arkham City"
  ),
  new Producto(
    6,
    "Subnautica",
    "../img/products-Subnautica",
    "Aventura",
    "TheAnarkist0023",
    2000,
    "God of War: Ragnarok"
  ),
  new Producto(
    7,
    "Telltale games: The Walking Dead",
    "../img/products-TWD",
    "Aventura",
    "Fakt0s",
    1200,
    "Terraria"
  ),
  new Producto(
    8,
    "Undertale",
    "../img/products-Undertale",
    "Indie",
    "Free G",
    700,
    "Assassin's Creed: Black Flag"
  ),
  new Producto(
    9,
    "LEGO:STARWARS The Complete Saga",
    "../img/products-lego-starwars-the-complete-saga",
    "Acción",
    "Zekinat0r",
    1260,
    "LEGO:BATMAN the videogame"
  ),
  new Producto(7, "Elden Ring", "", "Rol", "Zackrawr", 8000, "Spiderman PS4"),
  new Producto(
    10,
    "Detroit: Become Human",
    "../img/products-detroit-become-human",
    "Aventura",
    "GGcorazonMessi",
    2000,
    "Terraria"
  ),
  new Producto(
    11,
    "Evolve",
    "../img/products-Evolve",
    "Acción",
    "Enigma789",
    1020,
    "Sid Meier's Civilization VI"
  ),
  new Producto(
    12,
    "Don't Starve Together",
    "../img/products-dont-starve-together",
    "Aventura",
    "RamiMG02",
    300,
    "Subnautica:Below Zero"
  ),
];
const inventario = new Producto(0, "Terraria", "", "Aventura", "Tú", "-", "-");
