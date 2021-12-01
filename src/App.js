import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import './css/utilities.css'


import Logo from './images/logo.svg'
import Dollar from './images/icon-dollar.svg'
import Person from './images/icon-person.svg'

import InputBill from './components/InputBill';
import TipSelect from './components/TipSelect';
import TipAmount from './components/TipAmount';
import InputPeople from './components/InputPeople';

function App() {

  const [bill, setBill] = useState("");
  const [selected, setSelected] = useState(null)
  const [number, setNumber] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const calculate = (bill, tip_percent, number) => {
    bill = parseFloat(bill)
    number = parseFloat(number)
    
    if (number > 0){
    let tip = bill * tip_percent;
    let total = bill + tip;

    console.log(tip/number)
    
    setTipAmount((tip / number))
    setTotal((total / number))
    }
  }

  return (
    <div className="App flex">
      <div className="tip-container flex">
        
        <img src={Logo} alt="Logo" />
        
        <div className="tip-body">
          <div className="tip-section flex">
            <InputBill Label="Bill" icon={Dollar} Bill={bill} setBill={setBill}/>
            <TipSelect Bill={bill} calculate={calculate}  Number={number} selected={selected} setSelected={setSelected}/>
            <InputPeople Label="Number of People" icon={Person} setNumber={setNumber} Number={number}/>
          </div>
          <TipAmount Amount={tipAmount} Total={total} Bill={bill} Number={number} setBill={setBill} setNumber={setNumber} setTipAmount={setTipAmount} setTotal={setTotal} setSelected={setSelected}/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
