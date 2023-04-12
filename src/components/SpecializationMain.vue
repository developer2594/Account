<template>
  <div class="special">
    <div class="special__container">
      <div class="special__whats">Что мы делаем?</div>
      <h2 class="special__title">Наша специализация</h2>
      <div class="special__technologi technologi-special">
        <div class="technologi-special__work">Вёрстка сайтов</div>
        <div class="technologi-special__icons">
          <IconsComp v-for="icon in icons" :key="icon.id" :specIcon="icon" />
        </div>
        <div class="technologi-special__text">
          Вёрстка сайтов из макета <span>figma</span> , <span>Adobe</span>
          <span>photoShop</span>, <span>Adobe X Designe</span>. Надёжная,
          адаптивная, кроссбраузерная, вёрстка на <span>HTML</span>,
          <span>CSS</span>, <span>SCSS</span>, и <span>JAVASCRIPT</span> в сроки
          и приемлемые цены
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/style.scss";
.special {
  @include adaptiveValue("padding-top", 60, 20);
  @include adaptiveValue("padding-bottom", 60, 20);
  &__container {
    padding: rem(40) rem(30);
  }
  //.special-whats
  &__whats {
    font-size: rem(18);
    line-height: em(21);
    color: $textColor;
  }
  //.special-title
  &__title {
    @include adaptiveValue("font-size", 45, 24);
    line-height: em(55);
  }
  //.special-technologi
  &__technologi {
  }
}

.technologi-special {
  // .technologi-special__title

  &__work {
    font-size: rem(22);
    line-height: em(34);
  }

  // .technologi-special__icons

  &__icons {
    display: flex;
    gap: rem(30);
    align-items: center;
    margin-bottom: rem(30);
    box-shadow: 0 5px 15px rgba(49, 49, 49, 0.5);
    border-radius: 5px;
    background-color: #fff;
    text-align: left;
    padding: rem(20);
  }
  &__text {
    font-size: rem(22);
    line-height: em(22);
    color: $textColor;
    & span {
      font-weight: 700;
      color: $mainColor;
    }
  }
}
</style>

<script>
import IconsComp from "@/components/HomeSpecIcon.vue";
export default {
  data: () => ({
    icons: [
      {
        id: "ic1",
        name: "figma.svg",
        alt: "icon figma",
        text: "Figma — графический редактор для совместного проектирования сайтов, приложений и других дизайнерских продуктов",
      },
      {
        id: "ic2",
        name: "psd.svg",
        alt: "icon psd",
        text: "psd",
      },
      {
        id: "ic3",
        name: "xd.svg",
        alt: "icon xd",
        text: "xd",
      },
      {
        id: "ic4",
        name: "html.svg",
        alt: "icon html",
        text: "html",
      },
      {
        id: "ic5",
        name: "css.svg",
        alt: "icon css",
        text: "css",
      },
      {
        id: "ic6",
        name: "sass.svg",
        alt: "icon sass",
        text: "sass",
      },
      {
        id: "ic7",
        name: "js.svg",
        alt: "icon js",
        text: "js",
      },
    ],
  }),
  components: { IconsComp },
};
</script>
