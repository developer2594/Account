<template>
  <div class="hello">
    <header class="header">
      <div class="header__container">
        <div class="header__logo">image</div>
        <div data-da=".menu-header__body, 768" class="header__menu menu-header">
          <ul class="menu-header__list">
            <li data-popup="#massageName" class="menu-header__item">
              <a href="" class="menu-header__link">Контакты</a>
            </li>
            <li class="menu-header__item">
              <a href="#port" class="menu-header__link">К портфолию</a>
            </li>
            <li class="menu-header__item">
              <a href="en-index.html" class="menu-header__link">en</a>
            </li>
          </ul>
        </div>
        <div class="menu-header__body"></div>
        <div class="header__icon-menu icon-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="header__circle">image</div>
    </header>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
