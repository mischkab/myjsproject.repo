const quoteText = document.querySelector(".quote"),
quoteButton = document.querySelector("button");

function randomProgrammerQuote() {
  fetch('https://programming-quotes-api.herokuapp.com/quotes/random').then(resp => resp.json()).then(result =>{
    quoteText.innerText = result.en;
  })
};

quoteButton.addEventListener("click", randomProgrammerQuote);