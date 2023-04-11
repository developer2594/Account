<template>
  <div class="special">
    <div class="container">
      <div class="special-whats">Что мы делаем?</div>
      <h2 class="special-title">Наша специализация</h2>
      <div class="special-technologi technologi-special">
        <div class="technologi-special__title">Вёрстка сайтов</div>
        <div class="technologi-special__icons">
          <IconsComp v-for="icon in icons" :key="icon.id" :specIcon="icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped></style>

<script>
import IconsComp from "@/components/HomeSpecIcon.vue";
export default {
  data: () => ({
    icons: [
      {
        id: "ic1",
        name: "figma.svg",
        alt: "icon figma",
      },
      {
        id: "ic2",
        name: "psd.svg",
        alt: "icon psd",
      },
      {
        id: "ic3",
        name: "xd.svg",
        alt: "icon xd",
      },
      {
        id: "ic4",
        name: "html.svg",
        alt: "icon html",
      },
      {
        id: "ic5",
        name: "css.svg",
        alt: "icon css",
      },
      {
        id: "ic6",
        name: "sass.svg",
        alt: "icon sass",
      },
      {
        id: "ic7",
        name: "js.svg",
        alt: "icon js",
      },
    ],
  }),
  components: { IconsComp },
};
</script>
