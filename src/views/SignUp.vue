<template>
  <mai>
    <h1 >Sign Up</h1>
    <SignUpForm @onSubmit="redirectToSignIn" :errorSignUp="errorSignUp" />
  </mai>
</template>

<script>
import SignUpForm from "@/components/SignUpForm.vue";
import router from "@/router";

import { useStore } from "vuex";
import { ref } from "vue";

export default {
  components: { SignUpForm },
  setup() {
    const store = useStore();
    const errorSignUp = ref("");

    const redirectToSignIn = (user) => {
      const foundUser = store.state.user.users?.find(
        (item) => item.email === user.email
      );

      errorSignUp.value = "";
      if (!foundUser) {
        store.dispatch("user/addUser", user);
        router.push({ name: "SignIn" });
      } else {
        errorSignUp.value = "Email is already used";
      }
    };

    return {
      errorSignUp,
      redirectToSignIn,
    };
  },
};
</script>