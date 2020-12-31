<template>
  <div class="sunny">
    <img src="@/assets/images/sun.svg" class="sun" />
    <img src="@/assets/images/sunlight-for-sunny.svg" class="sunlight" />
  </div>
</template>

<script>
export default {
  name: "Clear",
};
</script>

<style scoped>
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
.sunny {
  position: absolute;
  z-index: 1000;
}
.sun {
  position: absolute;
  top: 2px;
  left: 40px;
  z-index: 0;
}
img.sunlight {
  position: absolute;
  top: -38px;
  left: -2px;
  height: 164px;
  z-index: -1;
  animation: spin 30s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
</style>
