<template>
  <div>
    <form @submit.prevent="onSubmit()">
      <div class='container'>
        <div class='card'>
          <h1> Entrar </h1>
          <p v-if="error">Please fill all field</p>
          <div class='label-float'>
            <input type='text' name="email" v-model="email" paceholder='' required>
            <label id='userLabel' for='username'>Email</label>
          </div>

          <div class='label-float'>
            <input type='password' v-model="password" paceholder='' required>
            <label id='senhaLabel' for='password'>Senha</label>
            <i class="bi bi-eye-slash" aria-hidden="true"></i>
          </div>
          <p v-if="error" class="mt-6">Please fill all fields</p>
          <p v-if="errorSignUp && !error" class="mt-6">{{ errorSignUp }}</p>
          <div class='justify-center'>
            <button type="submit">Entrar</button>
          </div>

          <div class='justify-center'>
            <hr>
          </div>

          <p> Não tem uma conta?
            <a href='/cadastro.html'> Cadastre-se </a>
          </p>

        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "SignInForm",
  props: {
    errorSignIn: String,
  },
  setup(props, { emit }) {
    const email = ref("");
    const password = ref("");
    const error = ref(false);

    const onSubmit = () => {
      error.value = false;
      if (email.value && password.value) {
        emit("onSubmit", {
          email: email.value,
          password: password.value,
        });
      } else {
        error.value = true;
      }
    };
    return {
      error,
      email,
      password,
      onSubmit,
    };
  },
};
</script>