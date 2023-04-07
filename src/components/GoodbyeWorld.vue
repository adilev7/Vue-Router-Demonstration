<template>
  <div class="section">
    <h1>Goodbye <span class="country-name">{{ $route.params.country || 'World' }}</span></h1>
    <router-view v-if="$route.params.country"/>
    <div class="countries-wrap" v-else>
      <countries-list/>
    </div>
  </div>
</template>

<script setup>
import CountriesList from './CountriesList.vue'
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