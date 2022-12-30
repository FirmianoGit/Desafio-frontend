<template>
  <mai>
    <h1 >Sign Up</h1>
    <SignUpForm @onSubmit="redirectToSignIn" />
  </mai>
</template>

<script>
import SignUpForm from "@/components/SignUpForm.vue";
import router from "@/router";

import { useStore } from "vuex";

export default {
  components: { SignUpForm },
  setup() {
    const store = useStore();
    const redirectToSignIn = (user) => {
      store.dispatch("user/addUser", user);
      router.push({ name: "SignIn" });
    };

    return {
      redirectToSignIn,
    };
  },
};
</script>
