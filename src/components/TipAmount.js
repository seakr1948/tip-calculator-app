import React from 'react'
import '../css/tip-amount.css'


const TipAmount = ({Amount, Total}) => {
    return (
        <div className="tip-amount-container flex">
            <div className="tip-results flex">
                <p>Tip Amount <span className="subtext">/ person</span></p>
                <p className="output">${Amount.toFixed(2)}</p>
            </div>
            <div className="tip-results flex">
                <p>Total <span className="subtext">/ person</span></p>
                <p className="output">${Total.toFixed(2)}</p>
            </div>
            <button>Reset</button>
        </div>
    )
}

export default TipAmount
