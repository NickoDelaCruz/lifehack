function Hacks (hack,instructions) {
  this.firstHack = hack;
  this.lastInstructions = instructions;
}

$(document).ready(function() {
  $("form#life-hack").submit(function(event) {
  event.preventDefault();

  var inputtedFirstHack = $("input#new-hack").val();
  var inputtedLastInstructions = $("input#new-information").val();

  var newHacker = new Hacks(inputtedFirstHack, inputtedLastInstructions);

  $("ul#hacks").append("<li><span class='contact'>" + newHacker.firstHack + "</span></li>");

  $(".contact").last().click(function() {
    $("#show-hacks").show();
    //$("#show-hacks h2").text(newHacker.firstHack);USELESS
    $(".first-hack").text(newHacker.firstHack);
    $(".first-instructions").text(newHacker.lastInstructions);
  });

$("input#new-hack").val("");
$("input#new-information").val("");
});
});
