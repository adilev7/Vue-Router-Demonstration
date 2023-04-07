<template>
  <div class="section not-found page-width">
    <p>Looks like you got lost...</p>
    <router-link class="btn" to="/">Go back to home</router-link>
  </div>
</template>

<style scoped>
  .not-found {
    text-align: center;
  }
  .not-found p {
    margin-bottom: 1em;
  }
</style>