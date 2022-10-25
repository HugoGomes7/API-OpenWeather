const apiKey = "9e92702e2898916292e45b6533e6d2b0";
const apiCountryURL = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const showWeatherData = (city) => {
  console.log(city);
};

searchBtn.addEventListener("click", (a) => {
  a.preventDefault();

  const city = cityInput.value;

  showWeatherData(city);
});