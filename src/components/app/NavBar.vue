<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('open')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{ formattedDate }}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            class="dropdown-trigger black-text"
            href="#"
            data-target="dropdown1"
            ref="dropdown"
          >
            name:
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown1" class="dropdown-content">
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a @click.prevent="logout" href="#" class="black-text">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import M from "materialize-css/dist/js/materialize.min";
import formatDateMixin from "@/mixins/FormatDate";
import { getAuth, signOut } from "firebase/auth";

export default {
  data: () => ({
    date: new Date(),
    interval: null,
    dropdown: null,
    format: "",
    auth: getAuth(),
  }),
  mounted() {
    this.interaval = setInterval(() => {
      this.date = new Date();
    }, 1000);

    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: true,
    });
  },
  mixins: [formatDateMixin],

  computed: {
    // name() {
    //   console.log("name", this.$store.getters.info.email);
    //   return this.$store.getters.info.name;
    // },
    formattedDate() {
      return this.formatDate(this.date).replace(",", "");
    },
  },

  methods: {
    logout() {
      signOut(this.auth);
      console.log("logout");
      this.$router.push("/login?message=logout");
    },
  },
  beforeUnmount() {
    clearInterval(this.interval);
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy();
    }
  },
};
</script>
