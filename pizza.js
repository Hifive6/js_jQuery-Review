toppings = ['pepperoni', 'ham', 'bacon', 'sausage', 'green peppers'];

function pizzaToppings(){
    // console.log(toppings)
    // console.log('Pizza topping 1: ' + toppings[1])
    console.log('A delicious pizza with ' + toppings[0] + ' and ' + toppings[1]+ ' and ' + toppings[2]+ ' and ' + toppings[3]+ ' and ' + toppings[4])
}
pizzaToppings();

function pizzaTopping1(){
    for (let i = 0; i < toppings.length; i++){
        // console.log(i);
        console.log('this pizza has these toppings ' + toppings[i]);
    }
}
pizzaTopping1();