<template>
  <el-container class="layout-container">
    <el-header v-if="showHeader">
      <nav>
        <el-menu mode="horizontal" router>
          <el-menu-item index="/">智能校园导览系统</el-menu-item>
        </el-menu>
      </nav>
    </el-header>
    
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ElContainer, ElHeader, ElMain, ElMenu, ElMenuItem } from 'element-plus'

const route = useRoute()
const showHeader = computed(() => route.path !== '/login')
</script>

<style>
.layout-container {
  height: 100vh;
  width: 100vw;
}

.el-header {
  padding: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
}

.el-main {
  padding: 0;
  height: calc(100vh - 60px);
}

/* 登录页面不需要减去头部高度 */
.login-container .el-main {
  height: 100vh;
}
</style> 