<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="8">
          <img class="pic" src="../../assets/images/logo.png" />
        </el-col>
        <el-col :span="8">
          <h1>后台管理系统</h1>
        </el-col>
        <el-col class="out" :span="8"
          ><a href="#" @click.prevent="logout">退出</a></el-col
        >
      </el-row>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="350px">
        <!-- default-active="2-2" -->
        <!-- @open="handleOpen"
            @close="handleClose" 监听打开与关闭 -->
        <!-- background-color背景色 -->
        <!-- active-text-color高亮颜色 -->
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router = 'true'
        >
          <!-- 第一个 -->
          <!-- <el-submenu> 可以展开
             <el-menu-item> 不能展开-->
          <el-submenu index="1">
            <!-- 标题 -->
            <!-- ▲   slot="title"具名 负责显示标题-->
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>用户管理</span>
            </template>
            <!-- 两个菜单元素 -->
            <el-menu-item index="users">用户列表</el-menu-item>
          </el-submenu>
          <!-- 第二个 -->
          <el-submenu index="2">
            <!-- 标题 -->
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>权限管理</span>
            </template>
            <!-- 两个菜单元素 -->
            <el-menu-item index="roles">角色列表</el-menu-item>
            <el-menu-item index="rights">权限列表</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <!-- 嵌套路由的出口 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
/* eslint-disable */
export default {
  methods: {
    // 退出登陆
    logout() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          localStorage.removeItem("token");
          this.$router.push("/login");
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 侧边栏菜单打开与关闭的检测
    handleOpen(key, keyPath) {
      console.log("打开了");
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  height: 100%;
}
</style>
<style  scoped >
.el-container {
  height: 100%;
  min-width: 900px;
}
/* 头部 */
.el-header {
  background: #b3c1cd;
  padding: 0px;
  height: 80px !important;
}
img {
  width: 350px;
}
h1 {
  color: #fff;
  text-align: center;
  line-height: 80px;
  font-size: 32px;
}
.out {
  text-align: right;
  line-height: 80px;
  padding-right: 40px;
  font-size: 30px;
}
.out a {
  color: #1b8bf5;
  text-decoration: none;
}

/* 侧边栏 */
.el-aside {
  background: #545c64;
}
/* 内容 */
.el-main {
  background: #eaeef1;
}
</style>
