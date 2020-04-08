// alert('hi')

$('.rollover').hover(function(){
    let self = this;
    // console.log(self)
    $(self).data('randomWord', $(self).text());
    $(self).text("Over");
    

    // console.log($(self).show("Over"));

},
function(){
    let self = this;
    console.log($(self).text($(self).data('randomWord')))
})

// $('.rollover').hover(function(){
//      a = this;
//      $(a).text('Over');
//     // $(self).text("over");
// },
// function(){
//     var b = this;
    
//     $(b).text('somethingelse');
// })