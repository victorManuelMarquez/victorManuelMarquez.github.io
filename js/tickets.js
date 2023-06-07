function generarLista(valor) {
    let cuerpo = document.getElementById('generarAqui');
    cuerpo.classList.add("mb-3");

    let lista = document.createElement('ul');
    lista.id = 'carrito';
    lista.classList.add("list-group");

    let item = document.createElement('li');
    item.classList.add("list-group-item");
    console.log(typeof(valor));
    item.appendChild(document.createTextNode(valor));

    lista.appendChild(item);

    cuerpo.appendChild(lista);
}

function seleccionarCategoria(obj) {
    generarLista(obj.value);
}
