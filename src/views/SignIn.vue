<template>
  <main>
    <h1>
      Sign In to get a surprise
    </h1>
    <FormSignIn @onSubmit="redirectToAccount" />
  </main>
</template>

<script>
import FormSignIn from "@/components/FormSignIn.vue";
import router from "@/router";

import { useStore } from "vuex";

export default {
  components: { FormSignIn },
  setup() {
    const store = useStore();

    const redirectToAccount = () => {
      store.dispatch("user/authentication");
      router.push({ name: "Home" });
    };

    return {
      redirectToAccount,
    };
  },
};
</script>
