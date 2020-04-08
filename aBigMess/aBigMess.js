// alert("hi")
$('body *').each(function(){
    var top = Math.random() * 500;
    var left = Math.random() * 500;
    $(this).css({
        'position': 'absolute',
        'top': top,
        'left': left,
    })
})