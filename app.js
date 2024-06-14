
var buttonColours = ["red","green","blue","yellow"];
var gamePattern = new Array();




function nextSequence() {
    let randomNumber = Math.floor(Math.random()*3);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" +randomChosenColour + ".mp3");
    audio.play();
    
}

nextSequence();
$(".button").click(function() {
    var userChosenColour = $("#");
    console.log(userChosenColour);
});


