alert("Welcome to your budget calculator")

while(confirm("Do you want to validate your budget?")){
    let budget   = validateType("Insert your initial daily budget")
    let saving   = validateType("Insert estimated daily saving")

    while(saving > budget){
        alert("your daily saving is not enough for the budget, you should adjust the budget")
        saving = validateType("Insert your daily saving again")
    }
    console.log("Primer presupuesto " + budget)
    
    let finalBudget = budget - saving
    console.log("primer presupuesto final " + finalBudget)

    let eatOut = 0;
    if(finalBudget != 0){
        eatOut = validateType("Insert an estimated cost to eat out")
        while(finalBudget < eatOut){
            alert("Your budget for eating out is not enough, you should adjust the cost")
            eatOut = validateType("Insert an estimated cost to eat out again")
        }
        finalBudget -= eatOut
    }
    
    console.log("segundo presupuesto final " + finalBudget)
    
    let buyBooks = 0;
    if(finalBudget != 0){
        buyBooks = validateType("Insert an estimated cost to buy books")
        while(finalBudget < buyBooks){
            alert("Your budget for buying books is not enough, you should adjust the cost")
            buyBooks = validateType("Insert an estimated cost to buy books again")
        }
        finalBudget -= buyBooks
    }

    console.log("tercer presupuest final" + finalBudget)
    alert(`After calculating your budget minus your expenses, you have ${finalBudget} left for other expenses`)
}

function validateType(message){
    let value
    while(isNaN(value) || value === ''){
        value = prompt(message)
        if(isNaN(value)){
            alert("You should insert a number date");
        }
    }
    return parseFloat(value);
}