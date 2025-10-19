import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AOS from "aos";
import "aos/dist/aos.css";

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.use(VueSweetalert2);
app.use(router);

app.mount("#app");

AOS.init({
  duration: 1000,
  once: true,
  offset: 120,
});
