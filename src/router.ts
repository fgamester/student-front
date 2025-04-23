import { createRouter, createWebHistory } from "vue-router";
import HomeView from './views/HomeView.vue'
import UsersView from "./views/UsersView.vue";
import UserView from "./views/UserView.vue";
import UserFormView from "./views/UserFormView.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/users',
        name: 'Users',
        component: UsersView
    },
    {
        path: '/users/:id',
        name: 'User',
        component: UserView
    },
    {
        path: '/users/create',
        name: 'UserForm',
        component: UserFormView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;