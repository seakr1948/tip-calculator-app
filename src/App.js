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

function App() {

  const [bill, setBill] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  return (
    <div className="App flex">
      <div className="tip-container flex">
        
        <img src={Logo} alt="Logo" />
        
        <div className="tip-body">
          <InputComponent Label="Bill" icon={Dollar}/>
          
          <TipSelect />

          <InputComponent Label="Number of People" icon={Person}/>

          <TipAmount />
        </div>
        
      </div>
    </div>
  );
}

export default App;
