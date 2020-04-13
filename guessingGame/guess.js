function playerGuess(){
    randomGuess = Math.floor(Math.random()*100)
    console.log(randomGuess);
    $('#inputBtn').click(function(){
        // console.log("pushed")
        userGuess = $('#userInput').val().trim();
        console.log(userGuess);
        if (userGuess < randomGuess){
            console.log('guess is too low');
            $('#userInput').val('');
        } else if (userGuess > randomGuess){
            console.log("guess is to high")
            $('#userInput').val('');
        } else {
            console.log("guess on the nose")
            $('#userInput').val('');
        }
        
    })
}
playerGuess()