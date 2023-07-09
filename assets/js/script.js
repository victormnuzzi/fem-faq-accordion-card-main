let selectedNumber;
let questionCounter;
function selectedQuestion(number) {
    if (selectedNumber == undefined) {
        document.getElementById(`question${number}`).style.fontWeight = "700";
        document.getElementById(`answer${number}`).style.display = "block";
        selectedNumber = number;
        questionCounter = 0;
    } else if (selectedNumber == number && questionCounter == 0) {
        document.getElementById(`question${selectedNumber}`).style.fontWeight = "400";
        document.getElementById(`answer${selectedNumber}`).style.display = "none";
        selectedNumber = number;
        questionCounter = 1;
    } else {
        document.getElementById(`question${selectedNumber}`).style.fontWeight = "400";
        document.getElementById(`answer${selectedNumber}`).style.display = "none";
        document.getElementById(`question${number}`).style.fontWeight = "700";
        document.getElementById(`answer${number}`).style.display = "block";
        selectedNumber = number;
        questionCounter = 0;
    }
}

