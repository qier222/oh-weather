<template>
  <div class="snow">
    <img src="@/assets/images/snow.svg" />
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
.snow {
  position: absolute;
}
.snow img {
  position: absolute;
  top: -42px;
  left: -8px;
  animation: spin 30s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
</style>
