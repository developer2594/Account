<template>
  <li data-popup="#massageName" class="menu-header__item">
    <router-link to="#" class="menu-header__link">{{ item }}</router-link>
  </li>
</template>

<style lang="scss" scoped>
.menu-header {
  // .menu-header__link

  &__link {
    l &:hover {
      text-decoration: underline;
      color: #49ad09;
      -webkit-transition: all 0.3s ease 0s;
      -o-transition: all 0.3s ease 0s;
      transition: all 0.3s ease 0s;
    }
  }
}
</style>

<script>
export default {
  props: {
    item: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
};
</script>
