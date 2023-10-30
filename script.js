// Change background color
function changeColor() {
    var colors = ['#C90202', '#02C902', '#0101CA', '#C4C401', '#00D1D1'];
    var colorIndex = Math.floor (Math.random() * colors.length);
    document.body.style.backgroundColor = colors[colorIndex];
    console.log(changeColor)
}

const api_url ="https://zenquotes.io/api/today";

async function getapi(url)
{
    const response = await fetch(url);
    var data = await response.json();
    return data;
}

async function updateQuote() {
    const quotes = await getapi(api_url);
    console.log(quotes);
    document.getElementById('quote').innerHTML = quotes[0].text;
}
