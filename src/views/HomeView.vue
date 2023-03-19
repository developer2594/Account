<template>
  <div class="home">
    <h2>Home</h2>
    <Zlatmax />
  </div>
</template>

<script>
// @ is an alias to /src
import Zlatmax from "@/components/Zlatmax";

export default {
  name: "HomeView",
  components: {
    Zlatmax,
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
