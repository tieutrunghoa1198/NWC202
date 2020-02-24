import React, { Component } from 'react'
import {ReactMic} from 'react-mic'
import {Button} from 'react-bootstrap'
// import axios from 'axios'
export default class Record extends Component {

    constructor(props) {
        super(props)
        this.state = {
            url: '',
            record: false
        }
        this.onStop = this.onStop.bind(this)
    }

    sendRequest = () => {
        // url
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

    onData(recordedBlob) {
        console.log('chunk of real time data is: ', recordedBlob)
    }

    onStop(recordedBlob) {
        // var url = recordedBlob.blobURL
        console.log('recordedBlob is: ',recordedBlob.blobURL)
        this.setState({
            url: recordedBlob.blobURL
        })
        console.log('State URL: ',this.state.url)
    }

    render() {
        return (
            <>
                <ReactMic
                    record={this.state.record}
                    className="sound-wave w-100"
                    // onData={this.onData}  
                    onStop={this.onStop}
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
                    <Button onClick={this.stopRecording} variant="danger" 
                    className="text-capitalize my-1 mx-1 col-6 col-sm-3 col-xl-2">
                        Send request
                    </Button>
                </div>
            </>
        )
    }
}
