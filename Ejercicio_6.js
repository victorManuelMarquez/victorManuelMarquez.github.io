let peso = prompt("Ingrese su peso (en Kgs):");
let talla = prompt("Ingrese su estatura (en centímetros):");
console.log("Tu IMC es de " + (peso / ((talla * talla) / 10000)).toFixed(2));