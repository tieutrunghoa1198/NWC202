import React, { Component } from 'react'
import { ReactMic } from 'react-mic'
import { Button } from 'react-bootstrap'
import { ClipLoader } from "react-spinners"
import axios from '../Axios and config/axios'
import axiosLocal from '../Axios and config/axiosLocal'
import axiosTTS from '../Axios and config/axiosTTS'
export default class Record extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            transcript: '',
            record: false,
        }
        this.audio = new Audio()
        this.speechReceived = this.speechReceived.bind(this)
    }
    /*
        function for react-mic 
    */
    startRecording = () => {
        this.audio.pause()
        this.setState({
            record: true
        })
    }

    stopRecording = () => {
        if (this.state.record !== false) this.isLoading(true)
        this.setState({
            record: false
        })
    }

    speechReceived(recordedBlob) {
        //send user's voice to fpt to get response text
        this.speechToText(recordedBlob.blob)
    }
    /*
        function for data
    */
    setText = (responseText) => {
        this.setState({
            transcript: responseText
        })
    }

    isLoading = (boolean) => {
        this.setState({
            loading: boolean
        })
    }

    requestTo_VoiceBot = (transcript) => {
        let tts
        this.isLoading(true)
        axiosLocal
            .post('/api/chatbot/', {
                question: transcript
            })
            .then(res => {
                tts = res.data
                console.log(res.data)
                this.setText(res.data)
                this.textToSpeech(tts)
            })
            .catch(err => {
                let errMsg = 'Chà, có vẻ như câu hỏi của bạn nằm ngoài kiến thức của tui rùi, liên lạc với tiêu hòa để giải quyết nhé'
                this.textToSpeech(errMsg)
                console.log('Request to voice bot error: ', err)
            })
    }

    speechToText = (blob) => {
        let responseText
        axios
            .post('', blob)
            .then(response => {
                responseText = response.data.hypotheses[0].utterance
                this.setText(responseText)
                this.requestTo_VoiceBot(responseText)
            }).catch(err => {
                console.log('Request to FPT error: ', err);
            })
    }

    textToSpeech = (tts) => {
        let urlResponse
        axiosTTS
            .post('', tts)
            .then(response => {
                urlResponse = response.data.async
                console.log(urlResponse)
                this.waitLinkAvailable(urlResponse, 5000)
            }).catch(err => {
                console.log('Text to speech error: ', err);
            })
    }

    waitLinkAvailable = (url, timeout) => {
        /*
            Lỗi:  DOMException: The play() request was interrupted by a call to pause()
        */
        let { audio } = this
        console.log('start')
        setTimeout(() => {
            audio.src = url
            audio.play().then(() => {
                this.isLoading(false)
                console.log('Ready status: ', audio.readyState)
            }).catch(err => {
                console.log('Ready status: ', audio.readyState)
                console.log('Lỗi: ', err)
            })
        }, timeout);
    }
    /* 
    
    componentWillMount and componentDidMount

    */
    render() {
        const { loading, transcript } = this.state
        return (
            <>
                <ReactMic
                    record={this.state.record}
                    className="sound-wave w-100"
                    onStop={this.speechReceived}
                    mimeType="audio/mp3"
                    strokeColor="#000000"
                    backgroundColor="#ffffff"
                />
                <div className="row justify-content-center mt-2">
                    <Button onClick={this.startRecording} variant="primary"
                        className="text-capitalize my-1 mx-1 col-6 col-sm-3 col-xl-2">
                        Start record
                    </Button>
                    <Button onClick={this.stopRecording} variant="danger"
                        className="text-capitalize my-1 mx-1 col-6 col-sm-3 col-xl-2">
                        Stop record
                    </Button>
                </div>
                <div className="d-flex justify-content-center my-3">
                    <p className="display-4 text-center">
                        {loading ? <ClipLoader /> : transcript}
                    </p>
                </div>
            </>
        )
    }
}
