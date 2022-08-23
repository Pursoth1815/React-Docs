


/* NEVER EVER MODIFY THE STATE */
/* IT MAY SIMPLY SHOW WHITE SCREEN INSTEAD OF ERROR */
  


import { useState } from 'react'
import './App.css';

const App  = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <button type="button" class="btn btn-primary" onClick={ () => {setCount( (prevCount) => prevCount - 1)}}>-</button>
      <h1>{count}</h1>
      <button type="button" class="btn btn-primary"onClick={ () => {setCount( (prevCount) => prevCount + 1)}}>+</button>
    </div>
  );
}

export default App;