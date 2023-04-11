<template>
  <div class="special">
    <div class="container">
      <div class="spec-whats">Что мы делаем?</div>
      <h2 class="spec-title">Наша специализация</h2>
      <div class="spec-technologi">
        <div class="technologi__title">Вёрстка сайтов</div>
        <div class="technologi__icons">
          <IconsComp
            v-for="i in icons"
            :key="i.icon"
            :alt="i.alt"
            :path="i.path"
          />
          <!-- <div v-for="i in icons" :key="i" class="technologi__icon">
            <img src="@/assets/home/spec/figma.svg" :alt="i.alt" />
          </div> -->
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
      { alt: "figma", path: "@/assets/home/spec/figma.svg" },
      { alt: "2", path: "@/assets/home/spec/df.png" },
      { alt: "psd", path: "/assets/home/spec/psd.svg" },
      { alt: "xd", path: "/assets/home/spec/xd.svg" },
      { alt: "html", path: "/assets/home/spec/html.svg" },
      { alt: "css", path: "/assets/home/spec/css.svg" },
      { alt: "sass", path: "/assets/home/spec/sass.svg" },
      { alt: "js", path: "/assets/home/spec/js.svg" },
    ],
  }),
  components: { IconsComp },
};
</script>
