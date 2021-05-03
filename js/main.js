$(document).ready(()=>{
    $(window).scroll(() => {
        $("nav").toggleClass("scrolled", $(this).scrollTop() > 100);
    });
      
    $("#btn-more").on("click", () => {
    $(".more").fadeIn(),
    $("#btn-more").fadeOut();
    });
      
    $(window).scroll(() => {
    if ($(this).scrollTop()>780){
        $('#up-button').fadeIn()
        }else{
        $('#up-button').fadeOut()   
        }
    });
    $('#up-button').on('click', () => {
        $("html, body").animate({
            scrollTop: 0,
        }, 1500);
    })
})