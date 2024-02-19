const answer = document.querySelector('[data-js="answer"]');
const answerButton = document.querySelector('[data-js="answer-button"]')

function hideAnswer() {
    answer.setAttribute("hidden", "");
}

function showAnswer() {
    answer.removeAttribute("hidden");
}

hideAnswer();

answerButton.addEventListener("click", () => {
    if (answer.hidden === true) {
    showAnswer();
    }
    else {
    hideAnswer();
    }
})
