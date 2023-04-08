<template>
  <div class="section">
    <h1>Hello <span class="country-name">{{ $route.params.country || 'World' }}</span></h1>
    <router-view v-if="$route.params.country"/>
    <div class="countries-wrap" v-else>
      <countries-list/>
    </div>
  </div>
</template>

<script setup>
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';
import CountriesList from './CountriesList.vue'

onBeforeRouteUpdate((to, from, next) => {
  console.log('Component beforeRouteUpdate', {from: from.path, to: to.path});
  next();
});

onBeforeRouteLeave((to, from, next) => {
  console.log('Component beforeRouteLeave', {from: from.path, to: to.path});
  next();
});
</script>

<style scoped>
  h1 {
    color: #212149;
  }
  h1 .country-name {
    color: orange
  }
  ul {
    list-style-type: none;
  }
</style>