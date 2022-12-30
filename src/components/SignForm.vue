<template>
  <div>
    <form @submit.prevent="onSubmit()">
      <div class='container'>
        <div class='card'>
          <h1> Entrar </h1>
          <p v-if="error">Please fill all field</p>
          <div class='label-float'>
            <input type='text' v-model="username" paceholder='' required>
            <label id='userLabel' for='username'>Usuário</label>
          </div>

          <div class='label-float'>
            <input type='password' v-model="password" paceholder='' required>
            <label id='senhaLabel' for='password'>Senha</label>
            <i class="bi bi-eye-slash" aria-hidden="true"></i>
          </div>

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
    error: Boolean,
  },
  setup(props, { emit }) {
    const username = ref("");
    const password = ref("");
    const error = ref(false);

    const onSubmit = () => {
      error.value = false;
      if (username.value && password.value) {
        emit("onSubmit", {
          username: username.value,
          password: password.value,
        });
        username.value = "";
        password.value = "";
      } else {
        error.value = true;
      }
    };
    return {
      error,
      username,
      password,
      onSubmit,
    };
  },
};
</script>