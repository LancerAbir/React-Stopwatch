import React from 'react'

const Laps = (props) => {
    return(
        <ul className="list-item list-item-flush">
            { props.laps.map((lap, index) => {
                return(
                    <li key={ index }className="list-group-item">
                        <h4>
                            <span className="text-dark">Minute: </span>
                            <span className="text-danger">{ lap.min } </span>
                            <span className="text-dark">Second: </span>
                            <span className="text-danger">{ lap.sec } </span>
                            <span className="text-dark">Mili Second: </span>
                            <span className="text-danger">{ lap.mli } </span>
                        </h4>
                    </li>
                )
            })}
        </ul>
    )
}
export default Laps