<template>
  <div id="app">
    <Home />
    <Footer />
  </div>
</template>

<script>
import Home from "./components/Home";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Home,
    Footer,
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Chez Soi",
    // all titles will be injected into this template
    titleTemplate: "%s | Chez Soi",
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.square {
  width: 100%;
  height: 0;
  padding-bottom: 100%;
}
.h-screen-half {
  height: 50vh;
}
</style>
