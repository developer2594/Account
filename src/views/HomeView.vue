<template>
  <MainHeader @open="menuOpen = !menuOpen" />
</template>

<!-- <style src="../css/MainStyle.min.css"></style> -->

<script>
import MainHeader from "@/components/MainHeader";
export default {
  data: () => ({
    menuOpen: true,
  }),
  components: {
    MainHeader,
  },
};
</script>
