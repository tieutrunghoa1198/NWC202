import React from 'react'
import { Button } from 'react-bootstrap'
export default function StartButton(props) {
    return (
        <Button onClick={props.startRecording} variant="primary"
            className="text-capitalize my-1 mx-1 col-6 col-sm-3 col-xl-2">
            Start record
        </Button>
    )
}
