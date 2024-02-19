const form = document.querySelector('[data-js="generate-question-form"]');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const question = data["your-question"];
    const answer = data["your-answer"];
    const tag1 = data["your-tags"];

    console.log(question);

    const newQuestion = document.createElement("section");

    newQuestion.innerHTML = `
    <section class="question-card" data-js="question-card">
    <p class="question">${question}</p>
    <button class="answer.button" data-js="answer-button">Show Answer</button>
    <div id="answer" data-js="answer">${answer}</div>
    <i class="fa-regular fa-bookmark fa-2xl" style="color: #eeb1d5;" data-js="bookmark"></i>
    <ul class="tags">
        <li class="individal-tag">${tag1}</li>
    </ul>
    </section>`

    document.body.append(newQuestion);
});

