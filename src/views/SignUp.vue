<template>
  <main>
    <h1 >Sign Up</h1>
    <SignForm type="signup" :errorMsg="errorSignUp" @onSubmit="redirectToSignIn" />
  </main>
</template>

<script>
import SignForm from "@/components/SignForm.vue";
import router from "@/router";

import { useStore } from "vuex";
import { ref } from "vue";

export default {
  components: { SignForm },
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
