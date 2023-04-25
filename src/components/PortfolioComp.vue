<template>
  <div class="portfolio">
    <div class="portfolio__container">
      <h2 class="portfolio__title">Наше портфолио</h2>
      <div class="portfolio__body">
        <PortCard />
      </div>
    </div>
  </div>
</template>

<script>
import PortCard from "@/components/PortfolioComp.vue";

export default {
  data: () => ({
    portfolioCard: [
      {
        relvase: { image: "", src: "", name: "", url: "" },
        zlatmax: { image: "", src: "", name: "", url: "" },
        goCorona: { image: "", src: "", name: "", url: "" },
        portfolio: { image: "", src: "", name: "", url: "" },
        batman: { image: "", src: "", name: "", url: "" },
        Glo: { image: "", src: "", name: "", url: "" },
        organic: { image: "", src: "", name: "", url: "" },
      },
    ],
  }),
  components: {
    PortCard,
  },
};
</script>
