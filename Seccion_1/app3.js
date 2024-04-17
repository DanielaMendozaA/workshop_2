function obtenerValor(mensaje) {
    let valor;
    while (isNaN(valor) || valor === '') {
        valor = prompt(mensaje);
        if (isNaN(valor)) {
            alert("El dato ingresado debe ser un número");
        }
    }
    return parseFloat(valor);
}

let budget = obtenerValor("Ingresa tu presupuesto inicial");
let alojamiento = obtenerValor("Ingresa el costo de alojamiento");
let transporte = obtenerValor("Ingresa el costo del transporte");
let comida = obtenerValor("Ingresa el costo de la comida");
let umbral = obtenerValor("Ingresa el valor del umbral para gastos extra");

const constUmbral = umbral;
console.log(constUmbral);

let costoViaje = {
    alojamiento : alojamiento,
    transporte : transporte,
    comida : comida
};

console.log(budget);
console.log(costoViaje);

let totalCosto = Object.values(costoViaje).reduce((a, b) => a + b, 0);
console.log(totalCosto);

totalCosto = totalCosto + umbral

console.log("EL total del costo es: " + totalCosto);

while(budget < totalCosto) {
    alert("No tienes suficiente presupuesto para cubrir los gastos, debes reajustar el presupuesto")
    budget = obtenerValor("Ajusta nuevamente tu presupuesto")    
}

let listaArticulos = []

let presupuestoRestante = budget - totalCosto
if(presupuestoRestante < umbral){
    alert("Debes evitar gastos adicionales para no sobrepasar tu presupuesto")
}else{
    while(confirm("¿Deseas agregar un articulo?")){
        let nombreArticulo = prompt("Ingresa el nombre del articulo")
        let costoArticulo = obtenerValor("Ingresa el costo del articulo")
        const articulo = {
            nombreArticulo: nombreArticulo,
            costoArticulo: costoArticulo
        }
        listaArticulos.push(articulo)
    }
}

console.log(listaArticulos)

let articuloMenorCosto = listaArticulos.reduce((anterior, siguiente) => {
    return (anterior.costoArticulo < siguiente.costoArticulo) ? anterior : siguiente;
});

console.log(articuloMenorCosto);
console.log(presupuestoRestante)

if(articuloMenorCosto.costoArticulo < presupuestoRestante){
    alert("El articulo de menor valor que se acomoda a tu presupuesto es: " + articuloMenorCosto.nombreArticulo)
}else{
    alert("Ninguno de los articulos ingresados se acomoda a tu presupuesto")
}