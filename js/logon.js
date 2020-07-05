var screen = screen.height
$('.tips').css("height",screen)
$('.but').click(function(){
    var int1 = $('.int1').val()
    var input1 = $('.input1').val()
    var int2 = $('.int2').val()
    var int3 = $('.int3').val()
    if(int1 === ''||int1.length<11){
        $('.tip').text("请输入正确的手机号")
    } else if(input1 != 'ksba'){
        $('.tip').text("请输入正确的图片验证码")
    }
})
$('.sign').click(function(){
    var int1 = $('.int1').val()
    var input1 = $('.input1').val()
    var int2 = $('.int2').val()
    var int3 = $('.int3').val()
    if(int1 === ''||int1.length<11){
        $('.tip').text("请输入正确的手机号")
    } else if(input1 != 'ksba'){
        $('.tip').text("请输入正确的图片验证码")
    } else if(int2.length<6){
        $('.tip').text("密码长度至少为6位")
    } else if(int2!=int3){
        $('.tip').text("两次输入的密码不同")
    } else{
        $('.tip').text("")
        $('.tips').css("display","block")
        setTimeout(function(){
        $('.tips').css("display","none")
    }, 1500);
    }
})