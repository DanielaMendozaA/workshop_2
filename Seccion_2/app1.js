while(confirm("Deseas agregar informacion")){
    

    let energia = -1
    let clima   = -1
    let carga   = -1
    while(validarDatos(energia)){
        energia = Number(prompt("Ingresa tu nivel de energia de 0 a 100"))  
        if(validarDatos(energia)){
            alert("Debes ingresar un numero del 0 al 100")
        }
    }  
   while(validarDatos(clima)){
        clima = Number(prompt("Ingresa el nivel del clima del 0 al 100"))
        if(validarDatos(clima)){
            alert("Debes ingresar un numero del 0 al 100")
        }
   }
   while(validarDatos(carga)){
        carga = Number(prompt("Ingresa el nivel de carga laboral del 0 al 100"))
        if(validarDatos(carga)){
            alert("Debes ingresar un numero del 0 al 100")
        }
   }

  
}

function validarDatos(generico){
    console.log(generico < 0 || generico > 100 || isNaN(generico))
    return generico < 0 || generico > 100 || isNaN(generico)
}


