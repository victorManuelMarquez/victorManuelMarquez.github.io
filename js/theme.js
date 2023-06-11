let storedTheme = localStorage.getItem("theme");
if (storedTheme) {
    document.documentElement.setAttribute('data-bs-theme', storedTheme);
}

let theme = document.documentElement.getAttribute('data-bs-theme');

let actualThemeBtn = document.getElementById("bd-theme");
let themeOptionsList = document.querySelector('ul[aria-labelledby="bd-theme-text"]').getElementsByTagName('li');
let actualThemeIcon = document.getElementById('icono-tema-actual');

const clases = {
    "light" : ["bi", "bi-brightness-high-fill"],
    "dark" : ["bi", "bi-moon-stars-fill"],
    "auto" : ["bi", "bi-circle-half"]
};

function aplicarIconoDeTema() {
    for (let clazz of clases[theme]) {
        actualThemeIcon.classList.add(clazz);
    }
}

function eliminarIconoDeTema() {
    for (let clazz of clases[theme]) {
        actualThemeIcon.classList.remove(clazz);
    }
}

function automatico(value) {
    if (value === "auto") {
        for (let clazz of clases[value]) {
            actualThemeIcon.classList.add(clazz);
        }
        if (theme === "light") {
            value = "dark";
        } else {
            value = "light";
        }
    } else {
        aplicarIconoDeTema();
    }
    document.documentElement.setAttribute("data-bs-theme", value);
    localStorage.setItem("theme", value);
}

function borrarTemaAnterior() {
    let activeButton = document.querySelector('ul[aria-labelledby="bd-theme-text"]').querySelector('.active');
    console.log(activeButton);
    activeButton.setAttribute('aria-pressed', "false");
    activeButton.classList.remove("active");
    eliminarIconoDeTema();
}

function aplicarTema(button) {
    borrarTemaAnterior();
    // aplico el nuevo
    button.classList.add("active");
    button.setAttribute('aria-pressed', "true");
    let value = button.getAttribute('data-bs-theme-value');
    automatico(value);
}

// AL CARGAR LA PÁGINA:
for (let li of themeOptionsList) {
    let button = li.getElementsByTagName('button')[0];
    button.addEventListener("click", () => aplicarTema(button));
    // El tema elegido o por defecto se asigna a su correspondiente botón
    if (button.getAttribute('data-bs-theme-value') === theme) {
        button.setAttribute('aria-pressed', "true");
        button.classList.add("active");
    } else {
        button.setAttribute('aria-pressed', "false");
        button.classList.remove("active");
    }
}

automatico(theme);