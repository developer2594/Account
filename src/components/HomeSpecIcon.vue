<template>
  <div class="icons">
    <div class="technologi-icon">
      <img
        :src="require('../assets/home/special/' + specIcon.name)"
        :alt="specIcon.alt"
      />
    </div>
    <div class="technologi-icon__text">{{ specIcon.text }}</div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/style.scss";
.icons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: rem(250);
  padding: rem(10);
  box-shadow: rem(5) rem(5) rem(5) rem(5) rgba(49, 49, 49, 0.5);
  border-radius: 3px;
}
.technologi-icon {
  width: rem(50);
  min-height: rem(50);
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: em(10);
  &__text {
    font-size: rem(22);
    line-height: em(22);
    color: $textColor;
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
