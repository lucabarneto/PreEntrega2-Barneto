let totalCompra = 0;
function sumarTotalCompra(precioVideojuego) {
  totalCompra = totalCompra + precioVideojuego;
  console.log(`Compra total de ${totalCompra} hasta el momento`);
}
function calcularImpuestos(impuesto) {
  totalCompra = totalCompra + totalCompra * impuesto;
}
let nombreVideojuego = parseInt(
  prompt(
    "Bienvenido a Horizon! El lugar indicado para comprar los mejores videojuegos. Ingrese el código del videojuego que desee agregar al carrito de compras \n1 - Spiderman PS4 ... AR$ 9500 \n2- Until Dawn ... AR$ 3200 \n3 - Gof Of War Ragnarok ... AR$ 12545 \n4 - The Binding of Isaac ... AR$ 899 \n5 - LEGO:STARWARS The Complete Saga AR$ 2764 \n0 - Salir del carrito de compra"
  )
);
while (nombreVideojuego != 0) {
  switch (nombreVideojuego) {
    case 1:
      alert("Spiderman PS4 ha sido agregado al carrito de compras");
      sumarTotalCompra(9500);
      break;
    case 2:
      alert("Until Dawn ha sido agregado al carrito de compras");
      sumarTotalCompra(3200);
      break;
    case 3:
      alert("Gof Of War Ragnarok ha sido agregado al carrito de compras");
      sumarTotalCompra(12545);
      break;
    case 4:
      alert("The Binding of Isaac ha sido agregado al carrito de compras");
      sumarTotalCompra(899);
      break;
    case 5:
      alert(
        "LEGO:STARWARS The Complete Saga ha sido agregado al carrito de compras"
      );
      sumarTotalCompra(2764);
      break;
    default:
      alert("El código ingresado no existe");
      break;
  }
  nombreVideojuego = parseInt(
    prompt(
      "Bienvenido a Horizon! El lugar indicado para comprar los mejores videojuegos. Ingrese el código del videojuego que desee agregar al carrito de compras \n1 - Spiderman PS4 ... AR$ 9500 \n2- Until Dawn ... AR$ 3200 \n3 - Gof Of War Ragnarok ... AR$ 12545 \n4 - The Binding of Isaac ... AR$ 899 \n5 - LEGO:STARWARS The Complete Saga AR$ 2764 \n0 - Salir del carrito de compra"
    )
  );
}
calcularImpuestos(0.85);
console.log(totalCompra.toFixed(2));
let continuarCompra = prompt(
  `El monto total es de AR$ ${totalCompra.toFixed(
    2
  )}. Desea continuar?\n1- Sí \n2-No`
);
if (continuarCompra == 1) {
  let nombreCompleto = prompt(
    "Datos personales(NO ESCRIBIR NADA VERDADERO). Escribe tu nombre completo"
  );
  let mail = prompt("Escribe tu email");
  let telefono = prompt("Escribe tu número de teléfono");
  let ubicación = prompt("Escribe tu ubicación");
  let tarjeta = prompt("Escribe los datos de tu tarjeta");
  console.log(nombreCompleto, mail, telefono, ubicación, tarjeta);
  let confirmarDatos = parseInt(
    prompt(
      `Son correctos estos datos? \n${nombreCompleto} \n${mail} \n${telefono} \n${ubicación} \n${tarjeta} \n1-Sí \n2-No `
    )
  );
  while (confirmarDatos == 2) {
    let nombreCompleto = prompt(
      "Datos personales(NO ESCRIBIR NADA VERDADERO). Escribe tu nombre completo"
    );
    let mail = prompt("Escribe tu email");
    let telefono = prompt("Escribe tu número de teléfono");
    let ubicación = prompt("Escribe tu ubicación");
    let tarjeta = prompt("Escribe los datos de tu tarjeta");
    console.log(nombreCompleto, mail, telefono, ubicación, tarjeta);
    confirmarDatos = parseInt(
      prompt(
        `Son correctos estos datos? \n${nombreCompleto} \n${mail} \n${telefono} \n${ubicación} \n${tarjeta} \n1-Sí \n2-No `
      )
    );
  }
  if (confirmarDatos == 1) {
    console.log("Datos confirmados");
    let confirmarCompra = parseInt(
      prompt("Desea confirmar la compra? \n1-Sí \n2-No ")
    );
    if (confirmarCompra == 1) {
      console.log("Compra confirmada");
      alert(
        "Compra realizada de forma exitosa. Le llegará un mail con la factura de la compra en unos momentos."
      );
    } else {
      console.log("Compra cancelada");
      alert("La compra se ha cancelado");
    }
  }
} else {
  console.log("Compra cancelada");
  alert("La compra se ha cancelado");
}
