strings = ['case', 'book', 'picture', 'buddha'];

function capitaliseWords(){
    var string = strings.map(function(i, string){
        return i.toUpperCase();
    });
    // string.toUppercase();
    console.log(string);
    // return string;
}

capitaliseWords();
