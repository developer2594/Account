<template>
  <div class="header__logo header__image-ibg">
    <img />
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
};
</script>
