const searchButton = document.querySelector('.search-button');
const cityInput = document.querySelector('.city-search');
const apiKey = 'e58d1190d081f10a3da11806b105613b'

searchButton.addEventListener('click', function() {
    let city = document.querySelector('.city-search').value
    fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=e58d1190d081f10a3da11806b105613b`)
        .then(function(response) {
            return response.json();
            
        })
        .then(function(data) {
            return data;
            console.log(data);
        })
    })