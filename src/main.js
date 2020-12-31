import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import "normalize.css/normalize.css";

import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(Vuex);

if (localStorage.getItem('cities') === null) {
  let defaultCities = ["Guangzhou", "Madrid", "London"];
  if (document.documentElement.clientWidth <= 824) {
    defaultCities = ["London"]
  }
  localStorage.setItem('cities', JSON.stringify(defaultCities));
}

const store = new Vuex.Store({
  state: {
    cities: JSON.parse(localStorage.getItem("cities")),
    citiesWeather: [],
    showAddCityButton: true
  },
  mutations: {
    updateCitiesWeather(state, data) {
      state.citiesWeather = data;
    },
    removeCity(state, cityName) {
      state.cities = state.cities.filter(city => city !== cityName);
      state.citiesWeather = state.citiesWeather.filter(city => city.cityName !== cityName)
      localStorage.setItem('cities', JSON.stringify(state.cities));
    },
    changeShowAddCityButton(state, status) {
      state.showAddCityButton = status;
    },
    addCity(state, data) {
      state.cities.unshift(data.cityName);
      state.citiesWeather.unshift(data);
      localStorage.setItem('cities', JSON.stringify(state.cities));
    }
  },
  actions: {
    async initApp({
      commit,
      state
    }) {
      let data = [{
        cityName: "Mars",
        weather: "Clouds",
        weatherDescription: "few clouds",
        temperature: 33.52,
        humidity: 10,
        wind: 3.51,
        forecast: [{
            day: "TWM",
            weather: "Clear",
            weatherDescription: "clear sky",
          },
          {
            day: "FRI",
            weather: "Clouds",
            weatherDescription: "few clouds",
          },
          {
            day: "SAT",
            weather: "Clouds",
            weatherDescription: "broken clouds",
          },
          {
            day: "SUN",
            weather: "Rain",
            weatherDescription: "rain",
          },
          {
            day: "MON",
            weather: "Thunderstorm",
            weatherDescription: "thunderstorm",
          },
        ],
      }];
      await axios
        .get(
          "/api/get-data", {
            params: {
              cities: state.cities.join(","),
            }
          }
        )
        .then(function (response) {
          data = response.data;
        })
        .catch(function (error) {
          console.log(error);
          alert('Unable to fetch weather data.')
        });
      commit("updateCitiesWeather", data);
      console.log('try window.oh.pisaIt()');
    },
    async addCity({
      commit
    }, cityName) {
      await axios
        .get(
          "/api/get-data", {
            params: {
              cities: cityName,
            }
          }
        )
        .then(function (response) {
          commit('addCity', response.data[0]);
        }).catch(function (error) {
          alert("Can't find this city or api error.")
          console.log(error)
        })
    }
  },
});

new Vue({
  store,
  axios,
  render: (h) => h(App),
}).$mount("#app");