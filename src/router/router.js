import { createWebHistory, createRouter } from "vue-router";
import Home from '@/view/Home'
import Login from '@/view/login/Login'
import Oauth from '@/view/oauth/Oauth'

const router = createRouter({
    history: createWebHistory(),
    routes: [   // routing
        { path: '/', name: 'home', component: Home },
        { path: '/login', name: 'login', component: Login },
        { path: '/oauth/:platform', name: 'oauth', component: Oauth },
    ]
});

export default router;