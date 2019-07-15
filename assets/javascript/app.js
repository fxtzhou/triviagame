var input = null;

var questions = [
    {
        question: "What's the name of the planet that Rey was abandoned on?",
        answers: ["Tatooine", "Jakku", "Mustafar", "Coruscant"],
        correctAnswer: 1
    },
    {
        question: "What is Kylo Ren's real name?",
        answers: ["Ben Skywalker", "Ren Skywalker", "Ben Solo", "Ren Organa"],
        correctAnswer: 2
    },
    {
        question: "Which order put an end to all Jedi?",
        answers: ["Order 69", "Order 42", "Order 66", "First Order"],
        correctAnswer: 2
    },
    {
        question: "What day is Star Wars Day celebrated?",
        answers: ["April 20", "May 4", "August 2", "July 5"],
        correctAnswer: 1
    },
    {
        question: "Who is NOT a Sithlord?",
        answers: ["Darth Maul", "Darth Vader", "Palpatine", "Darth Bane"],
        correctAnswer: 0
    }
];

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
        alert("Time's up! You're lucky they want you alive. Next question.");
        state.currentQ++;
        displayQ();
        
    }
}

function resetTime(){

    state.TimeRemaining = 10;
    $("#timeleft").show();
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
    console.log(state.currentQ);
    
    
 }

 $("#submit").on("click", function(){
    if (input == questions[state.currentQ].correctAnswer) {
        $("#correct-answer").text("You are correct! Power! Unlimited Power!");
        console.log("nice");
        $(".area").hide();

        $("#timeleft").hide();
        $("#timeout").text("Next question will appear in 3 seconds.");
        
       
    }

    else{
        $("#correct-answer").text("Your overconfidence is your weakness. The correct answer is: " + questions[state.currentQ].answers[questions[state.currentQ].correctAnswer]);
        console.log("soemthing");
        $(".area").hide();

        $("#timeleft").hide();
        $("#timeout").text("Next question will appear in 3 seconds.");
        
        
    }
    setTimeout(displayQ, 3*1000);
    state.currentQ++;
    
});
 







