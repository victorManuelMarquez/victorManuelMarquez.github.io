let mat = prompt("Ingrese la matrícula:");
let notas = [];
let prom = 0;
for (let i=0; i<5; i++) {
    notas[i] = parseInt(prompt("(" + (i+1) + "/5) Ingrese la nota del alumno:"));
    prom += notas[i];
}
prom = prom / 5;
if (prom > 7)
    console.log(mat + ", promedio: " + prom + ", aprobado");
else
    console.log(mat + ", promedio: " + prom + ", desaprobado");