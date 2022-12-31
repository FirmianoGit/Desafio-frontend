<template>
  <div id="teste">

    <p>Encerrar {{ action }}</p>

    <ul class="mt-4 text-lg font-bold">
        <li v-if="action === 'sign in or sign up'">
          <router-link to="/signin" class="hover:underline"
            >➡Sign In</router-link
          >
        </li>
        <li v-if="action === 'sign in or sign up'">
          <router-link to="/signup" class="hover:underline"
            >➡Sign Up</router-link
          >
        </li>
        <li v-else>
          <router-link to="/account" class="hover:underline"
            >➡Your Account</router-link
          >
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
        store.state.user.isLoggedIn
          ? "access to your account"
          : "sign in or sign up"
      ),
    };
  },
};
</script>

<style lang="scss" scoped>
#teste{
  background: red;
}
</style>