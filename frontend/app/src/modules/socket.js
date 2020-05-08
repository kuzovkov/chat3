import store from '../store';


export function eventHandler(packet) {
    if (packet.data) {
        //console.log('>>>', {name: packet.data[0], payload: packet.data[1]})
        let obj = {name: packet.data[0], payload: packet.data[1]};
        switch (obj.name){
            case 'ice': onIce(obj.payload); break;
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