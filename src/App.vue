<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
        VueRouter
      </router-link>
      <ul>
        <li>
          <router-link to="/hello">Hello</router-link>
        </li>
        <li>
          <router-link to="/goodbye">Goodbye</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <main class="page-width">
    <router-view />
  </main>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

nav {
  display: flex;
  gap: 2em;
  width: 100%;
  padding: 1em;
  background-color: rgb(33, 33, 73);
  color: #fff;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

nav .logo {
  font-size: 2em;
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-decoration: none;
  color: #fff;
}

nav ul {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  list-style-type: none;
}

nav ul li a {
  padding: 1em;
  border-radius: 5px;
  text-decoration: none;
  color: #fff;
  transition: all 0.1s ease-in-out;
}

nav ul li a:hover {
  background-color: rgb(14, 14, 32);
  color: rgb(202, 131, 0);
}

nav ul li a:active,
nav ul li a.is-active {
  text-decoration: underline;
  background-color: rgb(14, 14, 32);
  color: orange;
}

.page-width {
  margin: 0 auto;
  padding: 10%;
}

.card {
  margin-top: 1em;
  margin-bottom: 1em;
  padding: 1em;
  background: white;
  border-radius: 10px;
  transition: border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.shadow {
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
    0 0 0 2px rgb(190, 190, 190),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
}

.btn {
  display: block;
  width: fit-content;
  margin: 0 auto;
  padding: 0.5em;
  text-decoration: initial;
  border-radius: 5px;
  border: 2px solid rgb(14, 14, 32);
  background-color: rgb(14, 14, 32);
  color: orange;
  font-weight: bold;
  transition: all 0.1s ease-in-out;
}

.btn:hover {
  background-color: transparent;
  color: rgb(14, 14, 32);
}

.section {
  width: fit-content;
  margin: 0 auto;
  text-align: center;
}

.loading-state {
  margin: 1em;
  padding: 1em;
}
</style>
