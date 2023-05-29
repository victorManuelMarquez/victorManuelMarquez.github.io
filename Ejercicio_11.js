// SOLO PARA TRIANGULOS EQUILATEROS
let base = prompt("Ingrese el valor de la base:");
let altura = prompt("Ingrese la altura:");
console.log('superficie: ' + (base * altura / 2).toFixed(1) + '&sup2;');
let per = Math.pow(base/2, 2) + Math.pow(altura, 2);
console.log('perímetro: ' + (parseFloat(base) + Math.sqrt(per) * 2).toFixed(2));