let nombresSurvenir = prompt("Por favor ingrese los nombres de los survenir separados por coma")
let listaNombres = nombresSurvenir.split(",")
const listaCostos = []
const listaDisponibles = []

listaNombres.forEach(function(nombre){
      let costos = validarCosto(nombre)    
      
      let listaDisponibilidad = confirm("Ingrese si el survenir: " + nombre + " esta disponible")
      listaDisponibles.push(listaDisponibilidad)
      
});

listaNombres.forEach(function(name){
      let validarNombre = typeof(name)
      console.log("El tipo de dato para " + name + " es: " + validarNombre)
})

listaCostos.forEach(function(cost){
      let validarCosto = typeof(cost)
      console.log("El tipo de dato de cantidad para " + cost + " es: " + validarCosto)
})

listaDisponibles.forEach(function(available){
      let validarDispo = typeof(available)
      console.log("El tipo de disponibilidad para " + available +  " es: " + validarDispo)
})

function validarCosto (nombre) {
      let costoInt
      do{
            let costo = prompt("Ingrese el costo de el survenir: " + nombre)
            costoInt = parseInt(costo)
            if (!isNaN(costoInt)){
                  listaCostos.push(costoInt)
            } else {
                  alert("El costo debe ser un numero")
            }      
      } while(isNaN(costoInt))
           
 }
 
let listaSurvenir = []

for (let i = 0; i < listaNombres.length; i++){
      let survenir = {
            nombre : listaNombres[i],
            costo : listaCostos[i],
            disponibilidad : listaDisponibles[i]
      }
      listaSurvenir.push(survenir)
}

console.log(listaSurvenir)

alert("A continuación te mostrare los survenir disponibles para que escojas cuales deseas adquirir")
for (let i = 0; i < listaSurvenir.length; i++) {
      alert(JSON.stringify(listaSurvenir[i]));
    }












