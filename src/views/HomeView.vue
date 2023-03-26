<template>
  <HomeHeader :ScrinWidth="ScrinWidth" />
  <HomeMain />
</template>

<script>
import HomeHeader from "@/components/HomeHeader";
import HomeMain from "@/components/HomeMain";
export default {
  props: {
    ScrinWidth: {
      type: Number,
    },
  },
  data: () => ({}),
  components: {
    HomeHeader,
    HomeMain,
  },
  methods() {
    console.log("homeView", this.ScrinWidth);
  },
};
</script>
