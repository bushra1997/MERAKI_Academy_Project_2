$(document).ready(() => {
  $(window).scroll(() => {
    $("nav").toggleClass("scrolled", $(this).scrollTop() > 100);
  });

  $("#btn-more").on("click", () => {
    $(".more").fadeIn(), $("#btn-more").fadeOut();
  });

  $("#btn-more-articles").on("click", () => {
    $("#btn-more-articles").fadeOut();
  });
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
  $("#search").on("click", () => {
    array.forEach((element, index) => {
      if ($(".form-control").val().toLowerCase() === element.toLowerCase()) {
      } else {
      }
    });
  });

  $("#subscribe").on("click", () => {
    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let userValidation = /^[a-zA-Z\u0600-\u06FF,-][\sa-zA-Z\u0600-\u06FF,-]*$/;
    let emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (name === "") {
      $(".name-span").text("Please enter your name !");
    } else {
      if (name.match(userValidation)) {
        $(".name-span").text("");
      } else {
        $(".name-span").text("Username is not valid !");
      }
    }
    if (email === "") {
      $(".email-span").text("Please enter your email !");
    } else {
      if (email.match(emailValidation)) {
        $(".email-span").text("");
      } else {
        $(".email-span").text("Email is not valid !");
      }
    }
  });
});
