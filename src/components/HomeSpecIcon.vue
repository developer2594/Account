<template>
  <div class="carts-block__cart">
    <div class="carts-block__icon">
      <img
        :src="require('../assets/home/special/' + specIcon.name)"
        :alt="specIcon.alt"
      />
    </div>
    <div class="carts-block__text">{{ specIcon.text }}</div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/style.scss";
.carts-block {
  // carts-block__cart
  &__cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: rem(250);
    padding: rem(15);
    box-shadow: rem(5) rem(5) rem(5) rem(5) rgba(49, 49, 49, 0.5);
    border-radius: 3px;
    // carts-block__icon
  }
  &__icon {
    width: rem(50);
    min-height: rem(50);
    display: flex;
    justify-content: center;
    margin-bottom: em(10);
  }
  // carts-block__text
  &__text {
    color: $textColor;
    min-height: 100%;
  }
}
</style>

<script>
export default {
  props: {
    specIcon: {
      alt: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
  },
};
</script>
