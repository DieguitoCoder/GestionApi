const endPoint = 'http://localhost:3000/productos';

const $form = document.getElementById("formulario");
const $nombre = document.getElementById("nombre");
const $precio = document.getElementById("precio");
const $tabla = document.getElementById("lista-productos");

// 🔄 Cargar todos los productos
async function cargarProductos() {
  const res = await fetch(endPoint);
  const productos = await res.json();
  $tabla.innerHTML = "";

  productos.forEach(p => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${p.id}</td>
      <td>${p.nombre}</td>
      <td>$${p.precio}</td>
      <td>
        <button class="editar" data-id="${p.id}" data-nombre="${p.nombre}" data-precio="${p.precio}">✏️</button>
        <button class="eliminar" data-id="${p.id}">🗑️</button>
      </td>
    `;
    $tabla.appendChild(fila);
  });

  agregarEventosBotones(); // ¡Importante!
}

// ✅ Crear un producto con validación de duplicados
$form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = $nombre.value.trim();
  const precio = parseFloat($precio.value);

  if (!nombre || isNaN(precio)) {
    alert("Datos inválidos");
    return;
  }

  await crearProducto(nombre, precio); // ✅ Usamos la función con validación
  $form.reset();
  cargarProductos();
});

// 🗑️ Eliminar producto
async function eliminarProducto(id) {
  const confirmar = confirm(`¿Eliminar producto con ID ${id}?`);
  if (!confirmar) return;

  await fetch(`${endPoint}/${id}`, { method: "DELETE" });
  cargarProductos();
}

// ✏️ Editar producto
async function editarProducto(id, nombreActual, precioActual) {
  const nuevoNombre = prompt("Nuevo nombre:", nombreActual);
  const nuevoPrecio = prompt("Nuevo precio:", precioActual);

  if (!nuevoNombre || isNaN(nuevoPrecio)) return alert("Datos inválidos");

  await fetch(`${endPoint}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nombre: nuevoNombre.trim(),
      precio: parseFloat(nuevoPrecio)
    }),
  });

  cargarProductos();
}

// 🔗 Conectar eventos a botones dinámicos
function agregarEventosBotones() {
  document.querySelectorAll(".eliminar").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      eliminarProducto(id);
    });
  });

  document.querySelectorAll(".editar").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const nombre = btn.dataset.nombre;
      const precio = btn.dataset.precio;
      editarProducto(id, nombre, precio);
    });
  });
}

// ✅ Crear producto con validación de duplicados
async function crearProducto(nombre, precio) {
  try {
    const res = await fetch(endPoint);
    const productos = await res.json();

    const nombreNormalizado = nombre.trim().toLowerCase();
    const existe = productos.some(p =>
      p.nombre.trim().toLowerCase() === nombreNormalizado
    );

    if (existe) {
      alert("⚠️ El producto ya existe. No se puede agregar.");
      return;
    }

    const respuesta = await fetch(endPoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre: nombre.trim(), precio: Number(precio) }),
    });

    const nuevo = await respuesta.json();
    console.log("✅ Producto creado:", nuevo);
  } catch (error) {
    console.error("❌ Error al crear producto:", error);
  }
}

// 🔄 Iniciar
cargarProductos();
