let searchField = document.querySelector('#search');

searchField.addEventListener('keypress', function(e) {
    if(e.which === 13){
        e.preventDefault();
        window.location = `https://google.com/search?q=${searchField.value}`
    }
});

///////////////////////////////////////////////

let weather = document.querySelector('#weather');

async function getWeather(city) {
    const server = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ec5a23533f7e51e44671e40f7c5b2f6e&lang=ru&units=metric`
    const response = await fetch(server, {method: 'GET'});
    const responseResult = await response.json();
    if(response.ok) {
        weatherInfo = {
            city: responseResult.name,
            description: responseResult.weather[0].description,
            icon: responseResult.weather[0].icon,
            weather: Math.round(responseResult.main.temp)
        }
        fillWeather(weatherInfo)
    }
    else {
        weather.innerHTML = `${responseResult.cod} ${responseResult.message}`
    }
}


function fillWeather(weatherInfo) {
    weather.innerHTML = `
    <div class="weather">
        <img src="http://openweathermap.org/img/w/${weatherInfo.icon}.png" class="weather__icon">
        <p class="weather__weather">
            Погода в ${weatherInfo.city}: ${weatherInfo.weather}° //
            ${weatherInfo.description}
        </p>
    </div>`
}

getWeather(localStorage.getItem('city'));

//////////////////////////////////

let cityInput = document.querySelector('#city');

cityInput.addEventListener('keypress', function(e) {
    if(e.which === 13){
  	    e.preventDefault();
        
        localStorage.setItem('city', cityInput.value);
        location.reload()
    }
});