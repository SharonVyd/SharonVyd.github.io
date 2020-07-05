var count = 0
var enter = function () {
    $(".toggle1").css("top", "3px");
    $(".toggle3").css("top", "14px");
  } 
  var leave = function () {
    $(".toggle1").css("top", "0");
    $(".toggle3").css("top", "16px");
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
      $('.class').css("display",'none')
    } else{
      $(this).unbind("mouseenter");
      $(this).unbind("mouseleave");
      $('.toggle1').css("transform",'rotate(40deg)')
      $('.toggle2').css("display",'none')
      $('.toggle3').css("transform",'rotate(-40deg)')
      $('.class').css("display",'block')
    }
  })