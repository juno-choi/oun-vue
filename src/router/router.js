import { createWebHistory, createRouter } from "vue-router";
import Home from '@/components/Home'

const router = createRouter({
    history: createWebHistory(),
    routes: [   // routing
        {path: '/', name: 'home', component: Home},
    ]
});

export default router;