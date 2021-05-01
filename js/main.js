$(window).scroll(() => {
    $("nav").toggleClass("scrolled", $(this).scrollTop() > 100);
});

$('#btn-more').on('click', () => {
    $('.more').show();
})