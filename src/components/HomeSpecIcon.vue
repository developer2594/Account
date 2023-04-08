<template>
  <div class="technologi__icon">
    <img src="" alt="techno icon" />
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
};
</script>
