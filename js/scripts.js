const apiKey = "9e92702e2898916292e45b6533e6d2b0";
const apiCountryURL = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const countryElement = document.querySelector("#country");
const tempElement = document.querySelector("#temperature span");
const descriptionElement = document.querySelector("#descriptions");
const weatherIconElement = document.querySelector("#weather-icon");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");


const getWeatherData = async (city) => {
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=en`;

  const res = await fetch(apiWeatherURL);
  const data = await res.json();

  console.log(data);
};

const showWeatherData = (city) => {
  getWeatherData(city);
};

searchBtn.addEventListener("click", (a) => {
  a.preventDefault();

  const city = cityInput.value;

  showWeatherData(city);
});