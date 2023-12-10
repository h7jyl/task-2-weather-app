// variables
let cityInput = document.querySelector('#city-input');
let btn = document.querySelector('#addCity');
let cityOutput = document.querySelector('#city-output');
let desc = document.querySelector('#desc');
let temp = document.querySelector('#temp');
let wind = document.querySelector('#wind');
let cntry = document.querySelector('#country')

// this is the api key
const apiKey = "5215ef6a1af1a2d55eb06507c0da386a";

// function to convert fahrenheit to celsius
const fToC = (f) => {
    return (f - 273).toFixed(2);
}


// when btn is clicked, api will be called
btn.addEventListener('click', function () {
    // apiCall
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}`)
        .then(
            // function to fetch data in json format
            res => res.json()
        )
        .then(data => {
            let name = data['name'];
            let description = data['weather']['0']['description'];
            let temperature = data['main']['temp'];
            let windSpeed = data['wind']['speed'];
            let country = data['sys']['country']

            cityOutput.innerHTML = `Weather Report of <span>${name}, ${country}</span>`;
            desc.innerHTML = `Sky conditions: <span>${description}</span>`;
            temp.innerHTML = `Temperature: <span>${fToC(temperature)} C</span>`;
            wind.innerHTML = `Wind Speed: <span>${windSpeed}</span>`;
        })
        .catch(err => alert('Please check the name of the entered city'))
})


