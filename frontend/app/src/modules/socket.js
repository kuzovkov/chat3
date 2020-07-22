import store from '../store';
import router from '../router';

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

