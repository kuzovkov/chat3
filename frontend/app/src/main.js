import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store';
import router from './router';
import VueSocketIO from 'vue-socket.io'
import io from 'socket.io-client'
import {eventHandler} from './modules/socket';
import config from './config';
import Debug from './components/Debug.vue';



Vue.config.productionTip = false;
const backendUrl = config.BACKEND_URL;

// Socket config
Vue.use(new VueSocketIO({
  debug: true,
  connection: io(`${backendUrl}/`, { autoConnect: true }),
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  },
}));

Vue.component('debug', Debug);

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App),
  created(){
    this.$socket.on('connect', () => {console.log('WS connected!!!')});
    this.$socket.onevent = eventHandler;
    this.$store.commit('load', null);
  },

}).$mount('#app');
