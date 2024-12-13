<template>
  <div class="login-container">
    <el-card class="login-card">
      <template #header>
        <h2>智能校园导览系统</h2>
      </template>
      <el-form :model="loginForm" :rules="rules" ref="loginFormRef">
        <el-form-item prop="username">
          <el-input 
            v-model="loginForm.username"
            placeholder="请输入学号"
            prefix-icon="User"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input 
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码"
            prefix-icon="Lock"
            show-password
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin" style="width: 100%">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()
const loginFormRef = ref(null)

const loginForm = reactive({
  username: '',
  password: ''
})

const rules = {
  username: [
    { required: true, message: '请输入学号', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ]
}

const handleLogin = () => {
  loginFormRef.value.validate((valid) => {
    if (valid) {
      // 测试账号验证
      if (loginForm.username === '20243002' && loginForm.password === '123456') {
        // 设置登录状态
        sessionStorage.setItem('isAuthenticated', 'true')
        sessionStorage.setItem('username', loginForm.username)
        ElMessage.success('登录成功')
        router.push('/home')
      } else {
        ElMessage.error('账号或密码错误')
      }
    }
  })
}
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f7fa;
}

.login-card {
  width: 400px;
}

.login-card :deep(.el-card__header) {
  text-align: center;
  font-weight: bold;
}

h2 {
  margin: 0;
  color: #409EFF;
}
</style> 