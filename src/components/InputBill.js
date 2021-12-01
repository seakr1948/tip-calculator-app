import React from 'react'

import '../css/input-component.css'

const InputComponent = ({Label, icon, Bill, setBill}) => {
    return (
        <div className="input-container">
            <label htmlFor={Label}>{Label}</label>
            <div className="flex input-box">
                <img src={icon} alt={Label} />
                <input  className="input" 
                        type="text" 
                        inputMode="decimal" 
                        placeholder="0" 
                        min="0" 
                        value={Bill} 
                        onChange={(event) => setBill(event.target.value)} id={Label} 
                />
            </div>
            
        </div>
    )
}

export default InputComponent
