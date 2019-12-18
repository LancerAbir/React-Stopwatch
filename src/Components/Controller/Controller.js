import React, { Component } from 'react'

class Controller extends Component {


    state = {
        start: true,
        pause: false,
        lap: false,
        reset: false
    }

    clickStart(){
        this.setState({
            ...this.state,
            start: false, 
            pause: true,
            lap: true
        })

        this.props.start()
    }

    clickPause(){
        this.setState({
            ...this.state,
            pause: false,
            start: true,
            reset: true,
            lap: false
        })

        this.props.pause()
    }

    clickLap(){
        this.setState({
            ...this.state,
            lap: true,
        })

        this.props.laps()
    }

    clickReset(){
        this.setState({
            ...this.state,
            start: true,
            pause: false,
            lap: false,
            reset: false
        })

        this.props.reset()
    }

    render() {
        let output = null

        if (this.state.start && !this.state.reset) {
            output = (
                <div className="py-5">
                    <button 
                        className="btn btn-success btn-lg px-5 ml-5"
                        onClick = { (event) => this.clickStart(event) }
                        >Start
                    </button>
                </div>
            )
        } else if (this.state.pause && this.state.lap) {
            output = (
                <div className="py-5">
                    <button 
                        className="btn btn-primary btn-lg px-5 ml-5"
                        onClick = { (event) => this.clickPause(event) }
                        >Pause
                    </button>
                    <button 
                        className="btn btn-warning btn-lg px-5 ml-5"
                        onClick = { (event) => this.clickLap(event) }
                        >Lap
                    </button>
                </div>
            )
        } else if (this.state.start && this.state.reset) {
            output = (
                <div className="py-5">
                    <button 
                        className="btn btn-success btn-lg px-5 ml-5"
                        onClick = { (event) => this.clickStart(event) }
                        >Start
                    </button>
                    <button 
                        className="btn btn-dark btn-lg px-5 ml-5"
                        onClick = { (event) => this.clickReset(event) }
                        >Reset
                    </button>
                </div>
            )
        }
        return ( 
            <div>
                {output}
            </div>
        )
    }
}
export default Controller