let result = ' x   ';
function buffer(value){
    let buffer = '';
    let padding = 4 - value;
        while(padding -- > 0)
            buffer += ' ';
            return buffer;
}

for (let i = 0; i < 13; i++) {
    for (let j = 0; j < 13; j++) {
        if(i == 0 && j > 0) {
            result += '[' + j + ']' + buffer((j + '').length+2);
            // console.log(result);
        } else if(j == 0 && i > 0){
            result += '[' + i + ']';
            // console.log(result);
        } else if (i > 0 && j > 0){
            result += buffer((i*j+'').length) + i*j;
        }
        // console.log(i)
        // console.log(j);
    }
    result += `\n`
    
}
console.log(result);