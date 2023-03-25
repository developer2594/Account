<script>
export default {
  data: () => ({
    width: 0,
  }),
  components: {},
  created() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },
  methods: {
    onResize() {
      this.width = window.innerWidth;
    },
  },
};
</script>
