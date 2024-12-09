import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify'; // Certifique-se de importar corretamente

import './assets/scss/_reset.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

createApp(App)
  .use(store)
  .use(router)
  .use(vuetify) // Adiciona o Vuetify à sua aplicação
  .mount('#app');
