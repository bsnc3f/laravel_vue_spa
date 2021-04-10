import Router from 'vue-router';
import Home from './views/Home.vue';
import Index from "./components/Index.vue";
import Add from "./components/Add.vue";
import Edit from "./components/Edit.vue";

export default new Router({
  mode: 'history',
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
      path: "/books",
      name: "index",
      component: Index
    },
    {
        path: "/books/add",
        name: "add",
        component: Add
    },
    {
        path: "/books/:id/edit",
        name: "edit",
        component: Edit
    }
  ]
});
