<template>
  <nav>
    <h1>Welcome to home page</h1>
    <router-link to="/">Home</router-link> |
    <router-link to="/client-list"> Client list</router-link>
    <router-link to="/add-client"> |  Add client</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
