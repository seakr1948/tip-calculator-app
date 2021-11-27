import React from 'react'

import '../css/input-component.css'

const InputComponent = ({Label, icon}) => {
    return (
        <div className="input-container">
            <label htmlFor={Label}>{Label}</label>
            <div className="flex input-box">
                <img src={icon} alt={Label} /><input className="input" type="number" value="0" name="" id={Label} />
            </div>
            
        </div>
    )
}

export default InputComponent
