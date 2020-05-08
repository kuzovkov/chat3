import Vue from 'vue';
import Vuex from 'vuex';
import user from './user'
import shared from './shared'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user,
        shared
    },

    mutations: {
      setIce(state, payload){
          state.iceServers = payload;
      }
    },
    state: {
        iceServers: null
    },
    getters: {
        iceServers(state){
            return state.iceServers;
        }
    }
})