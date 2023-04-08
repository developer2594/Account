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
            :icon="i.icon"
            :path="i.path"
          />
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
      { icon: "figma", path: "1" },
      { icon: "ps", path: "2" },
      { icon: "xd", path: "3" },
      { icon: "html", path: "4" },
      { icon: "css", path: "5" },
      { icon: "sass", path: "6" },
      { icon: "js", path: "7" },
    ],
    components: { IconsComp },
  }),
};
</script>
