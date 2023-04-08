<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo header__image-ibg">
        <img src="@/assets/home/header/df.png" alt="logo" />
      </div>
      <div>{{ ScrinWidth }}</div>
      <div :class="{ open: open }" class="header__menu menu-header">
        <ul class="menu-header__list">
          <HeaderMenu
            v-for="i in menu"
            :key="i.item"
            :item="i.item"
            :url="i.url"
            :ScrinWidth="ScrinWidth"
          />
        </ul>
      </div>
      <BurgerComp
        @click="open = !open"
        :color="burger.color"
        :width="burger.width"
        :height="burger.height"
        :spanHeight="burger.spanHeight"
      />
    </div>
    <div class="header__circle">
      <img src="@/assets/home/header/Ellipse.png" alt="Ellipse" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "@/scss/style.scss";
.header {
  position: relative;
  background-color: $headerBG;
  z-index: 5;
  @include adaptiveValue("padding-top", 20, 5);
  @include adaptiveValue("padding-bottom", 20, 5);
  border: 1px solid green;

  // .header__container

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Gilroy-Bold";
    font-size: rem(18);
    line-height: 1.3em;
  }

  // .header__logo

  &__logo {
    width: 45px;
    height: 45px;
    display: flex;
    border-radius: 50%;
    border: 1px solid #074d94;
    align-items: center;
    overflow: hidden;
    padding: 2px;
    // .header__logo img
    & img {
      display: block;
      object-fit: contain;
    }
  }

  // .header__menu

  &__menu {
    @media all and (max-width: $mobile) {
      position: absolute;
      z-index: 5;
      display: flex;
      flex-direction: column;
      width: 100%;
      right: -101%;
      top: 99%;
      padding: 15px;
      font-size: 1.5rem;
      text-align: center;
      background-color: $headerBG;
      transition: all 0.8s ease 0s;
      &.open {
        transition: all 0.5s ease 0s;
        width: 100%;
        right: 0;
      }
    }
  }

  // .header__circle

  &__circle {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
    @media (max-width: $mobile) {
      bottom: 20%;
      right: -4%;
    }
  }
}
.menu-header {
  // .menu-header__list

  &__list {
    display: flex;
    gap: 1.875rem;
    margin: 0rem 1.25rem 0rem 0rem;
    @media (max-width: $mobile) {
      flex-direction: column;
    }
  }
}
</style>

<script>
import BurgerComp from "@/components/BurgerComp.vue";
import HeaderMenu from "@/components/HeaderMenu.vue";
export default {
  props: {
    ScrinWidth: {
      type: Number,
    },
  },
  name: "home-header",
  data: () => ({
    open: false,
    menu: [
      { item: "Контакты", url: "" },
      { item: "К портфолию", url: "" },
      { item: "en", url: "" },
    ],
    burger: {
      color: "#000",
      width: "30px",
      height: "18px",
      spanHeight: "2px",
    },
  }),
  components: {
    BurgerComp,
    HeaderMenu,
  },
};
</script>
