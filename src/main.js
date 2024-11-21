import "./assets/tailwind.css";
import "primeicons/primeicons.css";
import "@/assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

import App from "./App.vue";
import router from "./router";

// import { createAuth0 } from "@auth0/auth0-vue";
// import ProgressSpinner from "@/components/ProgressSpinner.vue";

import { setupECharts } from "./composables/echarts-setup"; // Import ECharts setup
import VChart from "vue-echarts"; // Import Vue ECharts component

setupECharts(); // Register the components

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("v-chart", VChart); // Register v-chart globally
// app.component('ProgressSpinner', ProgressSpinner);

// app.use(
//    createAuth0({
//       domain: "dev-jglih84mfm2amu4j.us.auth0.com",
//       clientId: "SrLFL68eLO0uolX6YjzEbjurhDu87Aw9",
//       authorizationParams: {
//          redirect_uri: window.location.origin,
//       },
//    }),
// );

app.use(PrimeVue, {
   unstyled: false,
   theme: {
      preset: Aura,
      options: {
         darkModeSelector: ".tw-dark",
      },
   },
});

app.mount("#app");
