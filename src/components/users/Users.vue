<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索输入框 -->
    <div style="margin-top: 15px;">
      <el-input
        placeholder="请通过用户名搜索"
        v-model="searchText"
        class="input-with-select"
      >
        <el-button
          slot="append"
          @click="startQuery"
          icon="el-icon-search"
        ></el-button>
      </el-input>
      <el-button>添加用户</el-button>
    </div>
    <!-- <el-table>表格组件 -->
    <!-- <el-table-column>表格的列 -->
    <!-- prop="username" 是读取的date里的数据 -->
    <!-- :data="tableData" 是一个数组 -->
    <!-- 组件只包含表格的列 ，行由数据决定 -->
    <el-table :data="usersList" style="width: 100%">
      <el-table-column prop="username" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="380"> </el-table-column>
      <el-table-column prop="mobile" label="电话"> </el-table-column>
      <!-- <el-table-column prop="address" label="用户状态"> </el-table-column>
        <el-table-column prop="address" label="操作">  </el-table-column> -->
    </el-table>
    <!-- 页码 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="2"
      :current-page="pagenum"
      @current-change="changePage"
      class="size"
    ></el-pagination>
  </div>
</template>
<script>
// 引入axios
/* eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
      usersList: [
        {
          // username: "王小虎",
          // email: "780023683@qq.com",
          // mobile: "15702970902"
        }
      ],
      // 定义数据总个数
      total: 0,
      // 当前页
      pagenum: 1,
      // 搜索框内容
      searchText: ""
    };
  },
  created() {
    this.loadUsersList();
  },
  methods: {
    // 加载用户数据//这里发送请求需要在请求头里携带token
    loadUsersList(pagenum = 1, query = "") {
      axios
        .get("http://localhost:8888/api/private/v1/users", {
          params: {
            query,
            // 当前页
            pagenum,
            // 每页显示的数据条数
            pagesize: 2
          },
          headers: { Authorization: localStorage.getItem("token") }
        })
        .then(res => {
          console.log(res);
          this.usersList = res.data.data.users;
          // 给数据的总个数赋值
          this.total = res.data.data.total;
          // 当前页
          this.pagenum = res.data.data.pagenum;
        });
    },
    // 改变页数
    changePage(curPage) {
      console.log("改变", curPage);
      // 把取到的curPage赋值给pagenum,重新渲染页面;
      this.loadUsersList(curPage, this.searchText);
    },
    // 开始查询
    startQuery() {
      console.log(this.searchText);
      // 获取查询内容的第一页数据
      this.loadUsersList(1, this.searchText);
    }
  }
};
</script>
<style scoped>
.input-with-select {
  margin-bottom: 15px;
  width: 50%;
}
.size {
  margin-top: 25px;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
