import './App.css';
import Pad from './Components/Pad/Pad';
import Top from './Components/Top/Top';
import Screen from './Components/Screen/Screen';
import { useEffect, useState } from 'react';
function App() {
  const [name, setName] = useState(1)
  useEffect(()=>{
    setName(name+10);
  },[])
  function handle(){
    setName(name+1)
  }
  return (
    <div className="App">
      <h1 >Hello {name}</h1>
      <button onClick={handle}>click</button>
      <Top />
      <Pad />
    </div>
  );
}

export default App;
