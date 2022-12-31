<template>
  <div>
    <form @submit.prevent="onSubmit()">
      <div class='container'>
        <div class='card'>
          <h1> Entrar </h1>
          <p v-if="error">Please fill all field</p>

          <div v-if="type === 'signup'" class='label-float'>
            <input type="text" name="username" placeholder="" v-model="username" required />
            <label for="username">Usuário</label>
          </div>

          <div class='label-float'>
            <input type='text' name="email" paceholder='' v-model="email" required>
            <label for='email'>Email</label>
            <i class="bi bi-eye-slash" aria-hidden="true"></i>
          </div>

          <div class='label-float'>
            <input type='password' name="password" id='password' paceholder='' v-model="password" required>
            <label for='password'>Password</label>
            <i class="bi bi-eye-slash" aria-hidden="true"></i>
          </div>

          <p v-if="error">Please fill all fields</p>
          <p v-else-if="errorMsg">{{ errorMsg }}</p>

          <div class='justify-center'>
            <button type="submit">{{ btnText }}</button>
          </div>

          <div v-if="type === 'signin'">
            <div class='justify-center'>
              <hr>
            </div>
            <p> Não tem uma conta?
              <router-link to="/signup">Cadastre-se</router-link>
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "SignForm",
  props: {
    type: String,
    errorMsg: String,
  },
  setup(props, { emit }) {
    const username = ref("");
    const password = ref("");
    const email = ref("");
    const error = ref(false);

    const onSubmit = () => {
      let userData = {};

      switch (props.type) {
        case "signup":
          error.value = !(username.value && password.value && email.value);
          userData = {
            username: username.value,
            password: password.value,
            email: email.value,
          };
          break;
        case "signin":
          error.value = !(email.value && password.value);
          userData = {
            email: email.value,
            password: password.value,
          };
          break;
        default:
          throw new Error("Type form unknown");
      }

      !error.value && emit("onSubmit", userData);
    };

    return {
      error,
      username,
      password,
      email,
      onSubmit,
      btnText: computed(() => (props.type == "signup" ? "Cadastrar" : "Entrar")),
    };
  },
};
</script>


<style lang="scss" scoped>
$orange: #f49448;
$purple: #272262;
$violet: #4038a0;
$body: #191c21;
$card: #ffffff80;
$white: #fff;
$error: #ff0000;
$bg-error: #ffbbbb;
$success: #00bb00;
$bg-success: #bbffbe;
$disable: #cccc;
$grey: #666666;

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: $orange;
}

.justify-center {
  display: flex;
  justify-content: center;
}

.label-float {
  input {
    width: 100%;
    padding: 5px;
    display: inline-block;
    border-bottom: 2px solid $orange;
    background: transparent;
    outline: none;
    border-left: none;
    border-right: none;
    border-top: none;

    &:focus {
      border-bottom: 2px solid $orange;

      + {
        label {
          font-size: 13px;
          margin-top: 0;
          color: $violet;
        }
      }
    }

    &:valid {
      border-bottom: 2px solid $orange;

      + {
        label {
          font-size: 13px;
          margin-top: 0;
          color: $violet;
        }
      }
    }
  }

  position: relative;
  padding-top: 13px;
  margin-top: 5%;
  margin-bottom: 5%;

  label {
    color: $purple;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 13px;
    transition: all 0.3s ease-out;
  }
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.card {
  background: $card;
  padding: 5rem;
  border-radius: 5%;
  box-shadow: 3px 3px 1px 0px #00000060;
  min-width: 180px;
  font-size: 16px;
  transition: all 0.3s ease-out;
  border-radius: 1rem;
  width: 28rem;
}

button {

  font-weight: bold;
  font-size: 12pt;
  margin-top: 20px;
  border-radius: 5px;
  padding: 0.5rem 2rem;
  transition: all 0.3s ease-out;

  &:disabled {
    background: $disable;
    color: $grey;
    cursor: auto;

  }

  &:enabled {
    background: transparent;
    border-color: $orange;
    color: $violet;
    border: 2px solid $orange;
    cursor: pointer;

    &:hover {
      background: $orange;
      color: $white;
    }
  }
}

hr {
  margin: 10% 0;
  width: 60%;
  background: $white;
  height: 2px;
}

p {
  color: $purple;
  font-size: 14pt;
  text-align: center;
}

a {
  color: $violet;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.2s ease-out;

  &:hover {
    filter: brightness(0.8);
  }
}

.bi-eye-slash {
  position: absolute;

  right: 10px;
  cursor: pointer;
  color: $purple;
}

#msgError {
  text-align: center;
  color: $error;
  background: $bg-error;
  border-radius: 4px;
  display: none;
  animation: fadeOut;
  /* 1000ms ease 1000ms  */
  animation-fill-mode: forwards;
  animation-duration: 2s;
  animation-delay: 1.2s;
}

#msgSuccess {
  text-align: center;
  color: $success;
  background: $bg-success;
  border-radius: 4px;
  display: none;
  animation: fadeOut 5s ease-in-out;
}

/* 
@keyframes fadeOut {
	to {
		visibility: hidden;
		opacity: 0;
		animation-delay: 1.2s;
	  }
	} */
</style>