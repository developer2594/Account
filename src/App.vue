<template>
  <router-view :ScrinWidth="ScrinWidth" />
</template>

<script>
export default {
  data: () => ({
    menuOpen: false,
    ScrinWidth: 0,
  }),
  components: {},
  created() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },
  methods: {
    onResize() {
      this.ScrinWidth = window.innerWidth;
    },
  },
};
</script>

<style lang="scss"></style>
