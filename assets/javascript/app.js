$(document).ready(function(){
    var counter = 16
    var correct = 0;
    var incorrect = 0;
    var questions = [
        {question: 'How many Earths could fit inside the sun?', answers: ['1.3 Million'], wrongAnswers: ['3', '1,300']},
        {question: 'How many of the speeches in Shakespeares plays are recited by women?', answers: ['17 percent'], wrongAnswers: ['33 percent', '52 percent']},
        {question: 'In which country was the largest-known Tyrannosaurus rex skeleton found?', answers: ['Canada'], wrongAnswers: ['New Zealand', 'The United States']}
    ]
    var questionOutput = $("#questions")
    var random = Math.floor(Math.random() * questions.length)
    var randomQuestion = questions[random].question
    var answers = questions[random].answers
    var wrongAnswers = questions[random].wrongAnswers
    var timer = $("#timer")
    var startButton = $("#start-button")
    var buttons = $("#buttons")
    console.log(random)
    console.log(randomQuestion)
    console.log(answers.length)
    
    startButton.on("click", function(){
        setInterval(timeIt, 1000);
        function timeIt(){
            counter--;
            timer.text(`Timer: ${counter} seconds remaining`)
            if (counter === 0){
                alert('you lose!')
                counter = 16;
            }
        }
        $(".trivia-header").html("")
        $("#start-button").remove()
        questionOutput.text(randomQuestion)
        renderButtons()
        renderWrongAnswers()
    });

    
    function renderButtons(){
        $("#buttons").empty()
        for (var i = 0; i < answers.length; i++){
        var button = $("<button>")
        button.addClass("yo")
        button.text(answers[i])
        button.attr("correct-answer", answers[i])
        buttons.append(button)
        }
    }

    function renderWrongAnswers(){
        for (var i = 0; i < wrongAnswers.length; i ++){
            var button = $("<button>")
            button.addClass("yo")
            button.text(wrongAnswers[i])
            button.attr("wrong-answer", wrongAnswers[i])
            buttons.append(button)
        }
    }

    $(document).on("click", ".yo", function(){
        if ($(this).attr("correct-answer")){
            correct++
            alert(`Correct! Number of questions correctly guessed: ${correct}`)
        }else{
            incorrect++
            alert(`Wrong! Number of incorrect guesses: ${incorrect}`)
        }
        
    });
    
});