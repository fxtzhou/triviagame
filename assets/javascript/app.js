var input = null;

var questions = [
    {
        question: "What does HTML stand for?",
        answers: ["Hypertext Markup Language", "Home Type Markup Language", "Height-Text Markup Language", "High Text Markup Language"],
        correctAnswer: 0
    },
    {
        question: "What is CSS?",
        answers: ["Creative Style Sheets", "Cascading Style Sheets", "Counting Style Sheets", "Computer Style Sheets"],
        correctAnswer: 1
    }
]

var state = {
    currentQ: 0,
    userGuess: null,
    timeRemaining: 10,
    
 };

$("#submit").hide();
$("#restart").hide();

$("#start").on("click", function() {
    $("#submit").show();
    //  Set the button alert's timeout to run three seconds after the function's called.
    startGame = setTimeout(function() {  
 
// game starts after 'start' button is clicked
 function displayQ() {
     $("#start").hide();
    $("#restart-button").hide();
    var q = questions[state.currentQ];
    $("#question").text(q.question);
    $("#timeleft").text(state.timeRemaining + " seconds left!"); //setRemainingTime();
    $("#answers").empty();
    for (var i = 0; i < q.answers.length; i++){
        var answer = $('<h3 data-position="$(i)">');
        answer.data("position", i);
        answer.addClass("answer");
        answer.appendTo("#answers");
        answer.text(q.answers[i]);
 
    }
    $(".answer").on("click", function(){
        input = $(this).data("position"); 
        console.log (input);
    });

    $("#submit").on("click", function(){
        if (input == questions[state.currentQ].correctAnswer) {
            console.log("nice");
            state.currentQ++;
            displayQ();
        }
    });
 }

 displayQ();

})

});


