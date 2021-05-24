$(document).ready(function(){
    firstAnim();
    fdelay();
    secondAnim();
    secdelay();
    thirdAnim();
})
function firstAnim(){
    $('#text1').addClass('animate_fadeIn');
}
function fdelay(){
    setTimeout(function (){
        $('#fbg').fadeOut();
    },2000)
}
function secondAnim(){
    setTimeout(function () {
        $('#pack').addClass('animate_bigToSmall');
        $('#leaf').addClass('animate_fadeIn');
        $('#whitebottom').addClass('animate_downToUp');
        $('#logo').addClass('animate_leftToRight');
    },2000);
}
function secdelay(){
    setTimeout(function (){
        $('#secbg').fadeOut();
    },4500)
}
function thirdAnim(){
    setTimeout(function () {
        $('#thirdbg').addClass('vis');
        $('#pack2').addClass('animate_CenterToLeft');
        $('#text2').addClass('animate_textLeftToRight');
        $('#whitebottom2').addClass('animate_downToUp');
        $('#logo2').addClass('animate_leftToRight');
    },5000);
}

document.getElementById('fbg').ondragstart = function() { return false; };
document.getElementById('text1').ondragstart = function() { return false; };


