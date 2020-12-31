<template>
  <div class="clouds">
    <img src="@/assets/images/cloud-sun.svg" class="cloud" />
    <img src="@/assets/images/sunlight.svg" class="sunlight" />
  </div>
</template>

<script>
export default {
  name: "Clouds",
};
</script>

<style scoped>
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
.clouds {
  position: absolute;
  z-index: 1000;
}
.cloud {
  z-index: 0;
}
img.sunlight {
  position: absolute;
  top: -14px;
  right: -12px;
  height: 94px;
  z-index: -1;
  animation: spin 30s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
</style>
