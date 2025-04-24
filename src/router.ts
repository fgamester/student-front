import { createRouter, createWebHistory } from "vue-router";
import HomeView from './views/HomeView.vue'
import UsersView from "./views/UsersView.vue";
import UserView from "./views/UserView.vue";
import UserFormView from "./views/UserFormView.vue";
import EditUserFormView from "./views/EditUserFormView.vue";
import SubjectsView from "./views/SubjectsView.vue";
import SubjectFormView from "./views/SubjectFormView.vue";
import SubjectView from "./views/SubjectView.vue";
import EditSubjectFormView from "./views/EditSubjectFormView.vue";

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
        path: '/subjects',
        name: 'Subjects',
        component: SubjectsView
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
    },
    {
        path: '/users/edit/:id',
        name: 'EditUserForm',
        component: EditUserFormView
    },
    {
        path: '/subjects/create',
        name: 'SubjectForm',
        component: SubjectFormView
    },
    {
        path: '/subjects/:id',
        name: 'Subject',
        component: SubjectView
    },
    {
        path: '/subjects/edit/:id',
        name: 'EditSubjectForm',
        component: EditSubjectFormView
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;