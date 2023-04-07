<template>
  <ul class="countries-list card shadow" v-if="countries.length">
    <li class="country-item" v-for="country in countries" :key="country">
      <router-link :to="`${$route.path}/${country}`">
        {{ country }}
      </router-link>
    </li>
  </ul>
  <div class="loading" v-else>
    Loading...
  </div>
</template>

<script setup>
  import { onBeforeMount, ref } from "vue";
  const countries = ref([]);

  onBeforeMount(async () => {
    try {
      const countriesResponse = await fetch('https://restcountries.com/v3.1/all?fields=name', {
         headers: { 'Content-Type': 'application/json' }
      });
      const countriesData = await countriesResponse.json();
      countries.value = countriesData.map((country) => country.name.common);
    } catch(err) {
      console.log(err);
    }
  })
</script>
<style scoped>
  ul.countries-list {
    display: grid;
    grid-template: auto / repeat(4, 1fr);
    gap: 1em;
    padding: 4em;
    max-height: 100vh;
    overflow: auto;
    text-align: left;
  }
  ul.countries-list a {
    text-decoration: none;
    color: #212149;
    transition: color 0.1s ease-in-out;
  }
  ul.countries-list a:hover {
    text-decoration: none;
    color: orange;
  }
</style>