// Change background color
function changeColor() {
    var colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF'];
    var colorIndex = Math.floor (Math.random() * colors.length);
    document.body.style.backgroundColor = colors[colorIndex];
}

const api_url ="https://zenquotes.io/api/quotes/";

async function getapi(url)
{
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
}

getapi(api_url); 