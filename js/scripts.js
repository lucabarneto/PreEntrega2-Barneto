const $listaProductos = document.getElementById("products");

const mostrarProductos = () => {
  productos.forEach((producto) => {
    $listaProductos.innerHTML += `
            <div class="card">
            <img src="${producto.img}" alt="producto del catálogo" />
            <div class="card__content">
              <div>
                <strong class="text-125">${producto.nombre}</strong> -
                <small>${producto.genero}</small>
              </div>
              <div>
                ${producto.nombrePublicacion} lo intercambia por <strong>${producto.intercambio}</strong> o por
                <strong>$${producto.precio}</strong>
              </div>
              <button id="trade-btn" class="btn">Intercambiar</button>
            </div>
          </div>
    `;
  });
};

mostrarProductos();
