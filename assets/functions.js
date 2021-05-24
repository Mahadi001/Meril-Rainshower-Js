$(document).ready(function(){
    dragft();
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
    },1200)
}
function secondAnim(){
    setTimeout(function () {
        $('#pack').addClass('animate_bigToSmall');
        $('#leaf').addClass('animate_fadeIn');
        $('#whitebottom').addClass('animate_downToUp');
        $('#logo').addClass('animate_leftToRight');
    },1500);
}
function secdelay(){
    setTimeout(function (){
        $('#secbg').fadeOut();
    },3000)
}
function thirdAnim(){
    setTimeout(function () {
        $('#thirdbg').addClass('vis');
        $('#pack2').addClass('animate_bigtoSmallCenterToLeft');
        $('#text2').addClass('animate_textLeftToRight');
        $('#whitebottom2').addClass('animate_downToUp');
        $('#logo2').addClass('animate_leftToRight');
    },3000);
}

document.getElementById('fbg').ondragstart = function() { return false; };
document.getElementById('text1').ondragstart = function() { return false; };


