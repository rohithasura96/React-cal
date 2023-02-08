
import './App.css';
import react , {useState} from 'react';
import {e, evaluate} from 'mathjs';

function App() {
  const [exp, setCount] = useState();
  const Inc = (e) => {
      setCount( exp + e.target.innerHTML);
     
  } 

  
  const clear = () => {
    setCount('');
    
    
  }
  const cut = () => {
    setCount(exp.slice(0, -1));
  }

  const calculate = () => {
   let result = evaluate(exp);
   let newCount =+ result ;
    setCount(newCount);
    
  }
  

  return (
    <div className="main">
      <div className="App">
      <div className='input' >{exp}</div>
      
      <div className="row1">
        <button onClick={clear}>C</button>
        <button onClick={cut}>X</button>
        <button onClick={Inc}>%</button>
        <button onClick={Inc}>/</button>
        <button onClick={Inc}>7</button>
        <button onClick={Inc}>8</button>
        <button onClick={Inc}>9</button>
        <button onClick={Inc}>*</button>
      
        <button onClick={Inc}>4</button>
        <button onClick={Inc}>5</button>
        <button onClick={Inc}>6</button>
        <button onClick={Inc}>-</button>
       
        <button onClick={Inc}>3</button>
        <button onClick={Inc}>2</button>
        <button onClick={Inc}>1</button>
        <button onClick={Inc}>+</button>
       </div>
       <div className="rowend">
         <button onClick={Inc}>0</button>
         <button onClick={Inc}>.</button>
         <button onClick={calculate}>=</button>
        </div>
      </div>

    </div>
    
    

  );
}

export default App;
