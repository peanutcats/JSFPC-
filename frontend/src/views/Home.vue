<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="map-container">
          <campus-map />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="chat-container">
          <chat-interface />
          <audio-recorder @recording-complete="handleRecordingComplete" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AudioRecorder from '../components/AudioRecorder.vue'
import ChatInterface from '../components/ChatInterface.vue'
import CampusMap from '../components/CampusMap.vue'

const handleRecordingComplete = (text) => {
  console.log('语音识别结果:', text)
}
</script>

<style scoped>
.home {
  padding: 20px;
}

.map-container {
  height: 80vh;
  background: #f5f7fa;
  border-radius: 8px;
}

.chat-container {
  height: 80vh;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
}
</style> 