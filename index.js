// Toogle Button

const bookmarkButton = document.querySelector('[data-js="bookmark_button"]');

// probieren ob js richtig eingebunden ist: console.log("probieren");

bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("bookmark--active");
});

// Answer Button 1.1 (zeig mir die Antwort)

const answer = document.querySelector('[data-js="answer"]');
const showAnswerButton = document.querySelector('[data-js="showAnswerButton"]');

// probieren ob data-js richtig eingebunden ist console.log("hello");

// funktioniert auch: showAnswerButton.addEventListener("click", () => {
//answer.classList.toggle("card__answer--active");

showAnswerButton.addEventListener("click", () => {
   if (answer.style.display === 'none') {
    answer.style.display = 'block';
   } else {
answer.style.display = 'none';
   }
});
 
// Answer Button 1.2 (ändere den Text "show answer" zu "hode answer")

const hideShowSwitchButton = document.querySelector('[data-js="showAnswerButton"]');

hideShowSwitchButton.addEventListener("click", (event) => {
  const currentButton = event.currentTarget;
  const currentText = currentButton.textContent;

  if (currentText === 'Show Answer') {
    currentButton.textContent = 'Hide Answer';
  } else {
    currentButton.textContent = 'Show Answer';
  }
});
  
 