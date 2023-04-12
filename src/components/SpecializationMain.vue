<template>
  <div class="special">
    <div class="special__container">
      <div class="special__whats">Что мы делаем?</div>
      <h2 class="special__title">Наша специализация</h2>
      <div class="special__block block-special">
        <div class="block-special__work">
          Front-end разработка и вёрстка сайтов и технологии
        </div>
        <div class="block-special__carts carts-block">
          <IconsComp v-for="icon in icons" :key="icon.id" :specIcon="icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/style.scss";
.special {
  @include adaptiveValue("padding-top", 30, 5);
  @include adaptiveValue("padding-bottom", 30, 2);
  &__container {
    @include adaptiveValue("padding", 30, 10);
  }
  //.special-whats
  &__whats {
    font-size: rem(18);
    color: $textColor;
  }
  //.special-title
  &__title {
    @include adaptiveValue("font-size", 45, 24);
    line-height: em(30);
  }
}

.block-special {
  // .block-special__title

  &__work {
    font-size: rem(22);
    line-height: em(16);
    &:not(:last-child) {
      margin-bottom: em(15);
    }
  }
  // .block-special__icons

  &__carts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(rem(250), 1fr));
    justify-items: center;
    gap: rem(20);
    margin-bottom: rem(30);
    box-shadow: 0 5px 15px rgba(49, 49, 49, 0.5);
    border-radius: 5px;
    background-color: #fff;
    padding: rem(20);
    @media (max-width: em(620)) {
      grid-template-rows: 1fr;
    }
  }
}
</style>

<script>
import IconsComp from "@/components/HomeSpecIcon.vue";
export default {
  data: () => ({
    icons: [
      {
        id: "ic1",
        name: "figma.svg",
        alt: "icon figma",
        text: "Figma — графический редактор для совместного проектирования сайтов, приложений и других дизайнерских продуктов",
      },
      {
        id: "ic2",
        name: "psd.svg",
        alt: "icon psd",
        text: "PSD формат представляет из себя изображение, которое было сформировано в программе Adobe Photoshop, являющейся одним из самых многофункциональных и популярных графических редакторов на сегодняшний день.",
      },
      {
        id: "ic3",
        name: "xd.svg",
        alt: "icon xd",
        text: "Adobe XD можно назвать неким аналогом фотошопа для осуществления работ по прототипированию. По сути, сейчас эта программа является наиболее быстрым, надежным решением для UX-дизайна, которое подходит как маленьким, так и большим компаниям со штатом сотрудников свыше 10 тысяч человек.",
      },
      {
        id: "ic4",
        name: "html.svg",
        alt: "icon html",
        text: "HTML (от английского HyperText Markup Language) — это язык гипертекстовой разметки текста. Он нужен, чтобы размещать на веб-странице элементы: текст, картинки, таблицы и видео.",
      },
      {
        id: "ic5",
        name: "css.svg",
        alt: "icon css",
        text: "CSS используется для определения стилей (правил) оформления документов — включая дизайн, вёрстку и вариации макета для различных устройств и размеров экрана. У такого способа форматирования несколько достоинств:",
      },
      {
        id: "ic6",
        name: "sass.svg",
        alt: "icon sass",
        text: "SASS - это препроцессор, позволяющий писать код для стилей CSS, используя всевозможные: переменные, циклы, миксины, функции и многое другое. Многие слышали про SASS и SCSS и думают что это разные технологии. На самом деле, обе технологии являются один и тем же и отличаются лишь синтаксисом написания.",
      },
      {
        id: "ic7",
        name: "js.svg",
        alt: "icon js",
        text: "JavaScript — это язык программирования, который используют для написания frontend- и backend-частей сайтов, а также мобильных приложений. Часто в текстах и обучающих материалах название языка сокращают до JS. Это язык программирования высокого уровня, то есть код на нем понятный и хорошо читается.",
      },
    ],
  }),
  components: { IconsComp },
};
</script>
