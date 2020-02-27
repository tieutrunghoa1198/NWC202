export default  {
    rootPath: 'https://api.fpt.ai/hmi/asr/general',
    headers: {
        'api-key': 'VR5x7QPp5R6iQxniZ9S6o2JIXfftBRaf'
    },
    rootAPI: process.env.REACT_APP_STATE === 'localhost' ? 'http://localhost:8000' : 'https://voicebot-fpt.herokuapp.com/'
}