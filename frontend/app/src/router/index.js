import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Chat from '@/components/Chat'
import AuthGuard from './auth.guard'


Vue.use(Router);


export default new Router({
    routes: [
        {
            path: '',
            name: 'login',
            component: Login
        },
        {
            path: '/chat',
            name: 'room',
            component: Chat,
            beforeEnter: AuthGuard
        },
    ],
    mode: 'history'
})

