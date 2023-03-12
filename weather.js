//Get the references for my input, submit btn and weather
const searchBar = document.getElementById('searchBar');
const searchBtn = document.getElementById('searchBtn');
const weatherLocation = document.getElementById('location');
const tempDisplay = document.getElementById('temp');
const weatherDescription = document.getElementById('weatherDesc');
const feelsDisplay = document.getElementById('feels');
const humidityDisplay = document.getElementById('humidity');
const weatherIcon = document.getElementById('weather-icon');
const windsDisplay = document.getElementById('winds');

//Get the Api key and endpoint
const apiKey = "f7311b028a508854192a6bc8aab343e1";
const apiEndpoint ='https://api.openweathermap.org/data/2.5/weather';

//When user clicks the Search Button, get the city and the corresponding api information
searchBtn.addEventListener('click', () => {
    const city = searchBar.value;
    const apiUrl = `${apiEndpoint}?q=${city}&units=imperial&appid=${apiKey}`;

    //pass in the API URL into the fetch method
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        //Fetch the necessary weather data from the API and store it.
        const icon = data.weather[0].icon;
        const temp = Math.ceil(data.main.temp);
        const desc = data.weather[0].description;
        const feelsLike = data.main.feels_like;
        const humidity = data.main.humidity;
        const winds = data.wind.speed;
        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

        //Modify the HTML to display, the corresponding attributes
        weatherDescription.innerHTML = `${desc}`;
        weatherIcon.src = iconUrl;
        weatherLocation.innerHTML = `${city}`;
        tempDisplay.innerHTML = `<p>${temp}°F</p>`;
        feelsDisplay.innerHTML = `<p>Feels Like: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 0c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm-160-16C256 50.1 205.9 0 144 0S32 50.1 32 112v166.5C12.3 303.2 0 334 0 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-34-12.3-64.9-32-89.5V112zM144 448c-44.1 0-80-35.9-80-80 0-25.5 12.2-48.9 32-63.8V112c0-26.5 21.5-48 48-48s48 21.5 48 48v192.2c19.8 14.8 32 38.3 32 63.8 0 44.1-35.9 80-80 80zm16-125.1V304c0-8.8-7.2-16-16-16s-16 7.2-16 16v18.9c-18.6 6.6-32 24.2-32 45.1 0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.5-32-45.1z"></path>
        </svg>${feelsLike}°F</p>`;
        humidityDisplay.innerHTML = `<p>Humidity: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M352 146.4c-34.4-48.6-67.5-78.5-90.8-96.6-3.1-2.4-7.3-2.4-10.4-.1-23 17.1-56.1 48.4-90.5 96.5-37.3 52-63 108.4-64.2 170.9 0 1.2-.1 2.5-.1 3.7 0 18.4 3.9 35.9 10.9 52.1 4.1 9.3 9.2 18.1 15.2 26.3 28.5 39 77.8 64.8 133.8 64.8 88.4 0 160.1-64.1 160.1-143.2 0-63.7-27-122.2-64-174.4zm-86 264.3h-.5c-9.9 0-12-14.1-2.6-17.1 45.1-14.2 69.6-38.5 86.4-80.8 3.5-8.9 16.7-6.5 16.8 3.1v1.4c-.1 51.6-44.9 93.4-100.1 93.4z"></path>
        </svg> ${humidity}%</p>`; 
        windsDisplay.innerHTML =  `<p>Wind: <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
        </svg> ${winds}mph</p>`;

        //clear the input box
        searchBar.value = "";
    })
    .catch(error => console.error(error));
    
})