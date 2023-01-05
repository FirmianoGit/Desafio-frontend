<template>
  <div class="container-app">
    <h1> Olá, {{ name }}</h1>
    <button @click="logout()"> Sair</button>
  </div>

</template>

<script>
import router from "@/router";

import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const logout = () => {
      store.dispatch("user/logout");
      router.push({ name: "Home" });
    };

    return {
      name: computed(() => store.state.user.name),
      logout,
    };
  },
};
</script>

<style lang="scss" scoped>
$orange: #f49448;
$purple: #272262;
$violet: #4038a0;
$body: #191c21;
$card: #ffffff80;
$white: #fff;

.container-app {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;

  h1{
    color:$orange;
  }
  button {
    font-weight: bold;
    font-size: 12pt;
    margin-top: 20px;
    border-radius: 5px;
    padding: 0.5rem 2rem;
    transition: all 0.3s ease-out;
      background: transparent;
      border-color: $orange;
      color: $violet;
      border: 2px solid $orange;
      cursor: pointer;

      &:hover {
        background: $orange;
        color: $white;
      }
    
  }
}
</style>