import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Room from '@/components/Room'
import Conference from '@/components/Conference'
import AuthGuard from './auth.guard'


Vue.use(Router);


export default new Router({
    routes: [
        {
            path: '',
            name: 'home',
            component: Home
        },
        {
            path: '/room/:room',
            name: 'room',
            props: true,
            component: Room,
            beforeEnter: AuthGuard
        },
        {
            path: '/conference/:roomid',
            name: 'conference',
            props: true,
            component: Conference,
            beforeEnter: AuthGuard
        }


    ],
    mode: 'history'
})

