import { createStore } from 'vuex'

export default createStore({
    state: {
        name: "",
        email: ""
    },
    getters: {
    },
    mutations: {
        SET_NAME(state, name){
            state.name = name
        },

        SET_EMAIL(state, email){
            state.email = email
        }
    },
    actions: {
    },
    modules: {
    }
})