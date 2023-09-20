const gridContainer = document.getElementById('gridContainer');

// * Funciones * //
const createProductCard = (producto) => {
    const card = document.createElement("div");
    card.classList.add('card');
    card.innerHTML = `
    <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">Precio: $${producto.precio}</p>
        <p class="card-text">Stock: ${producto.stock}</p>
        <p class="card-text">Fecha de Expiración: ${producto.fechaExpiracion}</p>
        <p class="card-text">Proveedor: ${producto.proveedor.nombre}</p>
        <p class="card-text">Contacto del Proveedor: ${producto.proveedor.contacto}</p>
    </div>
    `;
    return card;
}

async function cargarProductos() {
    try 
    {
        const response = await fetch('http://localhost:3000/Medicamentos');
        if (!response.ok) {
            throw new Error("Error al cargar los datos de la API");
        }

        const data = await response.json();

        data.forEach((producto, index) => {
            const card = document.createElement("div");
            card.classList.add("card");
        })
    } catch (error) {
        console.error('Error:', error);
    }
}

cargarProductos();