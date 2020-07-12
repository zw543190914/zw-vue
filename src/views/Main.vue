<template>
  <div id="app">
    <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
      <el-radio-button label="top">top</el-radio-button>
      <el-radio-button label="right">right</el-radio-button>
      <el-radio-button label="bottom">bottom</el-radio-button>
      <el-radio-button label="left">left</el-radio-button>
    </el-radio-group>

    <el-tabs :tab-position="tabPosition" style="height: 200px;">
      <el-tab-pane label="用户管理">
        <router-link to="/user/userList/1">用户管理</router-link>
      </el-tab-pane>
      <el-tab-pane label="用户详情">
        <router-link to="/user/userDetail/1">用户详情</router-link>
      </el-tab-pane>
    </el-tabs>

    <el-main>
      <router-view></router-view>
    </el-main>
  </div>
</template>

<script>
    export default {
        name: "Main",
        data() {
            return {
                tabPosition: 'left'
            };
        }
    }
</script>

<style scoped>

</style>
