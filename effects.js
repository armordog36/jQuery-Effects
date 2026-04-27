$(document).ready(function () {

  // Hide the newsletter form when the page loads
  $("#newsSignup").hide();

  // Animate the rose when the page loads
  $("#rose").animate(
    {
      right: "100px",
      opacity: 1
    },
    "slow",
    "swing"
  );

  // Show and hide the newsletter form
  $("#signuplink").click(function (event) {
    $("#newsSignup").slideToggle();

    if ($("#openclose").text() === "+") {
      $("#openclose").text("-");
    } else {
      $("#openclose").text("+");
    }

    event.preventDefault();
  });

  // Change slogan on hover
  $("#slogan").hover(
    function () {
      $(this).fadeOut("normal", "linear", function () {
        $(this).text("Hand Picked Just for You").fadeIn("slow", "swing");
      });
    },
    function () {
      $(this).fadeOut("fast", "swing", function () {
        $(this).text("The Power of Flowers").fadeIn("slow", "linear");
      });
    }
  );

  // Stop form submission and show alert
  $("#newsSignup").submit(function (event) {
    alert("Thank you for registering");

    $("#newsSignup").hide();
    $("#signuplink").fadeTo("slow", 0.3);

    event.preventDefault();
  });

});