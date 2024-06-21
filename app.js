/*let btn = document.querySelector(".get-avatar");
btn.addEventListener("click", function () {
  fetch("http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let img = document.querySelector(".my-avatar");
      img.setAttribute("src", data.avatar_url);
    });
});*/

function getWeather() {
  //Input
  let cityElement = document.getElementById("city");
  let city = cityElement.value;
  let url =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=metric&APPID=5d066958a60d315387d9492393935c19";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.cod != 200) {
        alert("Wrong city");
        return;
      }
      //Icon weather
      let img = document.querySelector(".icon");
      let weatherIcon = data.weather[0].icon;
      weatherIcon = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
      img.setAttribute("src", weatherIcon);
      img.style.display = "block";

      //Pressure
      let pressure = document.querySelector(".pressure");
      let pressureText = data.main.pressure;
      pressure.innerHTML = "Pressure: " + pressureText;

      //Temp
      let temp = document.querySelector(".temp");
      let tempText = data.main.temp;
      temp.innerHTML = "Temp: " + tempText + " C";

      //Humidity
      let humidity = document.querySelector(".humidity");
      let humidityText = data.main.humidity;
      humidity.innerHTML = "Humidity: " + humidityText;

      //Description
      let description = document.querySelector(".description");
      let descriptionText = data.weather[0].description;
      description.innerHTML = "Description: " + descriptionText;
      description.style.color = "grey";

      //Speed
      let speed = document.querySelector(".speed");
      let speedText = data.wind.speed;
      speed.innerHTML = "Wind speed: " + speedText;

      //Deg
      let deg = document.querySelector(".deg");
      let degText = data.wind.deg;
      deg.innerHTML = "Wind direction: " + degText + " deg";
    });
}
document.querySelector("button").addEventListener("click", getWeather);
