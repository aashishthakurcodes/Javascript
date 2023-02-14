// Map, Filter and Reduce
// Primise and Fetch API
// Weather App

// map => iterate over array and perform a action on all the values
// filter => iterate over array and filter out the element
// reduce => Single Value

// const numbers = [1, 2, 3, 4, 5, 6];
// const nums = numbers.map((val) => val * 5);
// console.log(nums);

// const count = ["india", "Finland", "Srilanka", "Ireland"];
// const countr = count.filter((val) => val.includes("land"));
// console.log(countr);

// const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const sum = num1.reduce((acc, cur) => acc + cur, 1);
// console.log(sum);

// promise
const makePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const arrone = ["HTML", "CSS", "javaScript", "Tailwind"];
    if (arrone.length > 0) {
      resolve("Completed");
    } else {
      reject("Incomplete");
    }
  }, 2000);
});

makePromise
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });

// Fetch API

const url = "https://restcountries.com/v2/all"; // Countries

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));


  // Data => Done
// Variable to Store the Element => Done
// Function to get the data from weather app
// Manipluate the varibe of already created element

let data;

const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temprature = document.getElementById("temprature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");

const getData = async (event) => {
  event.preventDefault();
  if (!inputBox.value) {
    alert("Please Enter The City Name: ");
    return;
  }

  //
  const city = inputBox.value;

  // Fetch Details

  const fetchData = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=1&q=${city}`
  );

  const orgData = await fetchData.json();
  data = orgData;
  console.log(data);

  // Displaying the data in HTML
  countryName.innerHTML = data.location.country;
  stateName.innerHTML = data.location.region;
  cityName.innerHTML = data.location.name;
  humidity.innerHTML = data.current.humidity;
  windSpeed.innerHTML = data.current.wind_kph;
  temprature.innerHTML = data.current.temp_c;
  logoImage.src = data.current.condition.icon;
  weatherStatus.innerHTML = data.current.condition.text;
};



/* designing the weather app container */
.container {
  width: 600px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  padding: 15px;
}

/* designing the search area */
.searchData {
  border: 1px solid black;
}

.searchData input {
  border: transparent;
  padding: 5px;
}

.searchData button {
  border: transparent;
  padding: 5px 15px;
  cursor: pointer;
}

/* designing the city weather data */
.cityWeatherData {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  width: 100%;
}

.details {
  display: flex;
  align-items: center;
  gap: 30px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}





<!-- section for displaying the city weather data -->
      <section class="cityWeatherData">
        <!-- displaying the country details -->
        <div class="countryDetails details">
          <!-- displaying the country name -->
          <div class="card">
            <p>Country Name</p>
            <p id="countryName">__</p>
          </div>

          <!-- displaying the state name -->
          <div class="card">
            <p>State Name</p>
            <p id="stateName">__</p>
          </div>

          <!-- displaying the city name -->
          <div class="card">
            <p>City Name</p>
            <p id="cityName">__</p>
          </div>
        </div>

        <!-- displaying the weather status -->
        <div class="weatherDetails details">
          <!-- displaying the humidity -->
          <div class="card">
            <p>Humidity</p>
            <p id="humidity">__</p>
          </div>

          <!-- displaying the wind speed -->
          <div class="card">
            <p>Wind Speed</p>
            <p><span id="windSpeed">__</span> KMPH</p>
          </div>

          <!-- displaying the current temprature in celcius -->
          <div class="card">
            <p>Temprature</p>
            <!-- unicode for degree celcius symbol -->
            <p><span id="temprature">__</span>&#8451;</p>
          </div>

          <!-- displaying the weather condition -->
          <div class="card">
            <img width="20px" id="logoImage" src="" alt="icon" />
            <p id="weatherStatus">__</p>
          </div>
        </div>
      </section>
