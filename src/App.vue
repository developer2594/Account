<template>
  <Header msg="Welcome to Your Vue.js App" />
  <router-view />
  <Footer />
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
#app {
  display: grid;
  overflow: hidden;
}
.container {
  position: relative;
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  border: 1px solid green;
}
</style>
