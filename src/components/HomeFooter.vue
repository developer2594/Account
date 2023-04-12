<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__top">2022г. Услуги гарантированы</div>
      <div class="footer__bottom bottom-footer">
        <div class="bottom-footer__list">
          <div class="bottom-footer__contact">Контакты</div>
          <div class="bottom-footer__portfolio">К портфолию</div>
          <div class="bottom-footer__language">en</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/style.scss";
.footer {
  background-color: $headerBG;
  padding-bottom: rem(15);

  // .footer__container

  &__container {
    display: flex;
    justify-content: center;
    gap: rem(20);
    padding: rem(15);
    font-size: rem(18);
    font-weight: 700;
    @media (max-width: rem(550)) {
      padding: rem(15) rem(10);
      font-size: rem(16);
    }
    @media (max-width: $mobileSmall) {
      flex-direction: column;
      align-items: center;
    }
  }
}
.bottom-footer {
  // .bottom-footer__list

  &__list {
    display: flex;
    gap: rem(10);
  }
}
</style>
