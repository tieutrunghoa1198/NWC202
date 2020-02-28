export default {
    STT: {
        rootPath: 'https://api.fpt.ai/hmi/asr/general',
        headers: {
            'api-key': '4J5KJAD4lliWF5c3KZhkPRSCC6hF7trI'
        }
    },
    TTS: {
        rootPath: 'https://api.fpt.ai/hmi/tts/v5',
        headers: {
            'api-key': '4J5KJAD4lliWF5c3KZhkPRSCC6hF7trI',
            'voice': 'banmai',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    },
    rootAPI: process.env.REACT_APP_STATE === 'localhost' ? 'http://localhost:8000' : 'https://voicebot-fpt.herokuapp.com/'
}