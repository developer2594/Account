<template>
  <div class="technologi__icon">
    <img
      :src="require('../assets/home/special/' + specIcon.name)"
      :alt="specIcon.alt"
    />
  </div>
</template>

<script>
export default {
  props: {
    specIcon: {
      alt: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
  },
};
</script>
