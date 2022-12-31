<template>
  <main>
    <SignForm  type="signin"  :errorMsg="errorSignIn"  @onSubmit="redirectToAccount" />
  </main>
</template>

<script>
import SignForm from "@/components/SignForm.vue";
import router from "@/router";

import { ref } from "vue";
import { useStore } from "vuex";

export default {
  components: { SignForm },
  setup() {
    const store = useStore();
    const errorSignIn = ref("");

    const redirectToAccount = (user) => {
      const foundUser = store.state.user.users?.find(
        (item) => item.email === user.email && item.password === user.password
      );

      errorSignIn.value = "";
      if (foundUser) {
        store.dispatch("user/authentication", foundUser);
        router.push({ name: "UserAccount" });
      } else {
        errorSignIn.value = alert('foi');
        setTimeout(() => window.location.reload(), 3600)
      }
    };

    return {
      redirectToAccount,
      errorSignIn,
    };
  },
};
</script>