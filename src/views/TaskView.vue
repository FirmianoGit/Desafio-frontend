<template>
  <div class="tarefas-container">
    <div v-for="tarefa in tarefas" :key="tarefa.id" class="tarefa-card">
      <h3 class="tarefa-titulo">{{ tarefa.titulo }}</h3>
      <p class="tarefa-descricao">{{ tarefa.descricao }}</p>
      <div class="tarefa-actions">
        <button @click="apagarTarefa(tarefa.id)" class="botao-concluir">
          Apagar
        </button>
      </div>
    </div>
    <div v-if="tarefas.length === 0" class="sem-tarefas">
      <p>Não há tarefas para exibir.</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GerenciarTarefas",
  data() {
    return {
      tarefas: [], // Lista de tarefas
    };
  },
  mounted() {
    this.carregarTarefas(); // Carregar tarefas ao montar o componente
  },
  methods: {
    async carregarTarefas() {
      try {
        const token = localStorage.getItem("auth_token");
        if (!token) {
          console.error("Token não encontrado. Faça login primeiro.");
          return;
        }

        console.log("Fazendo a requisição para carregar tarefas...");

        const resposta = await axios.get("http://localhost:3000/tasks", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Log da resposta completa da API
        console.log("Resposta completa da API:", resposta);

        // Verifica se a resposta contém a propriedade 'tasks' e se ela é um array
        if (Array.isArray(resposta.data.data.tasks)) {
          this.tarefas = resposta.data.data.tasks;
        } else {
          console.error(
            "Erro: resposta da API não contém uma lista de tarefas."
          );
          console.log("Conteúdo da resposta:", resposta.data);
        }
      } catch (erro) {
        console.error("Erro ao carregar tarefas:", erro);
      }
    },
    apagarTarefa(id) {
      // Emite o evento para apagar a tarefa
      this.$emit("onApagar", id);

      // Remover a tarefa localmente após a exclusão
      this.tarefas = this.tarefas.filter((tarefa) => tarefa.id !== id);
    },
  },
};
</script>

<style scoped>
.tarefas-container {
  margin: 20px;
}

.tarefa-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 16px;
}

.tarefa-titulo {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.tarefa-descricao {
  font-size: 1rem;
  color: #666;
  margin-bottom: 16px;
}

.tarefa-actions {
  text-align: right;
}

.botao-concluir {
  background-color: #db483d;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.botao-concluir:hover {
  background-color: #c13933;
}

.sem-tarefas {
  text-align: center;
  color: #888;
  font-size: 1.2rem;
}
</style>
