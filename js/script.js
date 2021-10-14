$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots: true,
        appendArrows:$('.arrows'),
        appendDots:$('.arrows'),
        //adaptiveHeight:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        speed: 1000,
        touchThreshold: 10,
        //waitForAnimate: false,
        veriableWidth:true,
    });
});