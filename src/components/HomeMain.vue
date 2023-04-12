<template>
  <div class="main">
    <div class="main__container">
      <h1 class="main__title">мы верстаем сайты<span> для вас</span></h1>
      <div
        :style="{
          marginBottom: ScrinWidth / 22 + 'px',
        }"
        class="main__text"
      >
        Качественно, надёжно,<span> адаптивно, и в сроки</span>
      </div>

      <div class="main__buttons buttons-main">
        <button
          data-popup="#massageName"
          type="submit"
          class="buttons-main__button button"
        >
          Контакты
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/scss/style.scss";

.main {
  position: relative;
  z-index: 2;
  display: flex;
  @include adaptiveValue("max-height", 400, 250);
  @include adaptiveValue("padding-top", 20, 5);
  @include adaptiveValue("padding-bottom", 20, 5);
  background-color: #f2f2f2;

  // .main__container
  &__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
    @media (max-width: $mobileSmall) {
      margin: 0;
    }
  }

  // .main__title
  &__title {
    text-align: center;
    font-family: "Iinter";
    font-weight: 800;
    color: $mainColor;
    @include adaptiveValue("font-size", 78, 28);
    line-height: 1.1em;
    &:not(:last-child) {
      margin-bottom: 0.5em;
    }
    & span {
      margin: rem(0) rem(0) rem(0) em(10, 78);
      color: $mainColorGreen;
      @media (max-width: $mobile) {
        display: block;
      }
    }
  }

  // .main__text

  &__text {
    text-align: center;
    font-family: "Gilroy-Medium";
    @include adaptiveValue("font-size", 24, 14);
    line-height: 1.3;
    color: $textColor;
    @media (max-width: $mobile) {
      & span {
        display: block;
      }
    }
  }
}
.buttons-main {
  // .buttons-main__button

  &__button {
    padding: rem(18) rem(65);
    @media (max-width: $mobile) {
      padding: rem(10) rem(40);
    }
  }
}
</style>
<script>
export default {
  name: "Home-Main",
  props: {
    ScrinWidth: {
      type: Number,
    },
  },
  data: () => ({
    scrin: 0,
  }),
};
</script>
