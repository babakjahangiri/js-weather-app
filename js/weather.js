 // Author : Babak Jahangiri
 
const ApiKey = "86acc6a166230cda362bdc77514e08b8";

var citySelect = document.getElementById("cities");
citySelect.addEventListener('change', function()
{
   fetchWeather(this.value);
}, false);


function init()
{
  fetchWeather("london");
}

function fetchWeather(city)
{
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric&lang=en`)
  .then(response => {
    if (response.ok) {
      return response.json()
    }else {
      console.log("Unable to fetch the api")
    }
  })
  .then(function(data){

      //console.log(data.main)
     console.log(data);   //just for verification 
     setWeatherData(data.name,data.weather[0].description,data.weather[0].icon,data.main.temp,
     data.main.feels_like,data.main.temp_max,data.main.temp_min,data.main.pressure,data.main.humidity);
  
  })
  // This is where you run code if the server returns any errors

  .catch(err => {
    console.log("Error : " + err)
  })
}

function setWeatherData(city,description,icon,temp,feels_like,temp_max,temp_min,pressure,humidity)
{
  setBackground(city);
  document.getElementById("city-name").innerHTML = (city).toUpperCase();
  document.getElementById("weather-temp").innerHTML = `${Math.round(temp)}&#176; C`;
  document.getElementById("weather-status-img").src = `images/wicon/${icon}.png`
  document.getElementById("weather-desc").innerHTML = description  
  document.getElementById("feelslike").innerHTML = `Feels like : ${Math.round(feels_like)}&#176;C`
  document.getElementById("max-temp").innerHTML = `Max Tempreture : ${Math.round(temp_max)}&#176;C`
  document.getElementById("min-temp").innerHTML = `Min Tempreture : ${Math.round(temp_min)}&#176;C`
  document.getElementById("w-presure").innerHTML = `Presure : ${pressure}&#176;C`
  document.getElementById("w-humidity").innerHTML = `Humidity : ${humidity}%`
}


function setBackground(city){

  document.getElementsByTagName("main")[0].style.backgroundImage = `url('images/bg/${city}.jpg')`;
  

}