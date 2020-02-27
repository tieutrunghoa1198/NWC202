export default {
    rootPath: 'https://api.fpt.ai/hmi/asr/general',
    headers: {
        'api-key': 'ZDm0cLDhn1y8QXCsMnHoLEw290AT0H3s'
    },
    rootAPI: process.env.REACT_APP_STATE === 'localhost' ? 'http://localhost:8000' : 'https://voicebot-fpt.herokuapp.com/'
}