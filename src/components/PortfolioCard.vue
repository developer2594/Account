<template>
  <article class="body-portfolio__card body-portfolio">
    <router-link
      target="_blank"
      :to="PortCards.portUrl"
      class="body-portfolio__portUrl"
    >
      <img
        :src="require('../assets/portfolio-card/' + PortCards.src)"
        :alt="PortCards.alt"
      />
    </router-link>
    <div class="body-portfolio__title">
      <span>{{ PortCards.lable }}</span> {{ PortCards.name }}
    </div>
    <router-link
      target="_blank"
      :to="PortCards.url"
      class="body-portfolio__link"
      >{{ PortCards.urlName }}</router-link
    >
  </article>
</template>

<script>
export default {
  props: {
    PortCards: {
      src: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      lable: {
        type: String,
      },
      portUrl: {
        type: String,
        required: true,
      },
      url: {
        type: String,
      },
      urlName: { type: String },
      alt: {
        type: String,
        required: true,
        default: "image",
      },
    },
  },
};
</script>
