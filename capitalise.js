strings = ['case', 'book', 'picture', 'buddha'];

function capitaliseWords(){
    var string = strings.map(function(i, string){
        return i.toUpperCase();
        
    });
    // string.toUppercase();
    console.log(string);
    // return string;
}

function capitaliseFirstLetter(){
    var firstLetter = strings.map(function(i){
        return i.charAt(0).toUpperCase() + i.slice(1);
    })
    console.log(firstLetter);
}

capitaliseWords();
capitaliseFirstLetter();
