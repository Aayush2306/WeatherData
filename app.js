const apiKey1 = "77fff2758bbb9112c8492cd21a712a19";
const form = document.querySelector("form");
const weatherDetails = document.querySelector(".details");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const locaton = document.querySelector("input").value;
  getWeather(locaton);
});

async function getWeather(locaton) {
  const res = await fetch(
    `http://api.weatherstack.com/current?access_key=${apiKey1}&query=${locaton}`
  );
  const data = await res.json();
  console.log(data);
  displayWeather(data);
}

function displayWeather(data) {
  let markup = "";
  let current = data.current;
  let locaton = data.location;
  let request = data.request;
  markup = `
  <div class="weather-info">
  <div class="titles">
    <h2 class="temp">${current.temperature}<sup>&#8451</sup></h2>
    <h2 class="status">${current.weather_descriptions}</h2>
  </div>

  <div class="extra-info">
    <p>Temperature: <span>${current.temperature}<sup>&#8451</sup></span>  </p>
    <p>Feels Like: <span>${current.feelslike}<sup>&#8451</sup></span>  </p>
    <p>Local Time: <span>${locaton.localtime}</span>  </p>
    <p>Precipitation: <span>${current.precip}mm</span> </p>
    <p>Humidity: <span>${current.humidity}%</span>  </p>
    <p>Pressure: <span>${current.pressure}hPa</span>  </p>
    <p>Cloud Cover: <span>${current.cloudcover}%</span>  </p>
    <p>Wind Direction: <span>${current.wind_dir}</span>  </p>
    <p>Wind Degree: <span>${current.wind_degree}</span> </p>
    <p>Wind Speed: <span>${current.wind_speed}km/hr</span>  </p>
    <p>Latitude:  <span>${locaton.lat}</span> </p>
    <p>Longitude:  <span>${locaton.lon}</span> </p>
    <p>Visibility: <span> ${current.visibility}km</span> </p>
    <p>Region: <span>${locaton.region}</span>  </p>
  </div>
 </div>

 <div class="place">${locaton.name}, ${locaton.country}</div>
  `;

  weatherDetails.innerHTML = markup;
}
