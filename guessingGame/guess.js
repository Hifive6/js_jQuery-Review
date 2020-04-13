function playerGuess(){
    let guesses = 10;
    console.log('you have ' + guesses + ' guesses left');
    randomGuess = Math.floor(Math.random()*100)
    console.log(randomGuess);

    $('#inputBtn').click(function(){
        
        userGuess = $('#userInput').val().trim();
        console.log(userGuess);

        if (userGuess < randomGuess){
            console.log('guess is too low, Try Again');
            guesses --;
            console.log('you have ' + guesses + ' guesses left')
            $('#userInput').val('');
            if(guesses < 1){
                console.log('You have run out of guesses, Sorry')
                return false;
            }

        } else if (userGuess > randomGuess){
            console.log("guess is to high, Try Again");
            guesses --;
            console.log('you have ' + guesses + ' guesses left');
            $('#userInput').val('');

        } else {
            console.log("guess on the nose")
            $('#userInput').val('');
        }
        
    })
}
playerGuess()