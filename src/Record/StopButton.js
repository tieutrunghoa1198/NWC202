import React from 'react'
import { Button } from 'react-bootstrap'
export default function StopButton(props) {
    return (
        <Button onClick={props.stopRecording} variant="danger"
            className="text-capitalize my-1 mx-1 col-6 col-sm-3 col-xl-2">
            Stop record
        </Button>
    )
}
