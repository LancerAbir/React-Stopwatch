import React, { Component } from 'react'
import './Title.css'


class Title extends Component {
    
    // state 
    state = {
        title: 'this is react title',
        isInput: false
    }


    // onclick method
    editHandler() {
        this.setState({
            ...this.state,
            isInput: true
        })
    }

    inputChange(event) {
        this.setState({
            ...this.state,
            title: event.target.value
        })
    }

    onKeyPressHandler(event) {
        if(event.key === 'Enter'){
            this.setState({
                ...this.state,
                isInput: false
            })
        }
    }

    onBlurHandler(event) {
        this.setState({
            ...this.state,
            isInput: false
        })
    }
  
    render() {
        let output = null

        if (this.state.isInput) {
            output = (
                <div>
                    <input 
                    className="form-control" 
                    onChange   = { (event) => this.inputChange(event) }
                    onKeyPress = { (event) => this.onKeyPressHandler(event) }
                    onBlur     = { (event) => this.onBlurHandler(event) }
                    type="text" 
                    value={this.state.title}
                    />             
                </div>
            )
        } else {
            output = (
                <div className="d-flex main">
                    <h5 className="display-4"> {this.state.title} </h5> 
                    <span onClick={ (event) => this.editHandler(event) } className="ml-auto icon">
                        <i className="fas fa-edit"></i>
                    </span>
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
export default Title