if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(serviceWorker => {
      console.log("Service Worker registered: ", serviceWorker);
    })
    .catch(error => {
      console.error("Error registering the Service Worker: ", error);
    });
}

$(document).ready(function () {
  // Add smooth scrolling to all links with the class scroll
  $("a.scroll").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });

  $(window).resize(function () {
    // This will execute whenever the window is resized
    $(window).height(); // New height

    if ($(window).width() < 768) {
      $("#heroImg").addClass("img-fluid");
      $("#job").addClass("mx-auto");
      $("#job h2.display-3").addClass("text-center");
      $(".abstract").addClass("d-none");

      $("footer .row.no-gutters.mx-auto.px-5.pt-3.mt-3").addClass("w-100");

      $(".tinted-image").css({ backgroundAttachment: "unset" });
    } else {
      $("#heroImg").removeClass("img-fluid");
      $("footer .row.no-gutters.mx-auto.px-5.pt-3.mt-3")
        .addClass("w-25")
        .removeClass("w-100");
      $("#job").removeClass("mx-auto");
      $("#job h2.display-3").removeClass("text-center");
      $(".abstract").removeClass("d-none");
      $(".tinted-image").css({ backgroundAttachment: "fixed" });
    }
  });

  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    // if (scroll > 300) {
      $("nav").css({
        backgroundColor: "#5535de"
      });
      $(".nav-link").css({
        color: "#fff"
      });
    // } else {
      // $("nav").css({
      //   backgroundColor: "#f8f9fe"
      // });
      // $(".nav-link").css({
      //   color: "inherit"
      // });
    // }
  });
});
