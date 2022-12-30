<template>
  <Header title="VueLogin" home="/" />
  <router-view />
</template>

<script>
import Header from "@/components/TheHeader.vue";

import { useStore } from "vuex";
import { onMounted } from "vue";

export default {
  components: { Header },
  setup() {
    const store = useStore();
    onMounted(() => store.dispatch("user/checkSession"));
    onMounted(() => store.dispatch("user/setUsers"));
  },
};
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
