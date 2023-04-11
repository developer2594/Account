<template>
  <!-- <div class="technologi__icon"> -->
  <img :src="path" alt="icons.alt" />
  <!-- </div> -->
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
      default: "@/assets/home/spec/figma.svg",
    },
  },
};
</script>
