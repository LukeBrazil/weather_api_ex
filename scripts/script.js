const apiKey = 'e58d1190d081f10a3da11806b105613b'
const submitButton = document.getElementById('submitInfo');


// function getWeather() {
//     let cityName = document.querySelector("#cityName").value
//     let weatherInfo = document.getElementById('weatherInfo');
//     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {
//             return data;
            
//         })
//         weatherInfo.innerHTML = data.value;
// }

submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    const apiKey = 'e58d1190d081f10a3da11806b105613b'
    let cityName = document.querySelector("#cityName").value
    let weatherInfo = document.getElementById('weatherInfo');
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        .then(function(response) {
            return response.json();
            
        })
        .then(function(response) {
            weatherInfo.innerHTML = `<ul>
            <li>Feels like: ${kelvinToFahrenheit(response.main.feels_like)}</li>
            <li>Humidity: ${response.main.humidity}%</li>
            <li>Temperature : ${kelvinToFahrenheit(response.main.temp)}</li>
        </ul>`
            
        }) 
        // weatherInfo.innerHTML = data.value;
})

function kelvinToFahrenheit(kelvin) {
    fahrenheit = (kelvin - 273.15) * 9/5 + 32
    return fahrenheit;
}