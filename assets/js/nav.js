$(document).ready(function(){
    $('.nav-container .burger-button').on('click', function(){
        $(this).toggleClass('active');
        $('.main-nav').toggleClass('active');
        $('.overlay').toggleClass('active');
        $('.recipe-details .close-button').toggleClass('none');
        $('.recipe-details .pagination-wrapper').toggleClass('none');
    });
});
