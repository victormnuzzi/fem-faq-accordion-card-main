let previousNumber;
let questionCounter;
function selectedQuestion(actualNumber) {
    const actualQuestion = document.getElementById(`question${actualNumber}`);
    const actualAnswer = document.getElementById(`answer${actualNumber}`);
    const actualArrow = document.getElementById(`arrow-icon${actualNumber}`);
    const previousQuestion = document.getElementById(`question${previousNumber}`);
    const previousAnswer = document.getElementById(`answer${previousNumber}`);
    const previousArrow = document.getElementById(`arrow-icon${previousNumber}`);

    if (previousNumber == undefined) {
        actualQuestion.style.fontWeight = "700";
        actualAnswer.style.display = "block";
        actualArrow.style.transform = "rotate(180deg)";
        
        previousNumber = actualNumber;
        questionCounter = 0;

    } else if (previousNumber == actualNumber && questionCounter == 0) {
        previousQuestion.style.fontWeight = "400";
        previousAnswer.style.display = "none";
        previousArrow.style.transform = "rotate(0deg)";
        
        previousNumber = actualNumber;
        questionCounter = 1;
        
    } else {
        previousQuestion.style.fontWeight = "400";
        previousAnswer.style.display = "none";
        previousArrow.style.transform = "rotate(0deg)";
        
        actualQuestion.style.fontWeight = "700";
        actualAnswer.style.display = "block";
        actualArrow.style.transform = "rotate(180deg)";
        
        previousNumber = actualNumber;
        questionCounter = 0;
    }
}

