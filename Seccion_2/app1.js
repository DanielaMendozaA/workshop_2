while(confirm("Deseas agregar informacion")){
    let energia = -1
    let clima   = -1
    let carga   = -1
    while(validarDatos(energia)){
        energia = Number(prompt("Ingresa tu nivel de energia: 0 para bajo o 1 para alto"))  
        if(validarDatos(energia)){
            alert("Debes ingresar un numero del 0 al 100")
        }
    }  
   while(validarDatos(clima)){
        clima = Number(prompt("Ingresa el nivel del clima: 0 para bajo o 1 para alto"))
        if(validarDatos(clima)){
            alert("Debes ingresar un numero del 0 al 100")
        }
   }
   while(validarDatos(carga)){
        carga = Number(prompt("Ingresa el nivel de carga: 0 para bajo o 1 para alto"))
        if(validarDatos(carga)){
            alert("Debes ingresar un numero del 0 al 100")
        }
   }

   if(energia && clima && !carga){ 
     alert("Tienes energia suficiente para salir a correr y el clima esta genial")
   }else if (!energia){
     alert("No tienes suficiente energia para salir")
   }else if(!clima){
     alert("El clima esta un poco frio, deberias quedarte en casa")
   }else if(carga){
     alert("Debes realizar el trabajo pendiente")
   }
   
 

}

function validarDatos(generico){
    return generico < 0 || generico > 1 || isNaN(generico)
}


