$(function(){
    $('.partner img').click(function(){
        $('#modal').addClass('active');
    });
    $('#modal button').click(function(){
        $('#modal').removeClass('active');
    });
});