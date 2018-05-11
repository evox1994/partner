$(document).ready(function(){

    $('.header-contacts-block p').click(function(){
        if ( $(this).hasClass("active") ) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    });

});