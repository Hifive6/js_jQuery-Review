$('span').css('color', 'Red');

// $('p').click(function(){
//     $(this).css('color', 'red');
// });



$('p').on('click', function(){
    var self = this;
    $(self).addClass('onRed').css('color','red');
    // $(self).addClass('onRed').css('color','red').toggle();
    // $(self).removeClass('onRed')
    
    // .css('color','red');
    // $(this).css('color', 'red');
});
// $('p').on('click', function(){
//     var self = this;
//     // $(self).addClass('onRed').css('color','red');
//     $(self).removeClass('onRed')
//     // .css('color','red');
//     // $(this).css('color', 'red');
// });
