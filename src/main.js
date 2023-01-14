import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import SwiperMain from "./components/SwiperMain.vue";
import Soon from "./components/Soon.vue";

import "./assets/main.css";

const routes = [
  {
    path: "/",
    name: "home",
    component: SwiperMain,
  },
  {
    path: "/soon",
    name: "soon",
    component: Soon,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
