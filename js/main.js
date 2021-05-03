$(document).ready(() => {
  $(window).scroll(() => {
    $("nav").toggleClass("scrolled", $(this).scrollTop() > 100);
  });

  $("#btn-more").on("click", () => {
    $(".more").fadeIn(), $("#btn-more").fadeOut();
  });

  $('#btn-more-articles').on('click', () => {
    $('#btn-more-articles').fadeOut();
  })
  $(window).scroll(() => {
    if ($(this).scrollTop() > 780) {
      $("#up-button").fadeIn();
    } else {
      $("#up-button").fadeOut();
    }
  });
  $("#up-button").on("click", () => {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });

//   for search bar
  let array = [
    "Cheesecake",
    "Strawberry",
    "Vanilla",
    "Cake",
    "Chocolate",
    "Raspberry",
    "Lemonade",
    "Smoothie",
    "Blueberry",
    "Muffin",
  ];
  $('#search').on('click',() => {
    array.forEach((element, index) =>{
        if ($('.form-control').val().toLowerCase() === element.toLowerCase()){
    
        }else{
    
        }
      })
  })
});
