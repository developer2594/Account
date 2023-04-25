<template>
  <div class="portfolio">
    <div class="portfolio__container">
      <h2 class="portfolio__title">Наше портфолио</h2>
      <div class="portfolio__body">
        <PortCard v-for="card in cards" :key="card.name" :PortCards="card" />
      </div>
    </div>
  </div>
</template>

<script>
import PortCard from "@/components/PortfolioCard.vue";

export default {
  data: () => ({
    cards: [
      {
        portUrl: "relvise",
        src: "relvise.jpg",
        name: "relvise",
        lable: "",
        url: "1",
        urlName: "",
        alt: "relvise-image",
      },
      {
        portUrl: "zlatmax",
        src: "zlatmax.jpg",
        name: "zlatmax",
        lable: "копия сайта",
        url: "https://www.zlatmax.ru/",
        urlName: "работающий сайт",
        alt: "zlatmax-image",
      },
      {
        portUrl: "goCorona",
        src: "goCorona.jpg",
        name: "goCorona",
        lable: "",
        url: "goCorona",
        urlName: "",
        alt: "goCorona-image",
      },
      {
        portUrl: "portfolio-1",
        src: "portfolio-1.jpg",
        name: "portfolio-1",
        lable: "",
        url: "portfolio",
        urlName: "",
        alt: "portfolio-image",
      },
      {
        portUrl: "batman",
        src: "batman.jpg",
        name: "batman",
        lable: "",
        url: "batman",
        urlName: "",
        alt: "batman-image",
      },
      {
        portUrl: "3Dglo",
        src: "3Dglo.jpg",
        name: "3Dglo",
        lable: "",
        url: "Glo",
        urlName: "",
        alt: "3Dglo-image",
      },
      {
        portUrl: "organick",
        src: "organick.jpg",
        name: "organick",
        lable: "",
        url: "organick",
        urlName: "",
        alt: "organick-image",
      },
    ],
  }),
  components: {
    PortCard,
  },
};
</script>
