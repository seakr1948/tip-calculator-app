import React from 'react'

const InputPeople = ({Label, icon, setNumber, Number}) => {
    return (
        <div className="input-container">
            <label htmlFor={Label}>{Label}</label>
            <div className="flex input-box">
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
