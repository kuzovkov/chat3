export class User {
    constructor (username){
         this.username = username;
     }
}

export default {
    state: {
        user: null,
        roomId: ''
    },
    mutations: {
        setUser(state, username){
            if (username){
                state.user = new User(username);
                localStorage.setItem('username', username)
            }else{
                state.user = null;
                localStorage.removeItem('username');
            }
            this.commit('save', null);

        },
        setRoomId(state, roomId){
            state.roomId = roomId;
            this.commit('save', null);
        },
    },
    actions: {
        setUser({commit}, username){
            commit('setUser', username);
        },
        /*
        registerUser({commit}, {email, password}){
            commit('clearError');
            commit('setLoading', true);
            fb.auth().createUserWithEmailAndPassword(email, password).
                then(user => {
                    commit('setUser', new User(user.id));
                    commit('setLoading', false);
                }).
                catch(error => {
                    commit('setLoading', false);
                    commit('setError', error.message);
                })
        },
        //переписываем код выше с использованием async await
        async registerUser({commit}, {email, password}){
            commit('clearError');
            commit('setLoading', true);
            try{
                const user = await fb.auth().createUserWithEmailAndPassword(email, password);
                commit('setUser', new User(user.user.uid));
                commit('setLoading', false);
            }catch(error){
                commit('setLoading', false);
                commit('setError', error.message);
                throw error;
            }
        },
        async loginUser ({commit}, {email, password}){
            commit('clearError');
            commit('setLoading', true);
            try{
                const user = await fb.auth().signInWithEmailAndPassword(email, password);
                commit('setUser', new User(user.user.uid));
                localStorage.setItem('uid', user.user.uid);
                commit('setLoading', false);
            }catch(error){
                commit('setLoading', false);
                commit('setError', error.message);
                throw error;
            }
        },
        autoLoginUser({commit}, payload){
            console.log(payload.uid)
            commit('setUser', {id: payload.uid})
            localStorage.setItem('uid', payload.uid);
        },
        logoutUser({commit}){
            fb.auth().signOut();
            commit('setUser', null)
            localStorage.removeItem('uid');
        }
        */
    },
    getters: {
       user(state){
           let username = localStorage.getItem('username');
           if (!state.user && username)
               return new User(username);
           return state.user;
       },
        roomId(state){
           return state.roomId;
       },

    }

}