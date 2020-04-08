// function dataFromKeyup() {
    var keyup = document.querySelector("input[name='upKey']")
    keyup.addEventListener('keyup',function(event){
        // console.log(event);
        var inputText = document.querySelector("input[name='upKey']").value;
        
        // console.log(myDiv);
        var appendToDiv = document.querySelector('#placeHere')
        appendToDiv.append(inputText);
        
    })




// document.querySelector("input[name='upKey']").onkeyup = function() {
//     inputValue()
// }

// function inputValue(){
//     var value = document.querySelector('input').value;
    
//     console.log(value);
// }