import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../components/profiles/Profile'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name:'Home',
        component: Home
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
        props : true,
    },
]

const router = new VueRouter({
    mode: 'history',
    base:process.env.BASE_URL,
    routes
})

export default router;