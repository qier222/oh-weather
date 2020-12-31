<template>
  <div id="app">
    <Header />
    <main>
      <div class="weather-cards">
        <WeatherCard
          v-for="city in this.$store.state.citiesWeather"
          :city="city"
          :key="city.cityName"
          :style="weatherCardStyle"
        />
      </div>
    </main>
    <Footer />
    <div v-show="!this.$store.state.showAddCityButton" class="cover" @click="hideAddCityCard"></div>
    <AddCity ref="AddCity" />
  </div>
</template>

<script>
import WeatherCard from "./components/WeatherCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddCity from "./components/AddCity";

export default {
  name: "App",
  components: {
    WeatherCard,
    Header,
    Footer,
    AddCity,
  },
  data() {
    return {
      weatherCardStyle: {},
    };
  },
  beforeCreate() {
    this.$store.dispatch("initApp");
  },
  mounted() {
    window.oh = this;
  },
  methods: {
    pisaIt() {
      this.weatherCardStyle = {
        transform: "rotateY(-8deg) rotate(2deg)",
        transition: "transform 1s ease",
      };
      return "pppppppisa";
    },
    hideAddCityCard() {
      this.$refs.AddCity.hideAddCityCard();
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;1,600&display=swap");
html,
body,
#app {
  height: 100%;
}

body {
  background: #f7f6f6;
}
#app {
  font-family: Rubik, sans-serif;
  position: relative;
}

main {
  margin-top: 16px;
  min-height: calc(100% - 136px);
}
.weather-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.cover {
  z-index: 40;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  /* backdrop-filter: blur(5px) brightness(80%); */
}
</style>
