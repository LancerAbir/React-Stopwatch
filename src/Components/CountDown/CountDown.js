import React from 'react'
import Digit from './Digit/Digit'

const CountDown = ({setTime}) => {
    const {min , sec, mli } = setTime;
    return ( 
        <div className="d-flex py-3">
            <Digit color="red" value={ min }/>
            <Digit color="green" value={ sec }/>
            <Digit color="blue" value={ mli }/>
        </div>
    )
}
export default CountDown