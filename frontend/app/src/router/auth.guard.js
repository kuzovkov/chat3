import store from '../store'

export default function (to,from, next){
    if (store.getters.user || localStorage.getItem('username')){
        next()
    }else{
        next('/')
    }
}
