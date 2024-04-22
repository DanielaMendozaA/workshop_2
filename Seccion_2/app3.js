while(confirm("Do you want to validate your luggage")){
    let weather = Number(prompt("Insert the weather\n1.Sunny\n2.Warm\n3.Rainy"))
    let spaceLuggage = Number(prompt("Insert the available space\n1.A lot\n2.Moderate\n3.bit\n4.nothing"))
    let luggWeight = Number(prompt("Insert the luggage weight (enter a number from 1 to 20)"))

    if(weather === 1 && spaceLuggage === 1 && (luggWeight >= 1 && luggWeight <= 10)){
        alert("You can bring a picnic suitcase, sunglases, hat and camera")
    }else if(weather === 2 && spaceLuggage === 1 && (luggWeight >= 10 && luggWeight <= 20)){
        alert("You can bring comfortable clothes, glases and camera")
    }else if(weather === 3 && spaceLuggage === 1 && (luggWeight >= 1 && luggWeight <= 10)){
        alert("You should bring a umbrella, rain boots and a coat")
    }else if(weather === 1 && spaceLuggage === 2 && (luggWeight >= 1 && luggWeight <= 10)){
        alert("You can bring sunglases and camera")
    }else if(weather === 1 && spaceLuggage === 3 && (luggWeight >= 10 && luggWeight <= 20)){
        alert("You should bring a camera")
    }else if(weather === 3 && spaceLuggage === 3 && (luggWeight >= 1 && luggWeight <= 10)){
        alert("You should bring an umbrella")
    }else if(spaceLuggage === 4){
        alert("You can't bring additional articles")
    }else{
        alert("You can bring sunglases, camera and swimsuit")
    }



}