$('.header-right>a').click(function () {
    $('.hamburger-menu').show();
    $('.hamburger-menu a').mouseenter(function(){
        $(this).css("color","green");  
    });
    $('.hamburger-menu a').mouseleave(function(){
        $(this).css("color","");  
    });
});
$('.hamburger-menu>a').click(function () {
    $('.hamburger-menu').hide();
});

// // ALTRA MODALITA' 

// $('.header-right>a').click(function () {
//     $('.hamburger-menu').fadeIn(1000);
        // $('.hamburger-menu a').mouseenter(function(){
        // $(this).css("color","green");  
        // });
        // $('.hamburger-menu a').mouseleave(function(){
        // $(this).css("color","");  
        // });
// });
// $('.hamburger-menu>a').click(function () {
//     $('.hamburger-menu').fadeOut(1200);
// });