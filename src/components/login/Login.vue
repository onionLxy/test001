<template>
<!-- model 是表单数据
rules 是表单校验
ref  获取dom元素或组件
prop="name" 校验的时候用到；
-->
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="140px"
    class="ruleForm"
  >
    <el-form-item label="用户名" prop="username">
      <el-input class="input_name" v-model="ruleForm.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input class="input_password" v-model="ruleForm.password"></el-input>
    </el-form-item>

    <el-form-item>
      <!-- type="primary"设置按钮颜色 -->
      <el-button type="primary" @click="startLogin()"
        >登陆</el-button
      >
      <el-button @click="resetForm()">重置</el-button>

    </el-form-item>
  </el-form>
</template>
<script>
/* eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
      ruleForm: {
        username:"admin",
        pssword:"123456",
      },
      rules:{
        username:[
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password:[
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "长度在 6 到 12 个字符", trigger: "blur" }
        ],

      }
    }
  },
  methods: {
    // 开始登陆
    startLogin() {
      this.$refs.ruleForm.validate(valid => {
        if(!valid) {
          return ;
        }
        // 校验成功，开始发送请求 登陆
        // console.log('122')
        axios.post('http://localhost:8888/api/private/v1/login',this.ruleForm)
        .then(res => {
          console.log(res)
          if(res.data.meta.status===200) {
            // 0 判断是否有token
            // 存token到本地缓存localStorage中
            localStorage.setItem('token',res.data.data.token)
             //1. 登录成功提示
              this.$message({
                message: res.data.meta.msg,
                type: "success",
                duration: 800
              });
              //2. 跳转到home页面 (编程式导航)
              this.$router.push('/home')
          }
        })
      })
    },
    resetForm() {
      this.$refs.ruleForm.resetFields()
    }
  },
}
</script>

<style  scoped>
.el-form {
  width: 600px;
  height: 300px;
  padding:40px;
  background-color: rgb(30, 112, 145);
  border-radius: 10px;
}
el-form-item {
  color:#fff;
}
.ruleForm {
  margin: 300px auto;
}
.el-form-item__content {
  margin:15px 0;
}
.el-form-item__label {
line-height: 72px;
color:#fff;
}
.input_name {
  width:350px;
}
.input_password {
  width:350px;
}

</style>
