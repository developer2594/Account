<template>
  <HomeHeader :ScrinWidth="ScrinWidth" />
  <HomeMain :ScrinWidth="ScrinWidth" />
  <HomeSpec />
</template>

<script>
import HomeHeader from "@/components/HomeHeader";
import HomeMain from "@/components/HomeMain";
import HomeSpec from "@/components/SpecializationMain";
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
    HomeSpec,
  },
  methods() {
    console.log("homeView", this.ScrinWidth);
  },
};
</script>
