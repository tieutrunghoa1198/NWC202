import React, { Component } from 'react'
import {ReactMic} from 'react-mic'
import {Button} from 'react-bootstrap'
export default class Record extends Component {

    constructor(props) {
        super(props)
        this.state = {
            record: false
        }
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
        console.log('recordedBlob is: ',recordedBlob.blobURL)
        // save URL to mp3 file then POST to FPT.AI api
        // code goes here

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
                    className="text-capitalize my-1 mx-1 col-6 col-sm-4 col-lg-3 col-xl-2">
                        Start record
                    </Button>
                    <Button onClick={this.stopRecording} variant="danger" 
                    className="text-capitalize my-1 mx-1 col-6 col-sm-4 col-lg-3 col-xl-2">
                        Stop record
                    </Button>
                </div>
            </>
        )
    }
}
