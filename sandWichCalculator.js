function sandWichCalculator(slicesOfBread, slicesOfCheese){
    var sandwiches = slicesOfBread / 2;

    if((slicesOfBread > 1 ) && (slicesOfCheese < sandwiches)){
        sandwiches = slicesOfCheese;
        console.log(sandwiches);
        return sandwiches
    }
}

sandWichCalculator(10);