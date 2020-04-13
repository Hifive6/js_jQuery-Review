// function hello(){
//     let sayHello = $('h1').append('<h3>Hello World');
//     return sayHello;
// }

// function greetUser(){
//     var nameBtn = document.querySelector('#personName');
    // console.log(nameBtn);
//     nameBtn.addEventListener('click', function(e){
//         let grabName = document.querySelector('#inputName').value;
        

//         if ((grabName == "alice") || (grabName == "bob")) {
//             document.getElementById('placeName').innerHTML = 'Hello ' + grabName;
//             grabName.value = '';
//         } else {
//             document.getElementById('placeName').innerHTML = 'This is not the right name, Try Again?';
//         }
//     })
// }
        // let createDiv = document.createElement('p');
        // let addDiv = document.querySelector('h4')
        // // createDiv.append(grabName);
        // createDiv.append(addDiv);
        // console.log(createDiv.innerHTML = grabName);

        // console.log(createDiv);
        // grabName.append('h4')
        // let saveInput = 
        // console.log(createDiv.append(grabName));
        // return createDiv; 


// hello();
// greetUser();


document.querySelector('#personName').addEventListener('click', function(){
    let n = document.querySelector('#inputName').value;
    //  console.log(n);
     let interger = (Number(n))
     let sum = 0;
     for (let i=0; i<=interger; i++){
        //  console.log(i);
         if((i % 3 === 0) || (i % 5 === 0)){

            sum += i;
            // sum += interger[i]
            console.log(sum)
        }
        //  let sum = Number(n) + 2;
        // let sum = Number(n) * (Number(n)+1) / 2;
        // if ((sum%3) || (sum%5)){
        //     console.log(sum);
        //     return sum;

        } 
    }
        

    )



