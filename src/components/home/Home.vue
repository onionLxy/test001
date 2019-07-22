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
        <el-col @click.prevent='logout' class="out" :span="8"><a href="#">退出</a></el-col>
      </el-row>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="350px">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
            <!-- 第一个 -->
              <el-submenu index="1">
            <!-- 标题 -->
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
      <el-main>Main123

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
/* eslint-disable */
export default {
  // 退出登陆
  logout() {

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
  width:350px;
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
