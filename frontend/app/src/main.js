import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store';
import router from './router';
import VueSocketIO from 'vue-socket.io';
import SocketIO from "socket.io-client";
import {eventHandler} from './modules/socket';

Vue.config.productionTip = false;

//const socket = SocketIO('https://back.kuzovkov12.ru', {path: '/socket.io'});

Vue.use(new VueSocketIO({
  debug: false,
  connection: 'https://back.kuzovkov12.ru',
  options: { path: '/socket.io/', transports: ['websocket'] },
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  },
}), SocketIO);


new Vue({
  vuetify,
  store,
  router,
  render: h => h(App),
  created(){
    this.$socket.on('connect', () => {
       console.log('socket connected!!!');
    });

    this.$socket.on('disconnect', () => {
      console.log('socket disconnected')
    });

    this.$socket.onevent = eventHandler;

    this.$socket.on('ice', (data) => {
      console.log('!!!', data)
    });
  },

}).$mount('#app');
