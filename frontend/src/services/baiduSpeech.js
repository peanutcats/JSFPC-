import axios from 'axios'

export function useBaiduSpeech() {
  let mediaRecorder = null
  let audioChunks = []

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      mediaRecorder = new MediaRecorder(stream)
      
      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data)
      }

      mediaRecorder.start()
    } catch (error) {
      console.error('录音失败:', error)
      ElMessage.error('无法访问麦克风')
    }
  }

  const stopRecording = () => {
    return new Promise((resolve) => {
      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' })
        audioChunks = []
        
        // 这里需要调用百度语音API，先用模拟数据
        try {
          // TODO: 实现百度语音API调用
          const response = await sendToSpeechAPI(audioBlob)
          resolve(response.text)
        } catch (error) {
          console.error('语音识别失败:', error)
          ElMessage.error('语音识别失败')
          resolve('')
        }
      }

      mediaRecorder.stop()
      mediaRecorder.stream.getTracks().forEach(track => track.stop())
    })
  }

  const sendToSpeechAPI = async (audioBlob) => {
    // TODO: 实现百度语音API的调用
    // 这里先返回模拟数据
    return { text: '这是语音识别的结果' }
  }

  return {
    startRecording,
    stopRecording
  }
} 