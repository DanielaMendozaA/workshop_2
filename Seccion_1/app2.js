let nombresSurvenir = prompt("Por favor ingrese los nombres de los survenir separados por coma");
let listaNombres = nombresSurvenir.split(",");
const listaCostos = [];
const listaDisponibles = [];

listaNombres.forEach(function(nombre){
      let listaCosto = prompt("Ingrese el costo de el survenir: " + nombre)
      let listaCostoInt = parseInt(listaCosto);
      if (!isNaN(listaCostoInt)){
            listaCostos.push(listaCostoInt)
      } else {
            alert("El costo debe ser un numero")
      }

      let listaDisponibilidad = confirm("Ingrese si el survenir: " + nombre + " esta disponible")
      listaDisponibles.push(listaDisponibilidad)
     
});












