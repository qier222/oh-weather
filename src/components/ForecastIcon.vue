<template>
  <div>
    <img v-if="icon === 'Clear'" src="../assets/images/forecast-icon/clear.svg" />
    <img v-if="icon === 'Clouds'" src="../assets/images/forecast-icon/clouds.svg" />
    <img v-if="icon === 'GreyClouds'" src="../assets/images/forecast-icon/grey-clouds.svg" />
    <img v-if="icon === 'Rain'" src="../assets/images/forecast-icon/rain.svg" />
    <img v-if="icon === 'Thunderstorm'" src="../assets/images/forecast-icon/thunderstorm.svg" />
    <img v-if="icon === 'Snow'" src="../assets/images/forecast-icon/snow.svg" />
    <img v-if="icon === 'Unknow'" src="../assets/images/forecast-icon/unknow.svg" />
  </div>
</template>

<script>
export default {
  name: "ForecastIcon",
  props: {
    day: Object,
  },
  components: {},
  computed: {
    icon() {
      let icon = this.day.weather;
      let desc = this.day.weatherDescription;
      let supportWeather = ["Clear", "Clouds", "Rain", "Snow", "Thunderstorm"];
      if (!supportWeather.includes(icon)) {
        icon = "Unknow";
      }
      if (icon === "Drizzle") {
        icon = "Rain";
      }
      if (
        icon === "Clouds" &&
        (desc === "broken clouds" || desc === "overcast clouds")
      ) {
        icon = "GreyClouds";
      }
      return icon;
    },
  },
};
</script>

<style scoped>
div {
  margin-top: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 20px;
  margin-left: 0.1px;
  z-index: 1;
}
</style>
