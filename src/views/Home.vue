<template>
  <div>

    <p>Encerrar {{ action }}</p>

    <ul>
      <li v-if="action === 'sign in'">
        <router-link to="/account">Your Account</router-link>
      </li>
      <li v-else>
        <router-link to="/signin">Sign In</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "Home",
  setup() {
    const store = useStore();
    return {
      action: computed(() =>
        store.state.user.isLoggedIn ? "access" : "sign in"
      ),
    };
  },
};
</script>