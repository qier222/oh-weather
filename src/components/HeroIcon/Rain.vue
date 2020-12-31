<template>
  <div class="clouds">
    <img src="@/assets/images/cloud.svg" class="cloud" />
    <div class="raindrop-group group-1">
      <div class="raindrop drop-1"></div>
      <div class="raindrop drop-2"></div>
    </div>
    <div class="raindrop-group group-2">
      <div class="raindrop drop-1"></div>
      <div class="raindrop drop-2"></div>
    </div>
    <div class="raindrop-group group-3">
      <div class="raindrop drop-1"></div>
      <div class="raindrop drop-2"></div>
    </div>
    <div class="raindrop-group group-4">
      <div class="raindrop drop-1"></div>
      <div class="raindrop drop-2"></div>
    </div>
    <div class="raindrop-group group-5">
      <div class="raindrop drop-1"></div>
      <div class="raindrop drop-2"></div>
    </div>
    <div v-if="lightning" class="lightning">
      <img src="@/assets/images/lightning.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "GreyCloud",
  props: {
    lightning: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
@keyframes raindop1 {
  0% {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(0, 16px);
  }
  100% {
    transform: translate(0, 34px);
  }
}
@keyframes raindop2 {
  0% {
    transform: translate(0, 0px);
  }
  50% {
    opacity: 1;
    height: 11px;
    transform: translate(0, 16px);
  }
  51% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    height: 11px;
    transform: translate(0, 16px);
  }
}

.clouds {
  top: -36px;
  position: absolute;
  z-index: 1000;
}
.cloud {
  height: 128px;
  z-index: 0;
}

.raindrop-group {
  position: absolute;
  top: 100px;
  z-index: -1;
}
.raindrop {
  height: 24px;
  width: 11px;
  border-radius: 24px;
  background: linear-gradient(180deg, #007fff 0%, #0091ff 100%);
}

.drop-1 {
  margin-bottom: 10px;
  animation: raindop1 1s, 400ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.drop-2 {
  animation: raindop2 1s, 400ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.group-1 {
  left: 46px;
}

.group-2 {
  left: 68px;
}

.group-3 {
  left: 90px;
}
.group-4 {
  left: 112px;
}

.group-5 {
  left: 134px;
}

@keyframes lightning {
  45%,
  55% {
    opacity: 1;
  }

  0%,
  40%,
  50%,
  60%,
  100% {
    opacity: 0;
  }
}

.lightning img {
  width: 28px;
  position: absolute;
  bottom: -32px;
  left: 81px;
  z-index: -1;

  animation: lightning 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
</style>
