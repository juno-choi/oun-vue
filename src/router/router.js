import { createWebHistory, createRouter } from "vue-router";
import Home from '@/view/Home'
import Login from '@/view/login/Login'
import Oauth from '@/view/oauth/Oauth'
import Join from '@/view/join/Join'
import Choice from '@/view/routine/Choice'
import Order from '@/view/routine/Order'
import Start from '@/view/routine/Start'
import Setting from '@/view/routine/Setting'

const router = createRouter({
    history: createWebHistory(),
    routes: [   // routing
        { path: '/', name: 'home', component: Home },
        { path: '/login', name: 'login', component: Login },
        { path: '/oauth/:platform', name: 'oauth', component: Oauth },
        { path: '/join/:platform', name: 'join', component: Join },
        { path: '/routine/choice', name: 'choice', component: Choice },
        { path: '/routine/order', name: 'order', component: Order },
        { path: '/routine/start', name: 'start', component: Start },
        { path: '/routine/setting', name: 'setting', component: Setting },
    ]
});

export default router;