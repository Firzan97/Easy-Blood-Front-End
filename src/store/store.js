import Vue from 'vue'
import Vuex from 'vuex'
const { default: Axios } = require("axios");
import router from "../router/index"
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        token: null
    },
    mutations: {
        increment(state) {
            state.count++
        },
        updateToken(state, newToken) {
            state.token = newToken
        }
    },
    getters: {
        isLogged: state => {
            return state.token;
        }
    },
    actions: {
        login(context, Credential) {
            Axios.post("http://peaceful-springs-09367.herokuapp.com/api/login", {
                email: Credential.email,
                password: Credential.password
            }).then((response) => {
                const token = response.data.token
                const user = response.data.user
                console.log(response)
                localStorage.setItem("user", JSON.stringify(user))
                context.commit("updateToken", token)
                if (user.role == "user") {
                    router.push("/Profile")
                } else if (user.role == "admin") {
                    router.push("/Admin")

                }
            })
        }
    }
})