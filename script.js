// Change background color
function changeColor() {
    var colors = ['#C90202', '#02C902', '#0101CA', '#C4C401', '#00D1D1'];
    var colorIndex = Math.floor (Math.random() * colors.length);
    document.body.style.backgroundColor = colors[colorIndex];
    console.log(changeColor)
}

const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const btn = document.querySelector("#btn");

btn.addEventListener("click", getQuote);

function getQuote() {
    fetch("https://quotable.io/random")
    .then(res => console.log(res))
}

/*

// First attempt at creating a fetch API to get the quotes

const api_url ="https://quotable.io/random";

async function getapi(url)
{
    const response = await fetch(url);
    var data = await response.json();
    return data;
}

async function updateQuote() {
    const quotes = await getapi(api_url);
    console.log(quotes);

    var container = document.getElementById('quote');

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (var i = 0; i < quotes.length; i++) {
        var div = document.createElement('div');
        div.textContent = quotes[i].q + ' - ' + quotes[i].a;
        container.appendChild(div);
    }
}

updateQuote();

*/