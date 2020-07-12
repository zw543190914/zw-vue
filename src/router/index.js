import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/Login";
import Main from "../views/Main";

import UserDetail from "../views/user/UserDetail";
import UserList from "../views/user/UserList";

Vue.use(VueRouter);

//配置导出
export default new VueRouter({
  mode:"history",
  routes:[
    {
      // 路由路径
      path:"/login",
      name:"login",
      // 跳转路径
      component:Login

    },
    {
      path:"/main",
      component:Main,
      children:[
        {path:"/user/userDetail/:id",component:UserDetail},
        {path:"/user/userList/:id",component:UserList,props:true}
      ]
    },
    {
      path:"/home",
      redirect:"/main"
    }
  ]
});
