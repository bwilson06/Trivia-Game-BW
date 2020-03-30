$(document).ready(function(){
    var counter = 16
    var total = 0;
    var nextQuestion = 0;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var questions = [
        {question: 'How many Earths could fit inside the sun?', answers: ['1.3 Million'], wrongAnswers: ['3', '1,300']},
        {question: 'How many of the speeches in Shakespeares plays are recited by women?', answers: ['17 percent'], wrongAnswers: ['33 percent', '52 percent']},
        {question: 'In which country was the largest-known Tyrannosaurus rex skeleton found?', answers: ['Canada'], wrongAnswers: ['New Zealand', 'The United States']},
        {question: 'In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?', answers: ['John and Mary'], wrongAnswers: ['Willam and Elizabeth', 'George and Anne']},
        {question: 'Which of the following items was owned by the fewest U.S. homes in 1990?', answers: ['Compact Disk Player'], wrongAnswers: ['Home Computer', 'Cordless Phone']}
    ]
    var questionOutput = $("#questions")
    var random = Math.floor(Math.random() * questions.length)
    var randomAppend = Math.floor(Math.random() * 4)
    var randomQuestion = questions[0].question
    var answers = questions[0].answers
    var wrongAnswers = questions[0].wrongAnswers
    var timer = $("#timer")
    var startButton = $("#start-button")
    var buttons = $("#buttons")
    var unansweredResults = $("#unanswered")
    var incorrectResults = $("#incorrect")
    

    function resultPage(){
        buttons.html("")
        questionOutput.text("Correct: " + correct)
        incorrectResults.text("Incorrect: " + incorrect)
        unansweredResults.text("Unanswered: " + unanswered)
    }

   
    
    startButton.on("click", function(){
        setInterval(timeIt, 1000);
        function timeIt(){
            counter--;
            if (total < 5){
            timer.text(`Timer: ${counter} seconds remaining`)
            }else{
                timer.text("RESULTS")
                resultPage()
            }
            if (counter <= 0){
                total++
                nextQuestion ++
                unanswered ++
                reset()
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

    function reset(){
        counter = 16;
        randomQuestion = questions[nextQuestion].question
        questionOutput.text(randomQuestion)
        answers = questions[nextQuestion].answers
        wrongAnswers = questions[nextQuestion].wrongAnswers
        renderButtons()
        renderWrongAnswers()
    }

    $(document).on("click", ".yo", function(){
        if ($(this).attr("correct-answer")){
            total++
            correct++
            nextQuestion++
            alert(`Correct! Number of questions correctly guessed: ${correct}`)
            if (total < 5){
            reset()
            }
        }else{
            total++
            incorrect++
            nextQuestion++
            alert(`Wrong! Number of incorrect guesses: ${incorrect}`)
            if (total < 5){
            reset()
            }
        }

        if (total === 5){
            resultPage()
        } 

        
        
    });
    
});