var x = 0
var y = 0
var z = 1
$('.deright').click(function(){
    x++
    if(x===4){
        x=0
    }
    y = -x*376*1
    $('.mainul').css('margin-left',y +'px')
    
})
$('.deleft').click(function(){
    x--
    if(x===-1) {
        x=3
    }
    y = -x*376*1
    $('.mainul').css('margin-left',y +'px')   
})
$('.mid2box span').click(function(){
    $(this).css({'color':"#f5c26b","border":"1px solid #f5c26b"})
    $(this).siblings().css({'color':"#b39472","border":"1px solid #b39472"})
})
$('.mid4l').click(function(){
    if(z===1){
        $('.number').text(z)
    } else {
        z--
        $('.number').text(z)
    }
})
$('.mid4r').click(function(){
        z++
        $('.number').text(z)
    
})
$('.com1').click(function(){
    $(this).addClass("active0")
    $(this).removeClass("active1")
    $('.com2').removeClass("active0")
    $('.com2').addClass("active1")
    $('.comimg').css("display","block")
    $('.know').css("display","none")
    $('footer').css('margin-top',"24100px")
})
$('.com2').click(function(){
    $(this).addClass("active0")
    $(this).removeClass("active1")
    $('.com1').removeClass("active0")
    $('.com1').addClass("active1")
    $('.know').css("display","block")
    $('.comimg').css("display","none")
    $('footer').css('margin-top',"600px")
})

