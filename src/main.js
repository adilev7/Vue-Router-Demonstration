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
      name: 'hello-world',
      path: "/hello",
      component: HelloWorld,
      children: [{
        name: 'hello-country',
        path: ':country',
        component: HelloCountry,
        props: true
      }],
    },
    {
      name: 'goodbye-world',
      path: "/goodbye",
      component: GoodbyeWorld,
      children: [{
        name: 'goodbye-country',
        path: ':country',
        component: GoodbyeCountry,
        props: true
      }]
    },
    {
      path: "/:notFound(.*)",
      component: NotFound
    }
  ],
  linkActiveClass: 'is-active',
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  }
});

createApp(App).use(router).mount("#app");
