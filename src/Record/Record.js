import React, { Component } from 'react'
import {ReactMic} from 'react-mic'
import {Button} from 'react-bootstrap'
import axios from '../axios'
export default class Record extends Component {

    constructor(props) {
        super(props)
        this.state = {
            transcript: '',
            record: false
        }
        this.onStop = this.onStop.bind(this)
    }

    setText = (responseText) => {
        this.setState({
            transcript: responseText
        })
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
    
    // blobToFile = (blob, fileName) => {
    //     blob.lastModifiedDate = new Date()
    //     blob.name = fileName
    //     return blob
    // }

    sendRequest = (blob) => {
        let responseText
        axios
        .post('', blob)
        .then(response => {
            console.log(response.data.hypotheses[0].utterance);
            responseText = response.data.hypotheses[0].utterance
            this.setText(responseText)
        }).catch(err => {
            console.log(err);
        })
    }

    onStop(recordedBlob) {
        this.sendRequest(recordedBlob.blob)
    }

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
                </div>
                <div className="d-flex justify-content-center my-3">
                    <p  className="display-4">
                        {this.state.transcript}
                    </p>
                </div>
            </>
        )
    }
}
