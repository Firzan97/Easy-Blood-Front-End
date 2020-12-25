import VueRouter from "vue-router";
import FindRequest from "../components/RequestTable.vue";
import Home from "../views/Home.vue";
import EventTable from "../components/EventTable";
import ProfileCard from "../components/ProfileCard"
import Admin from "../views/Admin"
import Login from "../components/Login"
import Register from "../components/Register"
import store from "../store/store"
const routes = [{
        path: '/Request',
        name: "Request",
        component: FindRequest,
        meta: {
            title: 'Request',
            guest: true
        }
        //  { path: '*', component: NotFoundComponent }
    },
    {
        path: '/',
        name: "Home",
        component: Home,
        meta: {
            title: 'Home'
        }
        //  { path: '*', component: NotFoundComponent }
    },
    {
        path: '/Event',
        name: "Event",
        component: EventTable,
        meta: {
            title: 'Event',
            guest: true

        }
        //  { path: '*', component: NotFoundComponent }
    },
    {
        path: '/Profile',
        name: "Profile",
        component: ProfileCard,
        meta: {
            title: 'Profile',
            requiresAuth: true

        }
        //  { path: '*', component: NotFoundComponent }
    },
    {
        path: '/Admin',
        name: "Admin",
        component: Admin,
        meta: {
            title: 'Admin',
            is_admin: true,
            requiresAuth: true


        }
        //  { path: '*', component: NotFoundComponent }
    },
    {
        path: '/Login',
        name: "Login",
        component: Login,
        meta: {
            title: 'Login',
            guest: true

        }
        //  { path: '*', component: NotFoundComponent }
    },
    {
        path: '/Register',
        name: "Register",
        component: Register,
        meta: {
            title: 'Register',
            guest: true

        }
        //  { path: '*', component: NotFoundComponent }
    },
]
const router = new VueRouter({
    // short for `routes: routes`,
    mode: 'history',
    base: "/",
    routes,
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLogged == null) {
            next("/Login")

        } else {
            let user = JSON.parse(localStorage.getItem("user"));
            if (to.matched.some(record => record.meta.is_admin)) {
                if (user.role != "admin") {
                    next("/Profile")

                } else {
                    next()
                }
            }
            next()
        }
        next()

    } else {
        next();
    }

})
router.replace("/")

export default router;