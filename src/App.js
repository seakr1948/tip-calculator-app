import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import './css/utilities.css'


import Logo from './images/logo.svg'
import Dollar from './images/icon-dollar.svg'
import Person from './images/icon-person.svg'

import InputComponent from './components/InputComponent';
import TipSelect from './components/TipSelect';
import TipAmount from './components/TipAmount';
import InputPeople from './components/InputPeople';

function App() {

  const [bill, setBill] = useState(0);
  
  const [number, setNumber] = useState(0);
  const [tipAmount, setTipAmount] = useState(0.00);
  const [total, setTotal] = useState(0.00);

  const calculate = (bill, tip_percent, number) => {
    bill = parseFloat(bill)
    number = parseFloat(number)
    
    let tip = bill * tip_percent;
    let total = bill + tip;

    console.log(tip/number)
    
    setTipAmount((tip / number))
    setTotal((total / number))
  }

  return (
    <div className="App flex">
      <div className="tip-container flex">
        
        <img src={Logo} alt="Logo" />
        
        <div className="tip-body">
          <InputComponent Label="Bill" icon={Dollar} Bill={bill} setBill={setBill}/>
          
          <TipSelect Bill={bill} calculate={calculate}  Number={number}/>

          <InputPeople Label="Number of People" icon={Person} setNumber={setNumber} Number={number}/>

          <TipAmount Amount={tipAmount} Total={total}/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
