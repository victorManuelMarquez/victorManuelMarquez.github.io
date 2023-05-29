let n1 = parseInt(prompt("Ingrese un número:"));
let n2 = parseInt(prompt("Ingrese un número:"));
let n3 = parseInt(prompt("Ingrese un número:"));
if (n1 > n2 && n1 > n3)
    console.log(n1 + " es mayor");
else if (n2 > n1 && n2 > n3)
    console.log(n2 + " es mayor");
else if (n3 > n1 && n3 > n2)
    console.log(n3 + " es mayor");
else
    console.log("todos son iguales");