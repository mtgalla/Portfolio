//Array for facts
var mgFacts = [
  "Full-Stack Developer",
  "Web Developer",
  "Product Owner",
];
//Function to animate facts
function factAnimate() {
  const animateFacts = $('.animate-word');
  animateFacts.addClass('animated fadeInRight slow');
}
//This setTimeout runs the facts function
//Method used to avoid factAnimate functions running unnecessarily found here: "https://stackoverflow.com/questions/17970734/how-to-call-window-load-event-on-specific-page"
if (window.location.href.match("/index.html") != null) {
  setTimeout(facts, 1000);
} else {
  clearTimeout(facts);
}
//facts function which dynamically shows each item from oeFacts array one at a time in a p tag with a delay timer
function facts() {
  setTimeout(function () {
    $(".facts").html("<p class=animate-word>" + mgFacts[0]);
    factAnimate();
  }, 2000);
  setTimeout(function () {
    $(".facts").html("<p class=animate-word>" + mgFacts[1]);
    factAnimate();
  }, 8000);
  setTimeout(function () {
    $(".facts").html("<p class=animate-word>" + mgFacts[2]);
    factAnimate()
  }, 14000);
  setTimeout(facts, 20000);
}


$('a[href="' + window.location.href + '"]').addClass('active');