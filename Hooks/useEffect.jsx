import { useState, useEffect } from 'react'
import './App.css';

const App  = () => {

  const [counter, setCount] = useState(0);

  useEffect( () => {

    // setCount = 100; Wrong way of declartion

    // counter = 100; Wrong way of declartion.

    // setCount(50); Correct Way.
    
    alert('Whoa you have changed Counter Manually', + counter);


  }, [counter]); // if Depeendencies Array has variable it will able to get inside it
  
  // Depeendencies Array so that it can only goes once if it is [] empty array

  return (
    <div className="App">
      <button type="button" className='btn btn-primary' onClick={ () => {setCount( (prevCount) => prevCount - 1)}}>-</button>
      <h1>{counter}</h1>
      <button type="button" className='btn btn-primary' onClick={ () => {setCount( (prevCount) => prevCount + 1)}}>+</button>
    </div>
  );
}

export default App;