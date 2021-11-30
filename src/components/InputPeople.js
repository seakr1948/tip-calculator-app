import React from 'react'
import "../css/input-component.css"
const InputPeople = ({Label, icon, setNumber, Number}) => {
    return (
        <div className="input-container">
            <div className="input-header flex">
                <label htmlFor={Label}>{Label}</label> 
                <p id={
                    Number === "0" ? "error-text-visible"
                    : "error-text-hidden"
                }
                >
                    Can't be zero
                </p>
            </div>
            
            <div 
                className="flex input-box" 
                id={ 
                    Number === "0" ? "error-boundary"
                    : ""
                }
                >
                <img src={icon} alt={Label} />
                <input 
                    className="input" 
                    type="number" 
                    min="0" 
                    placeholder="0" 
                    onChange={(event) => {setNumber(event.target.value)}} 
                    id={Label}
                    value={Number} 
                />
            </div>
            
        </div>
    )
}

export default InputPeople
