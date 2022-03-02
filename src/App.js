import React from 'react';
import './App.css';
import Signup from './components/Sigup';
import signin from './signin.svg';


function App() {
  return (
    <div className='App'>
<img src={signin} alt="signin" className='image'></img>
<Signup/>
    </div>
  );
}

export default App;
