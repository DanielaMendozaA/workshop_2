    alert("Debes ingresar cada dato que corresponda a un survenir separado por coma en cada campo de datos, se deben ingresar en el mismo orden segun corresponda");
    
    let nombresSurvenir = prompt("Por favor ingrese los nombres de los survenir separados por coma");
    let listaNombres = nombresSurvenir.split(",");

    listaNombres.forEach(function(nombre){
          let listaCostos = prompt("Ingrese el costo de el survenir: " + nombre)
          let listaDisponibilidad = confirm("Ingrese si el survenir: " + nombre + " esta disponible")

          console.log(typeof(nombre))

          // console.log("Datos del survenir: ")

          // console.log("Nombre: " + nombre);

          // console.log("Costo: " + listaCostos);
      
          // console.log("Disponibilidad: " + listaDisponibilidad);

          
      
    });






