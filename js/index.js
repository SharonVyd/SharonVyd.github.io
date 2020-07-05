var use = 1
var screen = screen.height
$('.tips').css("height",screen)
$('.user').click(function(){
  $(this).css({'color':'#1c1f26','border-bottom':'1px solid #1c1f26'})
  $('.phone').css({'color':'#c2c4c6','border':'none'})
  $('.form').css("display","block")
  $('.formphone').css("display","none")
  use = 1
})
$('.phone').click(function(){
  $(this).css({'color':'#1c1f26','border-bottom':'1px solid #1c1f26'})
  $('.user').css({'color':'#c2c4c6','border':'none'})
  $('.formphone').css("display","block")
  $('.form').css("display","none")
  use = 0
})
function a(){
   $('.tips').css("display","block")
    setTimeout(function(){
    $('.tips').css("display","none")
  }, 1500);
}
$('.sign').click(function(){
  var x = $('.telphone').val()
  var y = $('.word').val()
  var z = $('.code').val()
  if(use === 1){
    if((x.length<11&&y ==='')||(x===''&& y==='')||(x===''||y==='')||(y.length<11&&x ==='')){
      $('.tipp').text('请填写 手机号 和 密码')
      a()
    } else if(x.length<11&&y!=''){
      $('.tipp').text('请正确填写手机号')
      a()
    } else if(z===''){
      $('.tipp').text('验证码不能为空')
      a()
    } else if(z!='ksba'){
      $('.tipp').text('验证码错误')
      a()
    }
  } else if(use ===0){
    var p = $('.pic').val()
    var q = $('.phone1').val()
    if(p!='ksba'){
      $('.tipp').text('图片验证码错误')
      a()
    }else if(q.length<11||q===''){
      $('.tipp').text('请正确填写手机号')
      a()
    }
  }
 
})
$('.obtain').click(function(){
  var x =$('.phone1').val()
  var y = $('.pic').val()
  if(y!='ksba'){
    $('.tipp').text('图片验证码错误')
    a()
  }else if(x.length<11||x===''){
    $('.tipp').text('请正确填写手机号')
    a()
  }
})





