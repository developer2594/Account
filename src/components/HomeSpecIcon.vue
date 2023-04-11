<template>
  <div class="technologi__icon">
    <img :src="path" :alt="alt" />
    <img src="@/assets/home/spec/figma.svg" :alt="alt" />
  </div>
</template>

<script>
export default {
  props: {
    alt: {
      type: String,
      required: true,
      default: "spec icon",
    },
    path: {
      type: String,
      required: true,
    },
  },
};
</script>
