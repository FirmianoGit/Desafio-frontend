<template>
  <div>
		<form @submit.prevent="onSubmit">
    <div class="container">
      <div class="card castrar">
        <h1>Cadastrar</h1>
        <div id="msgError"></div>
        <div id="msgSuccess"></div>
        <div class="label-float">
          <input  v-model="form.name" type="text" placeholder="" required>
          <label>Nome</label>
        </div>
        <div class="label-float">
          <input  v-model="form.username" type="text" placeholder="" required>
          <label id="labelUsuario" for="usuario">Usuário</label>
        </div>
        <div class="label-float">
          <input  v-model="form.password" type="password" placeholder="" required>
          <label id="labelSenha" for="senha">Senha</label>
          <i id="verSenha"   class="bi bi-eye-slash"></i>
        </div>
        <!-- <div class="label-float">
          <input type="password" id="confirmSenha" placeholder="" required>
          <label id="labelConfirmSenha" for="confirmSenha">Confirmar senha</label>
          <i class="bi bi-eye-slash" id="verConfirmSenha"></i>
        </div> -->
        <div class="justify-center">
          <button type="submit">cadastrar</button>
        </div>
      </div>
    </div>
	</form>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  setup () {
    const form = reactive({
      name: '',
      username: '',
      password: ''
    })
    const router = useRouter()
    const onSubmit = async () => {
      const response = await userStore.register(form.name, form.username, form.password)
      console.log(response)
      if (response) {
        router.push({ name: 'Login' })
      }
    }

    const goToHome = async () => {
      router.push({ name: 'LandingPage' })
    }

    const goToLogin = async () => {
      router.push({ name: 'Login' })
    }

    return { form, userStore, onSubmit, goToHome, goToLogin }
  }
}
</script>

<style lang="scss" scoped>
$orange: #f49448;
$purple: #272262;
$violet: #4038a0;
$body:#191c21;
$card:#ffffff80;
$white:#fff;
$error:#ff0000;
$bg-error:#ffbbbb;
$success:#00bb00;
$bg-success:#bbffbe;
$disable:#cccc;
$grey:#666666;
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    font-family: "Nunito", sans-serif;
}
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
	&:disabled{
		background: $disable;
		color: $grey;
		cursor: auto;

	}	
	&:enabled{
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
	animation: fadeOut ;/* 1000ms ease 1000ms  */
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
		animation: fadeOut 5s ease-in-out ;
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