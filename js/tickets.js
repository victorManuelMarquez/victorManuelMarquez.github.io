// CONSTANTES
const minimo = 1;
const maximo = 20;
const categoriasConDescuento = {
    "Estudiante" : 80,
    "Trainee" : 50,
    "Junior" : 15
};
const precio = 200;

let ticketsPorCategoria = {
    "Estudiante" : 0,
    "Trainee" : 0,
    "Junior" : 0
};

// CARGO LA LISTA DESPLEGABLE
let selector = document.getElementById('categorias');
for (let categoria in categoriasConDescuento) {
    let option = document.createElement('option');
    option.value = categoria;
    option.innerText = categoria;
    selector.appendChild(option);
}

// ESTABLEZCO LAS RESTRICCIONES DEL INPUT "cantidad" u otro similar
function restriccionesDeTickets(input) {
    input.setAttribute('min', minimo);
    input.setAttribute('max', maximo);
    input.setAttribute('value', minimo);
}

function calcularPrecio(descuento) {
    return precio - (precio * descuento / 100);
}

function suma(total, monto) {
    return total + monto;
}

function actualizarTotal(descuento, cantidad) {
    return calcularPrecio(descuento) * cantidad; // descuento individual
}

function establecerMontoFinal() {
    let total = document.getElementById('total');
    let spanItems = group.querySelectorAll('span[name="total"]');
    let calculo = 0;
    for (let item of spanItems) {
        calculo += item.innerText;
    }
    total.innerText = parseFloat(calculo).toFixed(2);
}

// CREO EL CUERPO DE LA LISTA
function crearLista() {
    let carrito = document.getElementById('carrito');

    if (document.getElementById(selector.value.toLowerCase())) {
        alert(`(${selector.value}) ya está agregado.`);
        return;
    }

    let group = document.createElement('div');
    group.id = selector.value.toLowerCase();
    group.classList.add("input-group");
    group.classList.add("mb-3");
    carrito.appendChild(group);

    let buttonStatic = document.createElement('button');
    buttonStatic.setAttribute('type', "button");
    buttonStatic.setAttribute('name', selector.value);
    buttonStatic.classList.add("btn");
    buttonStatic.classList.add("btn-outline-secondary");
    buttonStatic.innerText = selector.value;
    group.appendChild(buttonStatic);

    let buttonDropdown = document.createElement('button');
    buttonDropdown.setAttribute('type', "button");
    buttonDropdown.classList.add("btn");
    buttonDropdown.classList.add("btn-outline-secondary");
    buttonDropdown.classList.add("dropdown-toggle");
    buttonDropdown.classList.add("dropdown-toggle-split");
    buttonDropdown.setAttribute('data-bs-toggle', "dropdown");
    buttonDropdown.setAttribute('aria-expanded', "false");
    group.appendChild(buttonDropdown);

    let ul = document.createElement('ul');
    ul.classList.add("dropdown-menu");
    ul.appendChild(document.createElement('li'));

    let eliminar = document.createElement('button');
    eliminar.classList.add("btn");
    eliminar.innerText = "Borrar";
    eliminar.addEventListener("click", () => group.remove());

    ul.firstChild.appendChild(eliminar);
    group.appendChild(ul);

    let spanDescuento = document.createElement('span');
    spanDescuento.classList.add("input-group-text");
    spanDescuento.innerText = `${categoriasConDescuento[selector.value]}% off`;
    group.appendChild(spanDescuento);

    let spanTickets = document.createElement('span');
    spanTickets.classList.add("input-group-text");
    spanTickets.innerText = "Cantidad de tickets";
    group.appendChild(spanTickets);

    let input = document.createElement('input');
    input.setAttribute('type', "number");
    input.classList.add("form-control");
    restriccionesDeTickets(input);
    group.appendChild(input);
    input.addEventListener("input", (event) => {
        spanTotal.innerText = actualizarTotal(categoriasConDescuento[selector.value], event.target.value).toFixed(2);
        establecerMontoFinal();
    });

    let small = document.createElement('small');
    small.classList.add("input-group-text");
    small.innerText = "$";
    group.appendChild(small);

    let spanTotal = document.createElement('span');
    spanTotal.setAttribute('name', "total");
    spanTotal.classList.add("input-group-text");
    spanTotal.innerText = (calcularPrecio(categoriasConDescuento[selector.value]) * input.value).toFixed(2);

    group.appendChild(spanTotal);
    
    establecerMontoFinal();
}

// LISTENERS
selector.addEventListener("change", (event) => {
    if (event.target.value) {
        crearLista();
    }
});
