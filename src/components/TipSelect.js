import { useState } from 'react'
import React from 'react'
import '../css/tip-select.css'

const TipSelect = ({Bill, calculate, Number, selected, setSelected}) => {
    
    const [custom, setCustom] = useState("")
    const tipselection = [0.05, 0.10, 0.15, 0.25, 0.5]

    console.log(tipselection)
    return (
        <div>
            <p>Select Tip %</p>
            <div className="tip-select flex">
                
                {tipselection.map((tip, index) => {
                    
                    return <button key={index} id= {index === selected ? 'selected' : ''}
                    onClick={() => {
                        setSelected(index)
                        calculate(Bill, tip, Number)
                        }}>
                        {tip*100}%
                        </button>
                })}
                <button className="btn">
                    <input type="number" name="" id="custom-tip" placeholder="Custom" min="0"
                    value={custom}
                    onBlur={() => setCustom("")}
                    onChange={(event) => setCustom(event.target.value)}
                    onClick={() => {setSelected(null)}} 
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            if (custom !== ""){
                            const custom_tip = parseFloat(custom)/100
                            console.log(custom_tip)
                            calculate(Bill, custom_tip, Number)
                            }
                        }
                    }}
                    />
                </button>
            </div>
        </div>
    )
}

export default TipSelect
