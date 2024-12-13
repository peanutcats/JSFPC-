<template>
  <div class="chat-interface">
    <div class="chat-messages" ref="messageContainer">
      <div v-for="(message, index) in messages" 
           :key="index" 
           :class="['message', message.type]">
        <el-avatar 
          :icon="message.type === 'user' ? UserFilled : Service" 
          :size="40"
        />
        <div class="message-content">
          <p>{{ message.text }}</p>
          <span class="time">{{ message.time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue'
import { UserFilled, Service } from '@element-plus/icons-vue'

const messages = ref([
  {
    type: 'system',
    text: '您好！我是校园智能导览助手，请问有什么可以帮您？',
    time: new Date().toLocaleTimeString()
  }
])

const messageContainer = ref(null)

// 滚动到最新消息
const scrollToBottom = async () => {
  await nextTick()
  if (messageContainer.value) {
    messageContainer.value.scrollTop = messageContainer.value.scrollHeight
  }
}

// 添加新消息
const addMessage = (text, type = 'user') => {
  messages.value.push({
    type,
    text,
    time: new Date().toLocaleTimeString()
  })
}

// 监听消息变化，自动滚动
watch(messages, () => {
  scrollToBottom()
}, { deep: true })

defineExpose({
  addMessage
})
</script>

<style scoped>
.chat-interface {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.message {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.message.system {
  flex-direction: row;
}

.message.user {
  flex-direction: row-reverse;
}

.message-content {
  max-width: 70%;
  background: #f4f4f5;
  padding: 10px 15px;
  border-radius: 8px;
  position: relative;
}

.message.user .message-content {
  background: #e6f4ff;
}

.time {
  font-size: 12px;
  color: #999;
  position: absolute;
  bottom: -20px;
  left: 0;
}

.message.user .time {
  right: 0;
  left: auto;
}
</style> 