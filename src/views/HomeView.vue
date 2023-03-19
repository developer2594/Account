<template>
  <div class="home">
    <div class="container">Home</div>
    <Zlatmax />
    <Relvase />
  </div>
</template>

<script>
// @ is an alias to /src
import Zlatmax from "@/components/Zlatmax";
import Relvase from "@/components/Relvase";

export default {
  name: "HomeView",
  components: {
    Zlatmax,
    Relvase,
  },
};
</script>

<style scoped>
.home {
  min-height: 100%;
  display: grid;
  overflow: hidden;
  grid-template-rows: auto 1fr auto;
}
</style>
