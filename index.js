// Toogle Button

const bookmarkButton = document.querySelector('[data-js="bookmark_button"]');

// probieren ob js richtig eingebunden ist: console.log("probieren");

bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("bookmark--active");
});

// Answer Button 1.1 (zeig mir die Antwort) + Answer Button 1.2 (ändere den Text "show answer" zu "hide answer")

const answer = document.querySelector('[data-js="answer"]');
const showAnswerButton = document.querySelector('[data-js="showAnswerButton"]');

showAnswerButton.addEventListener("click", () => {
    answer.classList.toggle("hidden");

    if (showAnswerButton.textContent === "Hide Answer") {
    showAnswerButton.textContent = "Show Answer";
  } else {
    showAnswerButton.textContent = "Hide Answer";
  }
    //console.log("bisasam");
}); 
