<template>
  <div class="audio-recorder">
    <el-button 
      :type="isRecording ? 'danger' : 'primary'"
      :icon="isRecording ? Microphone : Microphone"
      @mousedown="startRecording"
      @mouseup="stopRecording"
      @mouseleave="stopRecording"
    >
      {{ isRecording ? '正在录音...' : '按住说话' }}
    </el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Microphone } from '@element-plus/icons-vue'
import { useBaiduSpeech } from '../services/baiduSpeech'

const emit = defineEmits(['recordingComplete'])
const isRecording = ref(false)
const { startRecording: startRecord, stopRecording: stopRecord } = useBaiduSpeech()

const startRecording = async () => {
  isRecording.value = true
  await startRecord()
}

const stopRecording = async () => {
  if (isRecording.value) {
    isRecording.value = false
    const text = await stopRecord()
    emit('recordingComplete', text)
  }
}
</script>

<style scoped>
.audio-recorder {
  text-align: center;
  padding: 20px;
}
</style> 