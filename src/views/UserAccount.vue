<template>
  <div>
<button @click="logout()"> Logout</button>
   <h1> Olá, {{ name }}</h1>
  </div>
</template>

<script>
import router from "@/router";

import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const logout = () => {
      store.dispatch("user/logout");
      router.push({ name: "Home" });
    };

    return {
      name: store.state.user.name,
      logout,
    };
  },
};
</script>