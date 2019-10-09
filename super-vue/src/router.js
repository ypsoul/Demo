import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
// import Index from "./views/index.vue";
// import Login from './router/login.router.js'

Vue.use(Router);

const routerList = [];

function importAll(r){
  r.keys().forEach(
    (key)=>{ 
      console.log(r(key))
      routerList.push(r(key).default)
    }
  )
}
console.log(routerList)
importAll(require.context('./router',true,/\.router\.js/))
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    ...routerList,
    {
      path: "/",
      name: "home",
      component: Home
    },
    // {
    //   path: "/index",
    //   name: "index",
    //   component: Index
    // },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
