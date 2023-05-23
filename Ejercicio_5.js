let edad = prompt("Ingrese su fecha de nacimiento:");
edad = new Date().getFullYear() - edad;
console.log("Tienes " + edad + " años");