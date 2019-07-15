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
    },
    {
        question: "What is love?",
        answers: ["Creative Style Sheets", "Cascading Style Sheets", "Counting Style Sheets", "Computer Style Sheets"],
        correctAnswer: 1
    }
]

var state = {
    currentQ: 0,
    userGuess: null,
    TimeRemaining: 10,
 };

$("#submit").hide();
$("#restart").hide();
$(".area").hide();

$("#start").on("click", function() {
    setInterval(setTimeRemaining,1000);
    displayQ();
    $(".area").show();
    $("#submit").show();
});


function setTimeRemaining(){
    state.TimeRemaining--;
    $("#timeleft").text(state.TimeRemaining + " seconds left!");
  
    if(state.TimeRemaining == 0){
        alert("Time's up!");
        state.currentQ++;
        displayQ();
        
    }
}

function resetTime(){
    state.TimeRemaining = 10;
    $("#timeleft").text(state.TimeRemaining + " seconds left!");
}


 function displayQ() {
    resetTime();
    $("#start").hide();
    $("#restart-button").hide();
    $(".area").show();
    $("#timeout").empty();
    $("#correct-answer").empty();
    var q = questions[state.currentQ];
    $("#question").text(q.question);
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

        else{
            $("#correct-answer").text("Incorrect! The correct answer is: " + q.answers[q.correctAnswer]);
            $(".area").hide();
            state.TimeRemaining = 10;
            $("#timeleft").hide();
            setTimeout(displayQ, 3*1000);
            $("#timeout").text("Next question will appear in 3 seconds.");
            state.currentQ++;
            setTimeRemaining();
        }

        
    });
    
 }

 







