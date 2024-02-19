const answer = document.querySelector('[data-js="answer"]');
const answerButton = document.querySelector('[data-js="answer-button"]');
const bookmark = document.querySelector('[data-js="bookmark"]');
const homeButton = document.querySelector('[data-js="home-button"]');
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const formButton = document.querySelector('[data-js="form-button"]');
const profileButton = document.querySelector('[data-js="profile-button"]');


function hideAnswer() {
    answer.setAttribute("hidden", "");
}

function showAnswer() {
    answer.removeAttribute("hidden");
}

////function clearBookmark {

//}

hideAnswer();

answerButton.addEventListener("click", () => {
    if (answer.hidden === true) {
    showAnswer();
    }
    else {
    hideAnswer();
    }
})

bookmark.addEventListener("click", () => {
    if (bookmark.class = ("fa-regular")) {
        bookmark.classList.add("fa-solid");
    } else {
    bookmark.classList.remove("fa-solid");
    bookmark.classList.add("fa-regular");
    }
})
