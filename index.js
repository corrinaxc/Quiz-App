const answer = document.querySelector('[data-js="answer"]');
const answerButton = document.querySelector('[data-js="answer-button"]');
const bookmark = document.querySelector('[data-js="bookmark"]');



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
    answerButton.textContent = "Hide Answer";
    }
    else {
    hideAnswer();
    answerButton.textContent = "Show Answer";
    }
})

bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("fa-solid");
})



