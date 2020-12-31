const axios = require("axios");

module.exports = async (req, res) => {
  function getCurrentWeather(city) {
    return axios.get("https://api.openweathermap.org/data/2.5/weather", {
      params: {
        q: city,
        appid: process.env.API_KEY,
        units: "metric",
      },
    });
  }
  function getForecastWeather(city) {
    return axios.get("https://api.openweathermap.org/data/2.5/forecast", {
      params: {
        q: city,
        appid: process.env.API_KEY,
        units: "metric",
      },
    });
  }

  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const cities = req.query.cities.split(",");
  let citiesMapped = await cities.map(async (city) => {
    return axios.all([getCurrentWeather(city), getForecastWeather(city)]).then(
      axios.spread((current, forecast) => {
        let forcastFilted = [];
        for (let day of forecast.data.list) {
          let dayOfWeek = days[new Date(day.dt * 1000).getDay()];
          let isContinue = false;
          for (let filtedDay of forcastFilted) {
            if (filtedDay.day == dayOfWeek) {
              isContinue = true;
            }
          }
          if (isContinue) {
            continue;
          }
          forcastFilted.push({
            day: dayOfWeek,
            weather: day["weather"][0]["main"],
            weatherDescription: day["weather"][0]["description"],
          });
        }
        forcastFilted.shift();
        return {
          cityName: current.data["name"],
          weather: current.data["weather"][0]["main"],
          weatherDescription: current.data["weather"][0]["description"],
          temperature: current.data["main"]["temp"],
          humidity: current.data["main"]["humidity"],
          wind: current.data["wind"]["speed"],
          forecast: forcastFilted,
        };
      })
    );
  });
  Promise.all(citiesMapped).then((result) => {
    res.status(200).send(result);
  });
};
