<template>
  <footer>
    <div>
      <div class="copyright">
        Design & Code by
        <a href="https://github.com/qier222">qier222</a>
      </div>
      <div class="api">
        Weather data from
        <a href="https://openweathermap.org/">OpenWeatherMap</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  display: flex;
  align-items: center;
  background: #fafafa;
  width: 100%;
  height: 54px;
  border-top: 1px solid #eaeaea;
  color: #888;
}
footer .copyright {
  font-size: 12px;
  padding-left: 24px;
  font-weight: 500;
  color: #252525;
}
footer .api {
  font-size: 12px;
  margin-top: 4px;
  padding-left: 5px;
  font-weight: 400;
  transform: scale(0.8);
}
footer .copyright a,
footer .copyright a:visited {
  color: #252525;
}
footer .api a,
footer .api a:visited {
  color: #888 !important;
}
</style>
