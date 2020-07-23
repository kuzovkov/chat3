import store from '../store';
import router from '../router';
import {Message} from '../modules/classes';

export function eventHandler(packet) {
    if (packet.data) {
        //console.log('>>>', {name: packet.data[0], payload: packet.data[1]})
        let obj = {name: packet.data[0], payload: packet.data[1]};
        switch (obj.name){
            case 'ice': onIce(obj.payload); break;
            case 'login_success': onLoginSuccess(obj.payload); break;
            case 'login_fail': onLoginFail(obj.payload); break;
            case 'new_user': onNewUser(obj.payload); break;
            case 'users_online': onUsersOnline(obj.payload); break;
            case 'user_disconnected': onUserDisconnected(obj.payload); break;
            case 'last_messages': onLastMessages(obj.payload); break;
            case 'new_message': onNewMessage(obj.payload); break;
            default: console.log('unhandled event: ', obj.name);
        }
    }
}


function onIce(data){
    //console.log(data);
    let iceServers = JSON.parse(window.atob(data.ice)).iceServers;
    console.log(iceServers);
    store.commit('setIce', iceServers);
}

function onLoginSuccess(data) {
    console.log('login_success');
    store.dispatch('clearError');
    store.dispatch('setLoading', false);
    store.dispatch('setUser', data.username);
    router.push('/chat');
}

function onLoginFail(data) {
    console.log('login_fail');
    store.dispatch('setUser', null);
    store.dispatch('setLoading', false);
    store.dispatch('setError', data.message);
}

function onNewUser(data) {
    let username = data.user;
    store.dispatch('setMessage', `User ${username} connected to chat`);
}

function onUsersOnline(data) {
    let userlist = data.users_online;
    store.dispatch('setUserlist', userlist);
}

function onUserDisconnected(data) {
    let username = data.user;
    store.dispatch('setMessage', `User ${username} leave the chat`);
}

function onLastMessages(data) {
    let messages = [];
    for (let i = 0; i < data.messages.length; i++){
        let username = data.messages[i].from;
        let message = data.messages[i].message;
        let datetime = new Date(data.messages[i].created);
        messages.push(new Message(username, message, datetime));
    }
    console.log(messages);
    store.dispatch('setChatMessages', messages);
}

function onNewMessage(data) {
    let username = data.message.from;
    let msg = data.message.message;
    let datetime = new Date(data.message.created);
    let message = new Message(username, msg, datetime);
    store.dispatch('addChatMessage', message);
}



