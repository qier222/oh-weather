<template>
  <div>
    <Clouds v-if="heroIcon === 'Clouds'" />
    <Clear v-if="heroIcon === 'Clear'" />
    <GreyClouds v-if="heroIcon === 'GreyClouds'" />
    <Rain v-if="heroIcon === 'Rain'" />
    <Rain v-if="heroIcon === 'Thunderstorm'" :lightning="true" />
    <Snow v-if="heroIcon === 'Snow'" />
  </div>
</template>

<script>
import Clear from "./HeroIcon/Clear";
import Clouds from "./HeroIcon/Clouds";
import GreyClouds from "./HeroIcon/GreyClouds";
import Rain from "./HeroIcon/Rain";
import Snow from "./HeroIcon/Snow";
export default {
  name: "HeroIcon",
  props: {
    city: Object,
  },
  components: {
    Clouds,
    Clear,
    GreyClouds,
    Rain,
    Snow,
  },
  computed: {
    heroIcon() {
      let icon = this.city.weather;
      let unsupportWeather = [
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
      ];
      if (unsupportWeather.includes(icon)) {
        icon = "Clouds";
      }
      if (icon === "Drizzle") {
        icon = "Rain";
      }
      if (
        icon === "Clouds" &&
        (this.city.weatherDescription === "broken clouds" ||
          this.city.weatherDescription === "overcast clouds")
      ) {
        icon = "GreyClouds";
      }
      return icon;
    },
  },
};
</script>

<style scoped></style>
