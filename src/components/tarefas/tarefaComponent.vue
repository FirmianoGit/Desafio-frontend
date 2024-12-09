<template>
    <div class="tarefa-card">
      <h3 class="tarefa-titulo">{{ tarefa.titulo }}</h3>
      <p class="tarefa-descricao">{{ tarefa.descricao }}</p>
      <div class="tarefa-actions">
        <button @click="apagarTarefa(tarefa.id)" class="botao-concluir">Apagar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Tarefa",
    props: {
      tarefa: Object, // Tarefa passada como propriedade
    },
    methods: {
      apagarTarefa(id) {
        this.$emit('onApagar', id); // Emite o evento 'onApagar' com o id da tarefa
      }
    }
  };
  </script>
  
  <style scoped>
  .tarefa-card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 16px;
    margin: 16px 0;
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
  </style>
  