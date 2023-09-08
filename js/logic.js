let listaProductos = "";
let listaInventario = "";
const mostrarProductos = () => {
  productos.forEach((producto) => {
    listaProductos += `${producto.img} \n-->${producto.nombre}, ${producto.genero} \n${producto.nombrePublicacion} lo intercambia por $${producto.precio} ó por el juego ${producto.intercambio}`;
  });
  listaProductos +=
    "\n1- Ver tu inventario \n2-Filtrar contenidos \n3- Salir de Horizon";
};
const mostrarInventario = () => {
  listaInventario += `Tienes el juego ${inventario.nombre}, de género ${inventario.genero} \nDinero en la cuenta: $0`;
};

const intercambiarProducto = () => {
  productos.forEach((producto) => {
    listaProductos += `\n${producto.id}- intercambiar con ${producto.nombrePublicacion}`;
  });
};

const intercambioValido = (id) => {
  let encontrarJuego = productos.find((producto) => producto.id === id);
  let juegoUsuario = `${encontrarJuego.intercambio}`;
  if (juegoUsuario === inventario.nombre) {
    alert(
      `¡Felicitaciones! Has intercambiado tu juego ${inventario.nombre} de forma exitosa!`
    );
    /*Tengo que agregar la feature de que si despues volves a tu inventario aparezca el nuevo juego que conseguiste*/
  } else {
    alert(
      "No cumples con los requisitos para realizar este intercambio. Revisa si tienes el dinero suficiente o si posees el videojuego que busca el usuario"
    );
  }
};

/*Inicio de sesión, si quieren pueden comentarlo xq despues de hacer refresh a la pag muchas veces s evuelve cansador */
let inicioSesionUsuario = prompt(
  "INICIO DE SESION \nEscribe tu nombre de usuario"
);
let inicioSesionContraseña = prompt("INICIO DE SESION \nEscribe tu contraseña");
let inicioSesionValidacion = alert(
  `Datos validados. ¡Bienvenido ${inicioSesionUsuario}!`
);

let introduccion = alert(
  `¡Bienvenido a Horizon, el mejor sitio para intercambiar videojuegos con usuarios reales! Podrás ver los juegos que tú tienes actualmente y negociar con aquellos usuarios que les interese probarlo. También puedes intercambiar el videojuego que desees por el monto que pida el usuario.`
);

mostrarProductos();
intercambiarProducto();
let tienda = parseInt(prompt(listaProductos));

while (tienda != 3) {
  switch (tienda) {
    case 1:
      mostrarInventario();
      alert(listaInventario);
      break;
    case 2:
      let preguntaFiltros = parseInt(
        prompt(
          `Elige por cuál categoría quisieras filtrar: \n1- Género \n2- Precio \n3- Juego a intercambiar`
        )
      );
      switch (preguntaFiltros) {
        case 1:
          let preguntaFiltrosGenero = prompt(
            `Escribe el género por el que quieras filtrar (Acción, Aventura, Estrategia, Indie, Rol, Zombis)`
          );
          let filtroDeGenero = `Videojuegos del género ${preguntaFiltrosGenero}: \n`;
          let filtrarGenero = productos.filter(
            (producto) => producto.genero === preguntaFiltrosGenero
          );
          filtrarGenero.forEach((producto) => {
            filtroDeGenero += `${producto.img} \n-->${producto.nombre}, ${producto.genero} \n${producto.nombrePublicacion} lo intercambia por $${producto.precio} ó por el juego ${producto.intercambio}`;
          });
          alert(filtroDeGenero);
          break;
        case 2:
          let preguntaFiltrosPrecio = parseInt(
            prompt(`Escribe el precio máximo por el que quieras filtrar`)
          );
          let filtroDePrecio = `Videojuegos a precio $${preguntaFiltrosPrecio} o menor: \n`;
          let filtrarPrecio = productos.filter(
            (producto) => producto.precio <= preguntaFiltrosPrecio
          );
          filtrarPrecio.forEach((producto) => {
            filtroDePrecio += `${producto.img} \n-->${producto.nombre}, ${producto.genero} \n${producto.nombrePublicacion} lo intercambia por $${producto.precio} ó por el juego ${producto.intercambio}`;
          });
          alert(filtroDePrecio);
          break;
        case 3:
          let preguntaFiltrosIntercambio = prompt(
            `Escribe el juego a intercambiar por el que quieras filtrar (Terraria, Batman: Arkham City, God of War: Ragnarok, Assassin's Creed: Black Flag, LEGO:BATMAN the videogame, Sid Meier's Civilization VI, Subnautica:Below Zero)`
          );
          let filtroDeIntercambio = `Usuarios que estén dispuestos a aceptar el juego ${preguntaFiltrosIntercambio}: \n`;
          let filtrarIntercambio = productos.filter(
            (producto) => producto.intercambio === preguntaFiltrosIntercambio
          );
          filtrarIntercambio.forEach((producto) => {
            filtroDeIntercambio += `${producto.img} \n(${producto.id})-->${producto.nombre}, ${producto.genero} \n${producto.nombrePublicacion} lo intercambia por $${producto.precio} ó por el juego ${producto.intercambio}`;
          });
          alert(filtroDeIntercambio);
          break;
        default:
          alert("Error. Ingrese una categoría válida");
      }
      break;
    case 4:
      intercambioValido(4);
      break;
    case 5:
      intercambioValido(5);
      break;
    case 6:
      intercambioValido(6);
      break;
    case 7:
      intercambioValido(7);
      break;
    case 8:
      intercambioValido(8);
      break;
    case 9:
      intercambioValido(9);
      break;
    case 10:
      intercambioValido(10);
      break;
    case 11:
      intercambioValido(11);
      break;
    case 12:
      intercambioValido(12);
      break;
    default:
      alert("Error, ingrese una opción válida");
  }
  tienda = parseInt(prompt(listaProductos));
}
if (tienda === 3) {
  alert("Has salido de Horizon (Reiniciar para volver a empezar)");
}
