import { createApp } from "vue";
import App from "./App.vue";
import basa from "@/base/scripts/app";
import router from "./router";

createApp(App).use(router).use(basa).mount("#app");
