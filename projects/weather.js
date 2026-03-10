async function loadWeather() {

  const url = "https://api.open-meteo.com/v1/forecast?latitude=46.52&longitude=6.63&current_weather=true";

  const response = await fetch(url);
  const data = await response.json();

  const weather = data.current_weather;

  document.getElementById("weather").innerHTML = `
    <p>Temperature: ${weather.temperature} °C</p>
    <p>Wind speed: ${weather.windspeed} km/h</p>
    <p>Time: ${weather.time}</p>
  `;
}

loadWeather();
