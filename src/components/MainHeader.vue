<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <img src="@/assets/home/header/df.png" alt="logo" />
      </div>
      <div :class="{ open: menuOpen }" class="header__menu menu-header">
        <ul class="menu-header__list">
          <li
            v-for="i in menu"
            :key="i.item"
            data-popup="#massageName"
            class="menu-header__item"
          >
            <router-link to="#" class="menu-header__link">{{
              i.item
            }}</router-link>
          </li>
        </ul>
      </div>
      <div @click.prevent="$emit('open')" class="header__icon-menu icon-menu">
        <span></span>
      </div>
    </div>
    <div class="header__circle">
      <img src="@/assets/home/header/Ellipse.png" alt="Ellipse" />
    </div>
  </header>
</template>

<style src="@/css/MainStyle.css"></style>

<script>
export default {
  name: "main-header",
  data: () => ({
    menu: [
      { item: "Контакты", url: "" },
      { item: "К портфолию", url: "" },
      { item: "en", url: "" },
    ],
  }),
  methods: {},
};
</script>
