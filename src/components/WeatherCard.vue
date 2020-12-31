<template>
  <div class="container">
    <div class="weather-card">
      <div class="part-a">
        <div class="main-icon">
          <HeroIcon :city="city" />
        </div>
        <div class="city-and-weather-description">
          <span class="city-name">{{ city.cityName }}</span>
          <span class="weather-description" :title="city.weatherDescription">
            {{
            city.weather.toUpperCase()
            }}
          </span>
        </div>
      </div>
      <div class="part-b">
        <div class="temperature">{{ city.temperature.toFixed(0) }}°</div>
      </div>
      <div class="details-cintainer">
        <div class="details-card">
          <div class="today">
            <div class="today-container">
              <img src="../assets/images/wind.svg" />
              <div>
                <div class="title">Wind</div>
                <div class="data">
                  {{ city.wind }}
                  <span class="data-unit">m/s</span>
                </div>
              </div>
            </div>
            <div class="today-container">
              <img src="../assets/images/humidity.svg" />
              <div>
                <div class="title">Humidity</div>
                <div class="data">
                  {{ city.humidity }}
                  <span class="data-unit">%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="forecast">
            <div class="title">Next 5 Days</div>
            <div class="pills">
              <div
                class="pill"
                v-for="day in city.forecast"
                :key="day.day"
                :title="day.weatherDescription"
              >
                <span class="name">{{ day.day.toUpperCase() }}</span>
                <ForecastIcon :day="day" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroIcon from "./HeroIcon.vue";
import ForecastIcon from "./ForecastIcon.vue";
export default {
  name: "WeatherCard",
  props: {
    city: Object,
  },
  components: { HeroIcon, ForecastIcon },
};
</script>

<style scoped>
.container {
  margin: 48px;
}
.weather-card {
  background: #fff;
  height: 420px;
  width: 286px;
  border-radius: 20px;
  border: 0 solid rgba(224, 224, 224, 0.69);
  box-shadow: 0 0 4px 0 rgba(215, 215, 215, 0.5),
    0 2px 10px 2px rgba(224, 224, 224, 0.19);
  user-select: none;
  transition: transform 0.5s;
}
.part-a {
  display: flex;
  justify-content: space-between;
}
.main-icon {
  position: relative;
  left: -24px;
  top: 12px;
}
.city-and-weather-description {
  position: relative;
  top: 12px;
  right: 14px;
  text-align: right;
}
.city-name {
  display: block;
  text-align: right;
  font-size: 16px;
  color: #7f7f7f;
}
.weather-description {
  margin-top: 2px;
  display: block;
  font-size: 24px;
  color: #262626;
  font-weight: 500;
}
.part-b {
  margin-top: 24px;
  margin-right: 16px;
  display: flex;
  justify-content: flex-end;
}
.temperature {
  font-size: 72px;
  font-weight: 500;
  margin-top: 76px;
}

.details-cintainer {
  display: flex;
  justify-content: center;
}
.details-card {
  height: 175px;
  width: 270;
  background: #0091ff;
  border-radius: 16px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.today {
  display: flex;
  justify-content: space-evenly;
  padding: 24px 0;
}
.today .today-container {
  display: flex;
}
.today img {
  height: 30px;
}
.today .title {
  font-weight: 500;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.85);
  margin-left: 8px;
}
.today .data {
  font-weight: 500;
  font-size: 17px;
  color: #ffffff;
  margin: 2px 0px -4px 8px;
}
.today .data-unit {
  display: inline;
  font-size: 13px;
  margin-left: -1px;
}

.forecast {
  padding: 0 20px 20px 20px;
}
.forecast .title {
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  margin-bottom: 8px;
  margin-left: 8px;
}
.forecast .pills {
  display: flex;
  justify-content: space-between;
}
.forecast .pill {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  height: 52px;
  width: 34px;
  display: flex;
  flex-direction: column;
  margin: 0 6px;
}
.forecast .pill .name {
  font-weight: 500;
  font-size: 12px;
  transform: scale(0.84);
  color: #ffffff;
  text-align: center;
  margin-top: 8px;
}
</style>
