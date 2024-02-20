const darkMode = document.querySelector('[data-js="dark-mode"]');
const body = document.querySelector('[data-js="body"]'); 
const profile = document.querySelector('[data-js="profile"]')
const heading = document.querySelector('[data-js="app-title"]');
const title = document.querySelector('[data-js="title"]');
const footer = document.querySelector('[data-js="nav-footer"]');
const homeButton = document.querySelector('[data-js="home-button"]');
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const formButton = document.querySelector('[data-js="form-button"]');
const profileButton = document.querySelector('[data-js="profile-button"]');
const darkModeTitle = document.querySelector('[data-js="dark-mode-title"]');

darkMode.addEventListener("input", (event) => {
    if (event.target.checked) {
        body.style.backgroundColor = "#4a4e69";
        profile.style.color = "#eeb1d5";
        heading.style.backgroundColor = "#eeb1d5";
        footer.style.backgroundColor = "#eeb1d5";
        homeButton.classList.add("profile-dark-mode");
        bookmarkButton.classList.add("profile-dark-mode");
        formButton.classList.add("profile-dark-mode");
        profileButton.classList.add("profile-dark-mode");
        darkModeTitle.style.color = "#eeb1d5";
    } else {
        body.style.backgroundColor = "";
        profile.style.color = "";
        heading.style.backgroundColor = ""
        footer.style.backgroundColor = ""
        homeButton.style.color = "#eeb1d5";
        bookmarkButton.style.color = "#eeb1d5";
        formButton.style.color = "#eeb1d5";
        profileButton.style.color = "#eeb1d5";
        darkModeTitle.style.color = ""
    }
});