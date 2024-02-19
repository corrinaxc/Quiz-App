const form = document.querySelector('[data-js="generate-question-form"]');
const body = document.querySelector('[data-js="body"]');
const characterCountQuestion = document.querySelector('[data-js="character-count-question"]');
const characterCountAnswer = document.querySelector('[data-js="character-count-answer"]');
const question = document.querySelector('[data-js="your-question"]');
const answer = document.querySelector('[data-js="your-answer"]');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const tags = data.yourtags.split(" ");
    const tag1 = tags[0];
    const tag2 = tags[1];
    const tag3 = tags[2];

    const question = data["your-question"];
    const answer = data["your-answer"];

    const questionCard = document.createElement("section");
    const questionElement = document.createElement("p");
    const answerButton = document.createElement("button");
    const answerElement = document.createElement("div");
    const bookmark = document.createElement("i");
    const tagsElement = document.createElement("ul");
    const tag1Element = document.createElement("li");
    const tag2Element = document.createElement("li");
    const tag3Element = document.createElement("li");

    body.append(questionCard);
    questionCard.append(questionElement);
    questionCard.append(answerElement);
    questionCard.append(answerButton);
    questionCard.append(bookmark);
    questionCard.append(tagsElement);
    tagsElement.append(tag1Element);
    tagsElement.append(tag2Element);
    tagsElement.append(tag3Element);

    questionElement.textContent = question;
    answerElement.textContent = answer;
    tag1Element.textContent = tag1;
    tag2Element.textContent = tag2;
    tag3Element.textContent = tag3;

    questionCard.classList.add("question-card");
    questionElement.classList.add("question");
    answerButton.classList.add("button");
    bookmark.classList.add("fa-regular", "fa-bookmark", "fa-2xl");
    bookmark.style.color = "#eeb1d5";
    tagsElement.classList.add("ul");
    tag1Element.classList.add("li");
    tag2Element.classList.add("li");
    tag3Element.classList.add("li");
});

question.addEventListener("input", () => {
    const length = question.value.length;
    const charCount = (150-length);
    characterCountQuestion.textContent = `${charCount} characters remaining`
})

answer.addEventListener("input", () => {
    const length = answer.value.length;
    const charCount = (150-length);
    characterCountAnswer.textContent = `${charCount} characters remaining`


})

/*    <main>
      <section class="question-card" id="qc-1" data-js="question-card">
        <p class="question">1. How many times are Mexican refried beans fried?</p>
        <button class="answer.button" data-js="answer-button">Show Answer</button>
        <div id="answer" data-js="answer">Once</div>
        <i class="fa-regular fa-bookmark fa-2xl" style="color: #eeb1d5;" data-js="bookmark"></i>
        <ul class="tags">
              <li class="individal-tag">#category</li>
              <li class="individal-tag">#category</li>
              <li class="individal-tag">#category</li>
        </ul>
      </section>

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data.yourtags);
    const tags = data.yourtags.split(" ");
    const tag1 = tags[0];
    const tag2 = tags[1];
    const tag3 = tags[2];
    console.log(tag1, tag2, tag3);

    const question = data["your-question"];
    const answer = data["your-answer"];

    const newQuestion = document.createElement("section");

    newQuestion.innerHTML = `
    <section class="question-card" data-js="question-card">
    <p class="question">${question}</p>
    <button class="answer.button" data-js="answer-button">Show Answer</button>
    <div id="answer" data-js="answer">${answer}</div>
    <i class="fa-regular fa-bookmark fa-2xl" style="color: #eeb1d5;" data-js="bookmark"></i>
    <ul class="tags">
        <li class="individal-tag">${tag1}</li>
        <li class="individal-tag">${tag2}</li>
        <li class="individal-tag">${tag3}</li>
    </ul>
    </section>`

    document.body.append(newQuestion);
});

function countChar(val) {
    const len = val.value.length;
      $('#charNum').text(800 - len);
    }


 */

