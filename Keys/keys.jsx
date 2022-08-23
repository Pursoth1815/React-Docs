function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
    // IF key is not provided it will show warning ( Keys used within arrays should be unique among their siblings )
      <li key={number.toString()}> 
        {number}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
  
  const numbers = [1, 2, 3, 4, 5];
  
  const root = ReactDOM.createRoot(document.getElementById('root')); 
  root.render( <NumberList numbers={numbers} />);