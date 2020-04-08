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
    $(self).text($(self).data('randomWord'))
})