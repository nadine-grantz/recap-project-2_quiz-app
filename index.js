const bookmarkButton = document.querySelector('[data-js="bookmark_button"]');

// probieren ob js richtig eingebunden ist: console.log("probieren");

bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("bookmark--active");
});