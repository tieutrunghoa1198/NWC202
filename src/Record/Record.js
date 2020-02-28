import React, { Component } from 'react'
import { ReactMic } from 'react-mic'
import { Button } from 'react-bootstrap'
import { ClipLoader } from "react-spinners"
import axios from '../Axios and config/axios'
import axiosLocal from '../Axios and config/axiosLocal'
import axiosTTS from '../Axios and config/axiosTTS'

// import data from './'
export default class Record extends Component {

    constructor(props) {
        super(props)
        this.state = {
            url: '',
            loading: false,
            transcript: '',
            record: false
        }
        this.player = new Audio()
        this.textReceived = this.textReceived.bind(this)
    }
    /*
        function for react-mic 
    */
    startRecording = () => {
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

    textReceived(recordedBlob) {
        //send user's voice to fpt to get response text
        this.requestToFPT(recordedBlob.blob)
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
                this.isLoading(false)
                this.setText(res.data)
                this.textToSpeech(tts)
            })
            .catch(err => {
                console.log('Request to voice bot error: ', err)
            })

    }

    requestToFPT = (blob) => {
        let responseText
        //use axios to send binary large object
        axios
            .post('', blob)
            .then(response => {
                //set this.state.transcript as response text
                responseText = response.data.hypotheses[0].utterance
                this.isLoading(false)
                if (responseText === '')
                    this.setText('Có vẻ như bạn chưa nói gì cả. Hãy thử lại nhé!')
                else {
                    this.setText(responseText)
                    this.requestTo_VoiceBot(responseText)
                }
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
                this.setState({
                    url: urlResponse
                })
                console.log(response.data.async)
                this.player.src = urlResponse
                this.player.play()
            }).catch(err => {
                console.log('Text to speech error: ', err);
            })
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
                    onStop={this.textReceived}
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
