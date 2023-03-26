<template>
  <div
    @click="$emit('click')"
    :style="{
      width: width,
      height: height,
    }"
    class="header__icon-menu icon-menu"
  >
    <span></span>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/variables.scss";
.icon-menu {
  display: none;
  @media (max-width: $mobile) {
    display: block;
    position: relative;
    cursor: pointer;
    z-index: 5;
    span,
    &::before,
    &::after {
      content: "";
      transition: all 0.3s ease 0s;
      left: 0px;
      position: absolute;
      width: 100%;
      height: v-bind("spanHeight");
      background-color: v-bind("color");
    }
    &::before {
      top: 0px;
    }
    &::after {
      bottom: 0px;
    }
    span {
      top: calc(50% - 1px);
    }
    .menu-open & {
      span {
        transform: scale(0);
      }
      &::before {
        transform: rotate(-45deg);
        top: calc(50% - 1px);
      }
      &::after {
        transform: rotate(45deg);
        bottom: calc(50% - 1px);
      }
    }
  }
}
</style>

<script>
export default {
  emits: ["click"],
  props: {
    color: {
      type: String,
      required: true,
      default: "#000",
    },
    width: {
      type: String,
      required: true,
      default: "30px",
    },
    height: {
      type: String,
      required: true,
      default: "18px",
    },
    spanHeight: {
      type: String,
      required: true,
      default: "2px",
    },
  },
};
</script>
