import Vue from 'vue';
import Vuex from 'vuex';
import user from './user'
import shared from './shared'
import {User} from '../modules/classes';
import {Message} from '../modules/classes';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        iceServers: null,
        userlist: [],
        chatMessages: []
    },
    modules: {
        user,
        shared
    },
    mutations: {
        setIce(state, payload){
          state.iceServers = payload;
        },

        save(state, payload){
            localStorage.setItem('state', JSON.stringify(state))
        },
        load(state, payload){
            let savedState = localStorage.getItem('state');
            if (savedState){
                console.log('load state');
                savedState = JSON.parse(savedState);
                if (savedState.user.user)
                    state.user = new User(savedState.user.user.username);
                if (savedState.iceServers)
                    state.iceServers = savedState.iceServers;
            }

        },
        setUserlist(state, userlist){
            state.userlist = userlist;
        },
        setChatMessages(state, messages){
            state.chatMessages = messages;
        },
        addChatMessage(state, message){
            state.chatMessages.push(message)
        }

    },
    actions: {
        setIce({commit}, payload){
            commit('setIce', payload);
        },
        setUserlist({commit}, userlist){
            commit('setUserlist', userlist);
        },
        setChatMessages({commit}, messages){
            commit('setChatMessages', messages);
        },
        addChatMessage({commit}, message){
            commit('addChatMessage', message);
        }
    },
    getters: {
        iceServers(state){
            return state.iceServers;
        },
        userlist(state){
            return state.userlist;
        },
        chatMessages(state){
            return state.chatMessages;
        },

    }
})