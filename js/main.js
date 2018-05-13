$(document).ready(function(){

    $('.header-contacts-block p').click(function(){
        if ( $(this).hasClass("active") ) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    });

    function Add() {
        $('.header').addClass("active");
    }
    function Remove() {
        $('.header').removeClass("active");
    }

    $('.mobile-btn').click(function(){
        var st = $(window).scrollTop();
        if ( $(this).hasClass("active") ) {
            $(this).removeClass("active");
            $('.header-nav').animate({height: 0},300);
            setTimeout(function(){
                $('.header-nav').removeClass("active");
                $('.header').removeClass("menu-active");
            },300);
        } else {
            $(this).addClass("active");
            $('.header-nav').addClass("active");
            $('.header').addClass("menu-active");
            $('.header-nav').animate({height: 260},300);
        }
    });

    $(window).scroll(function(){
        var st = $(this).scrollTop();
        if ( $(window).width() > 768 ) {
            if ( st > 117 ) {
                Add();
            } else {
                Remove();
            }
        } else {
            if ( st > 0 ) {
                Add();
            } else {
                Remove();
            }
        }
    });

    $(window).resize(function(){
        if ( $(this).width() > 768 ) {
            $('.header-nav').height('auto');
        } else {
            if ( $('.mobile-btn').hasClass("active") ) {
                $('.header-nav').height(260);
            } else {
                $('.header-nav').height(0);
            }
        }
    });

});