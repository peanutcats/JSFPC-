<template>
  <div class="campus-map">
    <div class="map-placeholder">
      <el-empty description="地图加载中...">
        <el-button type="primary">申请中</el-button>
      </el-empty>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

</script>

<style scoped>
.campus-map {
  position: relative;
  width: 100%;
  height: 100%;
  background: #f5f7fa;
  display: flex;
  justify-content: center;
  align-items: center;
}

.map-placeholder {
  text-align: center;
}
</style> 