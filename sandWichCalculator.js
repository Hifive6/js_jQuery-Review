function sandWichCalculator(slicesOfBread, slicesOfCheese){
    var sandwiches = slicesOfBread / 2;

    if((slicesOfBread > 1 ) && (slicesOfCheese < sandwiches) && (slicesOfCheese < sandwiches)){
        sandwiches = slicesOfCheese;
        console.log(sandwiches);
        return sandwiches
    } else if((slicesOfCheese >= sandwiches) && (slicesOfBread > 1)) {
        console.log(sandwiches);
        return sandwiches;
    } else if((slicesOfCheese = 0) || (slicesOfBread < 2)){
        console.log("none for you")
        return 0;
    }

}

sandWichCalculator(2,5);