// Change background color
function changeColor() {
    var colors = ['#C90202', '#02C902', '#0101CA', '#C4C401', '#00D1D1'];
    var colorIndex = Math.floor (Math.random() * colors.length);
    document.body.style.backgroundColor = colors[colorIndex];
    console.log(changeColor)
}

const api_url ="https://zenquotes.io/api/quotes/";

async function getapi(url)
{
    const response = await fetch(url);
    var data = await response.json();
    return data;
}

async function updateQuote() {
    const quotes = await getapi(api_url);
    console.log(quotes);

    // Get a reference to the HTML element where you want to display the quotes
    var container = document.getElementById('quote');

    // Remove all existing children of the container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Iterate over the quotes
    for (var i = 0; i < quotes.length; i++) {
        // Create a new div element for each quote
        var div = document.createElement('div');

        // Set the text of the div to the quote text and author
        div.textContent = quotes[i].q + ' - ' + quotes[i].a;

        // Append the div to the container
        container.appendChild(div);
    }
}

updateQuote();
