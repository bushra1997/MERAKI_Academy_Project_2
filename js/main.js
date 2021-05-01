$(window).scroll(() => {
    $("nav").toggleClass("scrolled", $(this).scrollTop() > 100);
});

$('#btn-more').on('click', () => {
    $('.more').show(2500);
    $('#btn-more').hide(1000);
})