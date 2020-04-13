let array = [1,2,3,4,5,6,7,8,9,10,11];

for (let i = 0; i <= array.length; i++) {
    // let notAPrime = false;
    if((i%2===0) || (i%3===0))
        continue;
        console.log(i)
    
    
    // for (let j =2; j <= (i - 1); j++){
        // if (i % j === 0){
    //         notAPrime = true;
    //     }
    //     if (notAPrime === false){
    //     console.log(i);
    // }
    // }
// }
}


// for (let i = 0; i <= 100; i++){
//     let primeNumber = false;
//     for (let j = 2; j <= i-1; j++){
//         if (i%j === 0 && j !== i){
//             primeNumber = true;
//             // console.log(j)
//         }
//         if(primeNumber === false){
//             console.log(i);
//         }
//     }
// } 


// var array = new Array(100);

// for (var i=2 ; i<=array.length-0; i++) {
//     if((i%2===0) || (i%3===0))
//         continue;
//     console.log(i);
// }