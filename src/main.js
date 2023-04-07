import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import HelloWorld from "./components/HelloWorld.vue";
import GoodbyeWorld from "./components/GoodbyeWorld.vue";
import HelloCountry from "./components/HelloCountry.vue";
import GoodbyeCountry from "./components/GoodbyeCountry.vue";
import NotFound from "./components/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/hello"
    },
    {
      path: "/hello",
      component: HelloWorld,
      children: [{
        path: ':country',
        component: HelloCountry,
        props: true
      }],
    },
    {
      path: "/goodbye",
      component: GoodbyeWorld,
      children: [{
        path: ':country',
        component: GoodbyeCountry,
        props: true
      }]
    },
    {
      path: "/:notFound(.*)",
      component: NotFound
    }
  ]
});

createApp(App).use(router).mount("#app");
