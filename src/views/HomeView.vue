<template>
  <HomeHeader :ScrinWidth="ScrinWidth" />
  <HomeMain :ScrinWidth="ScrinWidth" />
  <HomeSpec />
  <PortFolio />
  <FooterComp />
</template>

<script>
import HomeHeader from "@/components/HomeHeader.vue";
import HomeMain from "@/components/HomeMain.vue";
import HomeSpec from "@/components/SpecializationMain.vue";
import PortFolio from "@/components/PortfolioComp.vue";
import FooterComp from "@/components/HomeFooter.vue";
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
    PortFolio,
    FooterComp,
  },
  methods() {
    console.log("homeView", this.ScrinWidth);
  },
};
</script>
