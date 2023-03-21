<template>
  <div class="home">
    <div class="container">Home</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
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
