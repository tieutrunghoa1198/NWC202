export default {
    STT: {
        rootPath: 'https://api.fpt.ai/hmi/asr/general',
        headers: {
            'api-key': 'ZDm0cLDhn1y8QXCsMnHoLEw290AT0H3s'
        }
    },
    TTS: {
        rootPath: 'https://api.fpt.ai/hmi/tts/v5',
        headers: {
            'api-key': 'ZDm0cLDhn1y8QXCsMnHoLEw290AT0H3s',
            'voice': 'banmai',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    },
    rootAPI: process.env.REACT_APP_STATE === 'localhost' ? 'http://localhost:8000' : 'https://voicebot-fpt.herokuapp.com/'
}