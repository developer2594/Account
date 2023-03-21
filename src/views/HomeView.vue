<template>
  <div class="home">
    <div class="container">
      <h1 class="main__title">мы верстаем сайты<span> для вас</span></h1>
      <div class="main__text">Качественно, надёжно, адаптивно, и в сроки</div>
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

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>

<style lang="scss" scoped>
.home {
  min-height: 100%;
  display: grid;

  overflow: hidden;
  grid-template-rows: auto 1fr auto;
}
.container {
  display: flex;
  flex-direction: column;
}
.main {
  /* .main__title */

  &__title {
    font-size: 3rem;
    font-weight: 700;
    & span {
      color: rgb(14, 175, 14);
    }
  }

  /* .main__text */

  &__text {
  }

  /* .main__buttons */

  &__buttons {
  }
}
.buttons-main {
  /* .buttons-main__button */

  &__button {
  }
}
.button {
}
</style>
