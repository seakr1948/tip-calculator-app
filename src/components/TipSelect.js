import React from 'react'
import '../css/tip-select.css'

const TipSelect = () => {
    return (
        <div>
            <p>Select Tip %</p>
            <div className="tip-select flex">
                <button className="btn" id="selected">5%</button>
                <button className="btn">10%</button>
                <button className="btn">15%</button>
                <button className="btn">25%</button>
                <button className="btn">50%</button>
                <button className="btn"><input type="number" name="" id="custom-tip" placeholder="Custom"/></button>
            </div>
        </div>
    )
}

export default TipSelect
