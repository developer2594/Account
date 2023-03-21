<template>
  <header class="header">
    <div class="container">
      <div class="header__logo">
        <img src="../assets/header/df.png" alt="logo" />
      </div>
      <div class="header__menu menu-header">
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
      <div class="header__icon-menu icon-menu">
        <span></span>
      </div>
    </div>
    <div class="header__circle">
      <img src="../assets/header/Ellipse.png" alt="elipse" />
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComp",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  background-color: #f2f2f2;
  &__menu {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-left: 0.8rem;
  }
  &__logo {
    position: relative;
    display: flex;
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #074d94;
    align-items: center;
    justify-content: center;
    padding: 2px;
    & img {
      position: absolute;
      object-fit: cover;
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
  }
  &__circle {
    position: absolute;
    top: -15%;
    right: -2%;
    @media (max-width: 767px) {
      top: -20%;
      right: -5%;
    }
  }
}
.container {
  padding: 1rem;
  @media (max-width: 767px) {
    padding: 0.8rem 1rem;
  }
  @media (max-width: 767px) {
    padding: 0.5rem 0.8rem;
  }
}

.menu-header {
  &__list {
    display: flex;
    justify-content: end;
    min-width: 100%;
    gap: 30px;
    @media (max-width: 480px) {
      gap: 15px;
    }
  }
}
.icon-menu {
  display: none;
}
</style>
