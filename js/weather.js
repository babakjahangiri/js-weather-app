fetch(
  "https://community-open-weather-map.p.rapidapi.com/weather?callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=London%252Cuk",
  {
    method: "GET",
    headers: {
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": "028606124amsha13f400793eeb95p1bb11ajsn5462011cd1f6"
    }
  }
)
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });
