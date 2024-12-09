<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="container">
        <div class="card">
          <div v-if="type === 'signup'" class="label-float">
            <h1>Cadastrar</h1>
          </div>
          <div v-if="type === 'signin'" class="label-float">
            <h1>Entrar</h1>
          </div>

          <div v-if="type === 'signup'" class="label-float">
            <input
              type="text"
              name="nomeUsuario"
              v-model="nomeUsuario"
              placeholder=""
            />
            <label for="nomeUsuario">Nome de Usuário</label>
          </div>

          <div class="label-float">
            <input type="text" name="email" v-model="email" placeholder="" />
            <label for="email">Email</label>
          </div>

          <div class="label-float">
            <input
              v-bind:type="showPassword ? 'text' : 'password'"
              v-model="senha"
              placeholder=""
            />
            <label for="password">Senha</label>
            <span @click="showPassword = !showPassword">
              <i v-if="showPassword" class="fas fa-eye-slash"></i>
              <i v-else class="fas fa-eye"></i>
            </span>
          </div>

          <p v-if="mensagem">{{ mensagem }}</p>

          <div class="justify-center">
            <button type="submit">{{ btnText }}</button>
          </div>

          <div v-if="type === 'signin'">
            <div class="justify-center">
              <hr />
            </div>
            <p>
              Não tem uma conta?
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
import axios from "axios";

export default {
  name: "SignForm",
  props: {
    type: String,
    errorMsg: String,
  },
  data() {
    return {
      email: "",
      senha: "",
      showPassword: false,
      nomeUsuario: "",
      mensagem: "", // Adiciona um campo para exibir mensagens de feedback
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("http://localhost:3000/auth", {
          email: this.email,
          senha: this.senha,
        });
        const token = response.data.access_token;
        console.log(token);
        localStorage.setItem("auth_token", token);
        this.$router.push("/profile");
      } catch (error) {
        console.error("Erro ao fazer login:", error);
        this.mensagem = "Erro ao fazer login. Verifique seus dados.";
      }
    },
    async cadastrar() {
      try {
        const response = await axios.post("http://localhost:3000/users", {
          email: this.email,
          nomeUsuario: this.nomeUsuario,
          senha: this.senha,
        });
        this.mensagem = "Usuário cadastrado com sucesso!";
        console.log("Cadastro realizado:", response.data);
      } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
        this.mensagem =
          "Erro ao cadastrar usuário. Tente novamente ou verifique os dados.";
      }
    },
    async onSubmit() {
      if (this.type === "signup") {
        // Validação de campos
        if (!this.email || !this.nomeUsuario || !this.senha) {
          this.mensagem = "Por favor, preencha todos os campos.";
          return;
        }
        await this.cadastrar();
      } else if (this.type === "signin") {
        if (!this.email || !this.senha) {
          this.mensagem = "Por favor, preencha todos os campos.";
          return;
        }
        await this.login();
      }
    },
  },
  setup(props) {
    return {
      btnText: computed(() =>
        props.type === "signup" ? "Cadastrar" : "Entrar"
      ),
    };
  },
};
</script>

<style lang="scss" scoped>
$orange: #f49448;
$purple: #272262;
$violet: #4038a0;
$card: #ffffff80;
$white: #fff;

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: $orange;
}

svg {
  position: absolute;
  color: $purple;
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
  }

  position: relative;
  padding-top: 13px;
  margin-top: 5%;
  margin-bottom: 5%;

  label {
    color: $purple;
    pointer-events: none;
    position: absolute;
    top: -0.6rem;
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
</style>
