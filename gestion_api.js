const endPoint = 'http://localhost:3000/productos';

// ✅ Leer productos (GET)
async function obtenerProductos() {
  try {
    const res = await fetch(endPoint);
    const productos = await res.json();
    console.log("📦 Productos:", productos);
  } catch (error) {
    console.error("❌ Error al obtener productos:", error);
  }
}

// ✅ Crear producto (POST) sin duplicados (insensible a mayúsculas/minúsculas)
async function crearProducto(nombre, precio) {
  if (!nombre || isNaN(precio)) {
    console.warn("⚠️ Datos inválidos.");
    return;
  }

  try {
    // Obtener lista de productos
    const res = await fetch(endPoint);
    const productos = await res.json();

    const nombreNormalizado = nombre.trim().toLowerCase();

    // Verificar si ya existe un producto con ese nombre
    const existe = productos.some(p =>
      p.nombre.trim().toLowerCase() === nombreNormalizado
    );

    if (existe) {
      alert("⚠️ El producto ya existe. No se puede agregar.");
      return;
    }

    // Agregar producto nuevo
    const respuesta = await fetch(endPoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: nombre.trim(),
        precio: Number(precio)
      }),
    });

    const nuevo = await respuesta.json();
    console.log("✅ Producto creado:", nuevo);
  } catch (error) {
    console.error("❌ Error al crear producto:", error);
  }
}

// ✅ Actualizar producto (PUT)
async function actualizarProducto(id, nombre, precio) {
  if (!id || !nombre || isNaN(precio)) {
    console.warn("⚠️ Datos inválidos.");
    return;
  }

  try {
    const res = await fetch(`${endPoint}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: nombre.trim(),
        precio: Number(precio)
      }),
    });
    const actualizado = await res.json();
    console.log("🔄 Producto actualizado:", actualizado);
  } catch (error) {
    console.error("❌ Error al actualizar producto:", error);
  }
}

// ✅ Eliminar producto (DELETE)
async function eliminarProducto(id) {
  try {
    await fetch(`${endPoint}/${id}`, {
      method: "DELETE"
    });
    console.log(`🗑️ Producto con ID ${id} eliminado`);
  } catch (error) {
    console.error("❌ Error al eliminar producto:", error);
  }
}

// ✅ Solo ejecutamos obtenerProductos al inicio
obtenerProductos();

// 👉 Prueba manual desde consola:
// crearProducto("Mouse Gamer", 49.99);
// crearProducto("mouse gamer", 50); // ❌ Esto no lo deja agregar (duplicado, aunque con mayúsculas distintas)
