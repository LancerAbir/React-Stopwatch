import React, { Component } from 'react'; 
import './App.css';
import Title from './Title/Title';
import CountDown from './CountDown/CountDown';
import Controller from './Controller/Controller';
import Laps from './laps/laps';

class App extends Component { 

    // state 
    state = {
        time: {
            min: 0,
            sec: 0,
            mli:  0
        },
        laps: []
    }

    getStart() {
        this.intervalID = setInterval(() => {
            let min = this.state.time.min
            let sec = this.state.time.sec
            let mli = this.state.time.mli

            if (mli >= 10) {
                sec = sec + 1 
                mli = 0 
            }

            if (sec >= 60) {
                min = min + 1 
                sec = 0 
            }

            this.setState({
                ...this.state,
                time: {
                    min,
                    sec,
                    mli: mli + 1
                }
            })


        }, 100)
    }

    getPause() {
        clearInterval(this.intervalID)
    }

    getLap() {
        let time = {
            ...this.state.time
        }
        this.setState({
            ...this.state.time,
            laps: [time, ...this.state.laps]
        })
        console.log(this.state.laps);
        
    }

    getReset() {
        this.setState({
            time: {
                min: 0,
                sec: 0,
                mli:  0
            },
            laps: []
        })
    }

    render(){
        return ( 
            <div className="App" >
                <div className="container py-5" >
                    <div className="row">
                        <div className="col-sm-8 offset-sm-2">
                            <h1 className = "display-5"> React Project </h1>   
                            <Title / >
                            <CountDown setTime={ this.state.time }/ >
                            <Controller 
                            start= { () => this.getStart() } 
                            pause= { () => this.getPause() } 
                            reset= { () => this.getReset() } 
                            laps= { () => this.getLap() } 
                            />
                            <Laps className="my-5" laps={ this.state.laps } />
                        </div>
                    </div>
                </div > 
            </div>
        );
    }
}
export default App;