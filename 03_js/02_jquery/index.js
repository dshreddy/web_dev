// $ can be used to select any element

// Manipulating styles
$("h1").addClass("big-title margin");
// $("h1").removeClass("big-title");

//Manipulating text
$("h1").text("Bye");
$("button").text("Don't click me");
$("button").html("<em>Hey</em>");

//Manipulating Attributes
console.log($("a").attr("href"));
$("a").attr("href","https://youtube.com");
$("a").attr("class"); //prints all classes used by current tag

//Eveent Listeners using jQuery
$("#b1").click(function() {
    $("h1").css("color","purple");
});
$("#b2").click(function() {
    $("h1").css("color","black");
});
$("body").keypress(function (event) {
    console.log(event.key);
});

//Animations
$("#b3").click(function() {
    // $("h1").toggle();
    // $("h1").fadeOut();
    // $("h1").slideUp();
});
$("#b4").click(function() {
    // $("h1").toggle();
    // $("h1").fadeIn();
    // $("h1").slideDown();
    // $("h1").fadeToggle();
    $("h1").animate({opacity:0.5});
});