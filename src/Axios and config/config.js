// require('dotenv').config()
const KEY = "petQoJTJmXHa6v5sY9IwdJmOzAvyaYqy"
export default {
    STT: {
        rootPath: 'https://api.fpt.ai/hmi/asr/general',
        headers: {
            'api-key': process.env.API_KEY
        }
    },
    TTS: {
        rootPath: 'https://api.fpt.ai/hmi/tts/v5',
        headers: {
            'api-key': KEY,
            'voice': 'banmai',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    },
    rootAPI: process.env.REACT_APP_STATE === 'localhost' ? 'http://localhost:8000' : 'https://voicebot-fpt.herokuapp.com/'
}