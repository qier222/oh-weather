<template>
  <div class="container">
    <div class="card city-list" :class="cityListClass" v-if="!showAddCityButton">
      <ol>
        <li
          v-for="city in cities"
          :key="city"
          :class="{ 'slide-out-animation': removing === city }"
        >
          <img src="@/assets/images/remove.svg" @click="removeCity(city)" />
          {{city}}
        </li>
      </ol>
    </div>
    <div class="card add-city" :class="addCityClass" @click="showAddCityCard">
      <div v-if="showAddCityButton" class="add-city-button" :class="addCityButtonClass">
        <img src="@/assets/images/plus.svg" />Add City
      </div>
      <div v-else :class="'form '+formClass">
        <input type="text" placeholder="City Name" v-model="newCityName" />
        <button v-show="!addingCity" @click="addCity">Add</button>
        <button v-show="addingCity" class="loading" disabled>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "AddCity",
  data() {
    return {
      cityListClass: "",
      addCityClass: "cursor-pointer",
      addCityButtonClass: "",
      formClass: "",
      removing: "",
      newCityName: "",
      addingCity: false,
    };
  },
  computed: {
    ...mapState(["showAddCityButton", "cities"]),
  },
  methods: {
    ...mapMutations(["changeShowAddCityButton"]),
    showAddCityCard() {
      if (this.showAddCityButton) {
        this.cityListClass = "fade-in-animation";
        this.addCityClass = "expand-animation";
        this.addCityButtonClass = "fade-out-animation";
        setTimeout(() => {
          this.changeShowAddCityButton(false);
        }, 400);
      }
    },
    hideAddCityCard() {
      this.changeShowAddCityButton(true);
      this.cityListClass = "fade-out-animation";
      this.addCityClass = "cursor-pointer expand-reverse-animation";
      this.addCityButtonClass = "fade-in-animation";
    },
    async addCity() {
      if (this.cities.includes(this.newCityName)) {
        alert(`${this.newCityName} is aready added.`);
        this.newCityName = "";
        return;
      }
      this.addingCity = true;
      await this.$store.dispatch("addCity", this.newCityName);
      this.newCityName = "";
      this.addingCity = false;
    },
    removeCity(city) {
      if (this.cities.length === 1) {
        alert("You can't remove the last city.");
        return;
      }
      this.removing = city;
      setTimeout(() => {
        this.removing = "";
        this.$store.commit("removeCity", city);
      }, 400);
    },
  },
};
</script>

<style scoped>
@keyframes expand {
  from {
    width: 94px;
    height: 20px;
  }
  to {
    width: 200px;
    height: 88px;
  }
}

@keyframes expand-reverse {
  from {
    width: 200px;
    height: 88px;
  }
  to {
    width: 94px;
    height: 20px;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes loading {
  0% {
    opacity: 0.2;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0px);
    opacity: 1;
  }
  to {
    transform: translateX(100px);
    opacity: 0;
  }
}

.cursor-pointer {
  cursor: pointer;
}

.expand-animation {
  animation: expand 0.4s;
  animation-fill-mode: forwards;
}
.expand-reverse-animation {
  animation: expand-reverse 0.4s;
  animation-fill-mode: forwards;
}
.fade-out-animation {
  animation: fade-out 0.4s;
  animation-fill-mode: forwards;
}
.fade-in-animation {
  animation: fade-out 0.4s reverse;
  animation-fill-mode: backwards;
}
.slide-out-animation {
  animation: slide-out 0.4s;
  animation-fill-mode: forwards;
}

.container {
  z-index: 50;
  position: fixed;
  bottom: 36px;
  right: 24px;
}

.card {
  background: #fff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08), 0 2px 4px 0 rgba(0, 0, 0, 0.18);
  border-radius: 10px;
  padding: 8px 12px;
}

.city-list {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding: 0px px;
}
.city-list ol {
  list-style: none;
  padding: 0;
  font-size: 18px;
  font-weight: 500;
  margin: 0;
}
.city-list ol li {
  padding: 4px 0 4px 8px;
  display: flex;
  align-items: center;
}
ol:first-child {
  padding: 0;
}
ol:last-child {
  padding: 0;
}
.city-list img {
  height: 16px;
  padding-right: 8px;
  cursor: pointer;
  user-select: none;
}

.add-city {
  color: #242424;
  background: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.add-city-button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  user-select: none;
}
.add-city img {
  height: 16px;
  padding-right: 4px;
}

.form {
  display: flex;
  flex-direction: column;
}
.form input {
  border: 2px solid #888;
  border-radius: 8px;
  line-height: 1.2;
  padding: 4px 0 4px 8px;
  font-weight: 500;
  -webkit-appearance: none;
}
.form input::placeholder {
  color: #868686;
}
.form input:focus {
  outline: none;
  color: #242424;
  border-color: #242424;
}
.form button {
  margin-top: 12px;
  user-select: none;
  background-color: #242424;
  height: 30px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  border: none;
}
.form button:focus {
  outline: none;
}
.form button:active {
  background: #000;
}
.form button.loading {
  cursor: unset;
}
.loading span {
  width: 6px;
  height: 6px;
  background-color: #999;
  border-radius: 50%;
  margin: 0 2px;
  animation: loading 1.4s infinite both;
}

.loading span:nth-child(2) {
  animation-delay: 0.2s;
}

.loading span:nth-child(3) {
  animation-delay: 0.4s;
}
</style>