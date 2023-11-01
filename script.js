// Change background color
function changeColor() {
    var colors = ['#C90202', '#02C902', '#0101CA', '#C4C401', '#00D1D1'];
    var colorIndex = Math.floor (Math.random() * colors.length);
    document.body.style.backgroundColor = colors[colorIndex];
    console.log(changeColor)
}

//Defining the html elements as variables
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const btn = document.querySelector("#btn");

//Event listener for a click on the button, which grabs the function getQuote
btn.addEventListener("click", getQuote);

//Fetches the data from the URL, turns the data into a JSON format. Puts the content data into Quotes and Author data into Author
function getQuote() {
    fetch("https://quotable.io/random")
    .then(res => res.json())
    .then(data => {
        quote.innerHTML = `"${data.content}"`;
        author.innerHTML = data.author;
    })
}
