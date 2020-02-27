import React, { Component } from 'react'
import { ReactMic } from 'react-mic'
import { Button } from 'react-bootstrap'
import axios from '../Axios and config/axios'
import axiosLocal from '../Axios and config/axiosLocal'
export default class Record extends Component {

    constructor(props) {
        super(props)
        this.state = {
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

    connectServer = () => {
        axiosLocal
            .get('/')
            .then(res => {
                console.log(res)
                this.setText(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    sendRequest = (blob) => {
        let responseText
        axios
            .post('', blob)
            .then(response => {
                console.log(response.data.hypotheses[0].utterance);
                responseText = response.data.hypotheses[0].utterance
                this.setText(responseText)
            })
            .catch(err => {
                console.log(err);
            })
    }
    /* 
    
    componentWillMount and componentDidMount

    */
    render() {
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
                    <Button onClick={this.connectServer} variant="danger"
                        className="text-capitalize my-1 mx-1 col-6 col-sm-3 col-xl-2">
                        Connect server
                    </Button>
                </div>
                <div className="d-flex justify-content-center my-3">
                    <p className="display-4">
                        {this.state.transcript}
                    </p>
                </div>
            </>
        )
    }
}
