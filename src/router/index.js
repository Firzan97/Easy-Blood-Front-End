import VueRouter from "vue-router";
import FindRequest from "../components/RequestTable.vue";
import Home from "../views/Home.vue";
import EventTable from "../components/EventTable";
import ProfileCard from "../components/ProfileCard"
import Admin from "../views/Admin"


const routes = [{
        path: '/Request',
        name: "Request",
        component: FindRequest,
        meta: {
            title: 'Request',

        }
        //  { path: '*', component: NotFoundComponent }
    },
    {
        path: '/',
        name: "Home",
        component: Home,
        meta: {
            title: 'Home',

        }
        //  { path: '*', component: NotFoundComponent }
    },
    {
        path: '/Event',
        name: "Event",
        component: EventTable,
        meta: {
            title: 'Event',

        }
        //  { path: '*', component: NotFoundComponent }
    },
    {
        path: '/Profile',
        name: "Profile",
        component: ProfileCard,
        meta: {
            title: 'Profile',

        }
        //  { path: '*', component: NotFoundComponent }
    },
    {
        path: '/Admin',
        name: "Admin",
        component: Admin,
        meta: {
            title: 'Admin',

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
    next()
})
router.replace("/")

export default router;