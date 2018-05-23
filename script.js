$(function(){
    //jquery kodas
    $('.sandwich').click(function(){
        if($('#mobileMenu').css('right') == "-300px"){
            $('#mobileMenu').css('right', '0px');
            $('#mobileMenu').show();
        }else{
            $('#mobileMenu').css('right', '-300px');
            $('#mobileMenu').hide();
        }
    });
});