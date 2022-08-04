<template>
  <div id="app">
    <Home />
    <!-- Imagens de animação no header -->
    <div class="nave_1">
      <img src="./assets/img/inimig.png" alt="nave1" />
    </div>
    <div class="millennium__falcon">
      <img src="./assets/img/Millennium_Falcon_DICE.png" alt="falcon" />
    </div>

    <button class="back-to-top" @click="goTop">↑</button>
  </div>
</template>

<script>
import Home from "./pages/Home/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
  methods: {
    goTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style>
html {
  overflow-x: hidden;
}
#app {
  margin-top: 5rem;
}
.nave_1 {
  position: absolute;
  top: 15px;
  left: 25px;
  animation: movenave1 8s infinite;
  z-index: 9999;
}

.nave_1 img {
  width: 100px;
}
@keyframes movenave1 {
  from {
    opacity: 1;
    top: 10px;
    left: -150px;
  }
  to {
    opacity: 0.7;
    top: 5%;
    left: 70%;
  }
}
.millennium__falcon {
  position: absolute;
  top: 15px;
  left: 25px;
  animation: movemf 10s infinite;
  z-index: 9999;
}

.millennium__falcon img {
  width: 100px;
}
@keyframes movemf {
  from {
    opacity: 1;
    top: 10px;
    left: -150px;
  }
  to {
    opacity: 0.7;
    top: 5%;
    left: 70%;
  }
}

.back-to-top {
  position: fixed;
  width: 50px;
  height: 68px;
  bottom: 25px;
  right: 3rem;
  font-size: 2rem;
  background: #fff;
  border: 2px solid #282828;
  border-radius: 0.3rem;
  cursor: pointer;
}

@media (max-width: 320px) {
  .millennium__falcon {
    display: none;
  }
  .nave_1 {
    display: none;
  }
  .back-to-top  {
    display: none;
  }
}
@media (max-width: 375px) {
  .millennium__falcon {
    display: none;
  }
  .nave_1 {
    display: none;
  }
  .back-to-top  {
    display: none;
  }
}

@media (min-width: 425px) {
  .back-to-top {
    right: 1rem;
  }
}

@media (min-width: 600px) {
  .back-to-top {
    right: 1rem;
  }
}

@media (min-width: 900px) {
  .back-to-top {
    right: 1rem;
  }
}
</style>
