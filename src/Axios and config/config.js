export default {
    STT: {
        rootPath: 'https://api.fpt.ai/hmi/asr/general',
        headers: {
            'api-key': '8EIqiB5Ih5sao0W2eiNoqq9F51V7DPeW'
        }
    },
    TTS: {
        rootPath: 'https://api.fpt.ai/hmi/tts/v5',
        headers: {
            'api-key': '8EIqiB5Ih5sao0W2eiNoqq9F51V7DPeW',
            'voice': 'banmai',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    },
    rootAPI: process.env.REACT_APP_STATE === 'localhost' ? 'http://localhost:8000' : 'https://voicebot-fpt.herokuapp.com/'
}