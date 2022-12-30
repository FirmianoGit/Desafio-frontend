<template>
  <div>
<router-view ></router-view>
  </div>
</template>

<script>
/* import SingUp from './views/SignUp.vue'
import Login from './views/Login.vue' */

export default {
  components:{
  /*   SingUp,
    Login */
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
