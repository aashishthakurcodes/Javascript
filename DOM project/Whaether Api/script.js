let data;

const inputBox = document.getElementById("inputBox");

const temprature = document.getElementById("temprature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");

const windSpeed = document.getElementById("windSpeed");
const humidity = document.getElementById("humidity");
const cityName = document.getElementById("cityName");
const countryName = document.getElementById("countryName");

const maxtemp = document.getElementById("Max-temp");
const mintemp = document.getElementById("Min-temp");
const sunset = document.getElementById("Sunset");
const sunrise = document.getElementById("sunrise");

const getData = async (event) => {
    event.preventDefault();
    if (!inputBox.value) {
        alert("Please Enter The City Name: ");
        return;
    }
    const inputvalue = inputBox.value;

    const fetchur = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=a4c8e9a086f54b88b5d143234231102&q=${inputvalue}`
    );

    const jsondata = await fetchur.json();
    data = jsondata;
    console.log(data);

    countryName.innerHTML = data.location.country;
    cityName.innerHTML = data.location.name;
    humidity.innerHTML = data.current.humidity;
    windSpeed.innerHTML = data.current.wind_kph;
    temprature.innerHTML = data.current.temp_c;
    logoImage.src = data.current.condition.icon;
    weatherStatus.innerHTML = data.current.condition.text;

    sunrise.innerHTML = data.forecast["forecastday"][0].astro.sunrise;
    sunset.innerHTML = data.forecast["forecastday"][0].astro.sunset;

    maxtemp.innerHTML = data.forecast["forecastday"][0]["day"]["maxtemp_c"];
    mintemp.innerHTML = data.forecast["forecastday"][0]["day"]["mintemp_c"];
};
