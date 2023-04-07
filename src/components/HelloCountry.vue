<template>
  <div class="country-section" v-if="country && country['common-name']">
    <country-details :country="country" />
  </div>
  <div class="loading-state" v-else>Loading...</div>
  <router-link to="/hello" class="btn">Say hello to other countries</router-link>
</template>

<script setup>
  import CountryDetails from './CountryDetails.vue'
  import { onBeforeMount, ref, defineProps } from "vue";
  import { useRouter } from "vue-router";
  const router = useRouter();
  const props = defineProps({ country: String })
  const country = ref('');
  onBeforeMount(async () => {
    try {
      const countriesResponse = await fetch(`https://restcountries.com/v3.1/name/${props.country}?fields=name,languages,capital`, {
         headers: { 'Content-Type': 'application/json' }
      });
      const countryData = await countriesResponse.json();
      if(!countryData.length || !countryData[0]) {
        router.replace('/notFound');
      }
      country.value = {
        'common-name': countryData[0].name.common,
        'official-name': countryData[0].name.official,
        'language': Object.values(countryData[0].languages)[0],
        'capital': countryData[0].capital[0]
      };
    } catch(err) {
      console.log(err);
    }
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p {
    text-transform: capitalize;
  }
</style>