var count = 0
var numb = 0
var screen = screen.height
$('.menu').css("height",screen)
var enter = function () {
    $(".toggle1").css("transform",'rotate(-5deg)');
    $(".toggle3").css("transform",'rotate(5deg)');
  } 
  var leave = function () {
    $(".toggle1").css("transform",'rotate(0deg)');
    $(".toggle3").css("transform",'rotate(0deg)');
  }
  $(".toggle").hover(
  enter,leave
  )
  $('.toggle').click(function(){
    count++
    if(count%2 === 0){
      $(this).bind("mouseenter",enter);
      $(this).bind("mouseleave",leave);
      $('.toggle1').css("transform",'rotate(0deg)')
      $('.toggle2').css("display",'block')
      $('.toggle3').css("transform",'rotate(0deg)')
      $('.menu').css("display","none")
    } else{
      $(this).unbind("mouseenter");
      $(this).unbind("mouseleave");
      $('.toggle1').css("transform",'rotate(-40deg)')
      $('.toggle2').css("display",'none')
      $('.toggle3').css("transform",'rotate(40deg)')
      $('.menu').css("display","block")
    }
  })
 function swiper1(){
    $('.img1').css("opacity","0")
    $('.img2').css("opacity","1")
    $('.numm').removeClass('active')
    $('.numm1').addClass('active')
    numb = 1
 }
 function swiper2(){
    $('.img1').css("opacity","1")
    $('.img2').css("opacity","0")
    $('.numm1').removeClass('active')
    $('.numm').addClass('active')
    numb = 0
 }
 
function times(){
  if(numb === 0){
    swiper1()
  } else if(numb ===1){
    swiper2()
  }
}
var time = setInterval(function(){times()},3000)
$('.banner').mouseenter(function() {
  clearInterval(time)
})
$('.banner').mouseleave(function(){
  time = setInterval(function(){
    times()
  },3000)
})

  $('.left').click(function(){
        if(numb === 0){
           swiper1()
        }else if(numb === 1){
            swiper2()
        }
  })
  $('.right').click(function(){
    if(numb === 0){
        swiper1()
    }else if(numb === 1){
        swiper2()
    }
})
$('.numm').click(function(){
    swiper2()
})
$('.numm1').click(function(){
    swiper1()
})




$('.menuright>ul>li').hover(function(){
    var ind = $(this).index()
    $('.menuleft>ul>li').eq(ind).css('opacity','1')
    $('.menuleft>ul>li').eq(ind).siblings().css('opacity','0')
    $(this).css("margin-left","-15px")
},function(){
    $(this).css("margin-left","0px")
})
$('.nav li').hover(function(){
  $(this).children('a').css('color',"#c5a28b")
},function(){
  $(this).children('a').css('color',"#888")
})
$('.shoplist li a').hover(function(){
  $(this).children('img').css("transform","scale(0.95)")
},function(){
  $(this).children('img').css("transform","scale(1)")
})
$('.classul li').hover(function(){
  $(this).children('img').css("transform","scale(0.95)")
},function(){
  $(this).children('img').css("transform","scale(1)")
})
$('.footerup').hover(function(){
  $('.appleimg').css("transform","scale(0.95)")
},function(){
  $('.appleimg').css("transform","scale(1)")
})