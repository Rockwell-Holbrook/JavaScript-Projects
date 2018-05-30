var changeReturn = function(cost, moneyGiven) {
    if(cost > moneyGiven) {
        console.log("Not enough money given to cover the cost. Try again!");
        return;
    }    

    console.log("Money Given: $" + moneyGiven);
    console.log("Cost of Item: $" + cost);
    console.log ("Change to Return: $" + (moneyGiven - cost));

    /* Left Over Money */
    var totalChange = (moneyGiven - cost) * 100;

    /* Quarters to return */
    totalChange = changeHelper(totalChange, 25, "Quarters");
    
    /* Dimes to return */
    totalChange = changeHelper(totalChange, 10, "Dimes");

    /* Nickels to return */
    totalChange = changeHelper(totalChange, 5, "Nickels");

    /* Pennies to return */
    console.log("Pennies: " + Math.round(totalChange, 1));
}

var changeHelper = function(totalChange, ammount, type) {
    var numberOfUnits = Math.floor(totalChange/ammount);
    console.log(type + ": " + numberOfUnits);
    return (totalChange - (numberOfUnits * ammount));
}

changeReturn(6.45, 10);