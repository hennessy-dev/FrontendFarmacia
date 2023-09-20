// //Graph
// var ctx = document.getElementById("myChart");

// var myChart = new Chart(ctx, {
//   type: "line",
//   data: {
//     labels: [
//       "Sunday",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//     ],
//     datasets: [
//       {
//         data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
//         lineTension: 0,
//         backgroundColor: "transparent",
//         borderColor: "#007bff",
//         borderWidth: 4,
//         pointBackgroundColor: "#007bff",
//       },
//     ],
//   },
//   options: {
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: false,
//           },
//         },
//       ],
//     },
//     legend: {
//       display: false,
//     },
//   },
// });

const elementos = document.querySelectorAll('.list-group-item.list-group-item-action.py-4');
console.log(elementos);
const botonMenu = document.getElementById("botonMenu");
const botonVentas = document.getElementById("botonVentas");
const botonCaducidad = document.getElementById('botonCaducidad');
const botonProveedores = document.getElementById('botonProveedores');
const botonEmpleados = document.getElementById('botonEmpleados');
const botonPacientes = document.getElementById('botonPacientes');
const contentContainer = document.getElementById('content-container');
let currentIndex = 0;

const agregarEvento = (elem, index) => {
    elem.addEventListener('click', () => {
        changeStatus(index)
        loadPage();
    });
}

const changeStatus = (index) => {
    // Elimina la clase "active" de todos los elementos de la lista
    elementos.forEach(link => {
        link.classList.remove('active');
    });

    // Agrega la clase "active" al enlace que se ha hecho clic
    elementos[index].classList.add('active');

    // Actualiza el índice actual
    currentIndex = index;
}

elementos.forEach((elemento, index) => {
    agregarEvento(elemento, index);
})


const loadPage = (pageName) => {
    console.log(pageName);
    fetch(`${pageName}`)
        .then(response => response.text())
        .then(data => {
            contentContainer.innerHTML = data;
        })
        .catch(error => {
            console.error("Error al cargar la pagina: ", error)
        });
}

elementos.forEach(elemento => {
    elemento.addEventListener('click', changeStatus(currentIndex))});