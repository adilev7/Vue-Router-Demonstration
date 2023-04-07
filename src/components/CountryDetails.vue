<template>
    <ul class="country-details card shadow">
      <li v-for="(fieldValue, fieldKey) in props.country" :key="`${fieldKey}-${fieldValue}`">
        <label :for="`${fieldKey}-${fieldValue}`">
          {{ fieldKey.replaceAll('-', ' ') }}:
        </label>
        <p :id="`${fieldKey}-${fieldValue}`">
          {{ fieldValue }}
        </p>
      </li>
    </ul>
</template>

<script setup>
  import { defineProps } from "vue";
  const props = defineProps({ country: Object });
</script>

<style scoped>
  ul.country-details {
    width: 100%;
    list-style-type: none;
  }
  ul.country-details li {
    display: flex;
    gap: 2em;
    margin-bottom: 1em;
    text-align: left;
    text-transform: capitalize;
  }
  ul.country-details li label {
    flex-basis: calc(50% - 1em);
    font-weight: bold;
  }
  ul.country-details li p {
    flex-basis: calc(50% - 1em);
  }
</style>