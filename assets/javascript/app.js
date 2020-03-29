$(document).ready(function(){
    var counter = 16
    var timer = $("#timer")
    var startButton = $("#start-button")

    startButton.on("click", function(){
        setInterval(timeIt, 1000);
        function timeIt(){
            counter--;
            timer.text(`Timer: ${counter} seconds remaining`)
        }
        alert('YOOOO')
        $(".trivia-header").html("")
        $("#start-button").remove()
        
        
        });

    

    
});