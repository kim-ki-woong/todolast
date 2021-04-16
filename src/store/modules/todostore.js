
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

let url = "http://localhost:8000/api/todo/";

Vue.use(Vuex);

export default {
    namespaced: true,
    state: {
        todoList: ''
    },
    getters: {
        storedTodoList(state) {
            return state.todoList;
        },
    },
    mutations: {
        initTodoList(state, payload) {
            state.todoList = payload
        },
        createTodoList(state, payload) {
            state.todoList.push(payload)
        },
        deleteTodoList(state, id) {
            let index = state.todoList.findIndex(todoList => todoList.id == id)
            state.todoList.splice(index, 1)
        },
        updateTodoList(state, payload) {
            let index = state.todoList.findIndex(todoList => todoList.id == payload.id)
            state.todoList[index] = payload
        }
    },
    actions: {
        initTodoList({ commit }) {
            axios({
                method: "GET",
                url: url,
            })
                .then((response) => {
                    for (var index in response.data) {
                        response.data[index].is_hidden = false;
                    }
                    console.log("Success", response);
                    commit("initTodoList", response.data);
                })
                .catch((error) => {
                    console.log("Failed to get todoList", error);
                });
        },
        createTodoList({ commit }, payload) {
            axios({
                method: "POST",
                url: url,
                data: payload.data,
            })
                .then((response) => {
                    console.log("Create TodoList", response);
                    commit("createTodoList", response.data);
                })
                .catch((error) => {
                    console.log("Failed to create todoList", error.response);
                });
        },
        deleteTodoList({ commit }, payload) {
            console.log(payload.id)
            axios({
                method: "DELETE",
                url: url + payload.id,
            })
                .then((response) => {
                    commit("deleteTodoList", payload.id);
                    console.log("Success", response);
                })
                .catch((error) => {
                    console.log("Failed to delete todoList", error.response);
                });
        },
        updateTodoList({ commit }, payload) {
            axios({
                method: "PATCH",
                url: url + payload.id + "/",
                data: payload,
            })
                .then((response) => {
                    commit("updateTodoList", payload);
                    console.log("Success", response);
                })
                .catch((error) => {
                    console.log("Failed to patched todoList", error.response);
                });
        },
    },
};