<template>
  <div class="clouds">
    <img src="@/assets/images/cloud.svg" class="cloud" />
    <img src="@/assets/images/grey-cloud.svg" class="grey-cloud" />
  </div>
</template>

<script>
export default {
  name: "GreyClouds",
};
</script>

<style scoped>
@keyframes fade-in-and-out {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate(-50px);
    opacity: 0;
  }
}
.clouds {
  position: absolute;
  z-index: 1000;
}
.cloud {
  width: 168px;
  z-index: 0;
}
.grey-cloud {
  position: absolute;
  top: -8px;
  right: 0px;
  width: 96px;
  z-index: -1;
  animation: fade-in-and-out 8s;
  animation-iteration-count: infinite;
}
</style>
