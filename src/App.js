import React , {userState} from 'react';
import './App.css';
import HelloWorld from './Components/HelloWorld'
import HiWorld from './Components/HiWorld'
import CounterExample from './Components/CounterExample'

function App() {
  return (
    <>
    <HelloWorld name="Assa"/>
    <HiWorld name="Hen" />
    <div>Im on 28:30 at React Crash Course 2020 video on youtube</div>
    {/* <CounterExample/> */}
    </>
  )
}

export default App;
