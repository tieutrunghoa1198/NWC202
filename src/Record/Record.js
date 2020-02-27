import React, { Component } from 'react'
import { ReactMic } from 'react-mic'
import { Button } from 'react-bootstrap'
import { ClipLoader } from "react-spinners"
import axios from '../Axios and config/axios'
import axiosLocal from '../Axios and config/axiosLocal'

// import data from './'
export default class Record extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            transcript: '',
            record: false
        }
        this.onStop = this.onStop.bind(this)
        // this.setText = this.setText.bind(this)
    }
    /*
        function for react-mic 
    */
    onStop(recordedBlob) {
        this.sendRequest(recordedBlob.blob)
    }

    startRecording = () => {
        this.setState({
            record: true
        })
    }

    stopRecording = () => {
        this.isLoading(true)
        this.setState({
            record: false
        })
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

    connectServer = () => {
        this.isLoading(true)
        axiosLocal
            .get('/')
            .then(res => {
                this.isLoading(false)
                this.setText(res.data)
            })
    }

    sendRequest = (blob) => {
        let responseText
        axios
            .post('', blob)
            .then(response => {
                responseText = response.data.hypotheses[0].utterance
                this.isLoading(false)
                this.setText(responseText)
            }).catch(err => {
                console.log(err);
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
                    onStop={this.onStop}
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
                    <Button onClick={this.connectServer} variant="success"
                        className="text-capitalize my-1 mx-1 col-6 col-sm-3 col-xl-2">
                        Connect server
                    </Button>
                </div>

                <div className="d-flex justify-content-center my-3">
                    <p className="display-4">
                        {loading ? <ClipLoader /> : transcript}
                    </p>
                </div>
            </>
        )
    }
}
