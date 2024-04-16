//Se declara un destino que no se puede cambiar
const destino = prompt("Por favor ingrese su destino");
console.log(`Su destino es ${destino}`);

//Se declara cantidad de días
let cantDias = prompt("Por favor ingrese la cantidad de días");
console.log(`La cantidcad de días es ${cantDias}`);

//Se declara presupuesto inicial
let presupuesto = prompt("Ingrese el presupuesto");
console.log(`El presupuesto inicial es ${presupuesto}`);

const presupuestoDiario = 100000;
let gastoDiario = cantDias / presupuesto;

if (gastoDiario < presupuestoDiario){
    let presupuesto = prompt("Debes ajustar tu presupuesto ya que no es suficiente");
    console.log(`El presupuesto actualizado es ${presupuesto}`);
} else {
    console.log(`El presupuesto ingresado es suficiente`);
}

if (gastoDiario < presupuestoDiario){
    let presupuesto = prompt("Debes ajustar tu presupuesto ya que no es suficiente");
    console.log(`El presupuesto actualizado es ${presupuesto}`);
} else {
    console.log(`El presupuesto ingresado es suficiente`);
}