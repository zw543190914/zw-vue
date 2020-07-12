<template>

  <div>
    <p>用户列表{{id}}</p>
    <router-link to="/home">回首页</router-link>
    <router-view></router-view>
  </div>

</template>

<script>
    export default {
        name: "UserList",
        props:["id"]
    }
</script>

<style scoped>

</style>
