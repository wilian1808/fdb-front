import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        redirect: '/'
    },
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "account" */ '../views/Profile.vue'),
        meta: {
            auth: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    },
    {
        path: '/operation',
        name: 'operation',
        component: () => import(/* webpackChunkName: "operation" */ '../views/Operation.vue'),
        meta: {
            auth: true
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    let user = localStorage.getItem('data') ? true : false
    let auth = to.matched.some(record => record.meta.auth)

    if (auth && !user) {
        next('/login')
    } else if (!auth && user) {
        if (JSON.parse(localStorage.getItem('data')).codigo.length > 4) {
            next('/operation')
        } else {
            console.log('es cliente')
            next('/profile')
        }
    } else {
        next()
    }
})

export default router
