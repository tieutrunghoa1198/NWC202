import React, { Component } from 'react'
import {ReactMic} from 'react-mic'
import {Button} from 'react-bootstrap'
import axios from 'axios'
export default class Record extends Component {

    constructor(props) {
        super(props)
        this.state = {
            responseText: '',
            record: false
        }
        this.onStop = this.onStop.bind(this)
    }

    setText = (responseText) => {
        this.setState({
            responseText: responseText
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
        let url = 'https://api.fpt.ai/hmi/asr/general'
        let headers = {
            'api-key': 'VR5x7QPp5R6iQxniZ9S6o2JIXfftBRaf'
        }
        axios({
            url: url,
            method: "POST",
            data: blob,
            headers
        }).then(response => {
            console.log(response.data.hypotheses[0].utterance);
            responseText = response.data.hypotheses[0].utterance
        }).catch(err => {
            console.log(err);
        })
        this.setText(responseText)
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
                    // onData={this.onData}  
                    onStop={this.onStop}
                    mimeType="audio/mp3"
                    strokeColor="#000000"
                    backgroundColor="#FF4081"
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
            </>
        )
    }
}
