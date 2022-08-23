// const root = ReactDOM.createRoot(document.getElementById('root'));

function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  root.render(<Clock date={new Date()} />);
}

setInterval(tick, 1000); 

// <------------ Converting Function to Class  ------------> 

// const root = ReactDOM.createRoot(document.getElementById('root'));

class Clock extends React.Component {
    render() {
        return (
            <div>
              <h1>Hello, world!</h1>
              <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
            </div>
          );
    }
}

function tick() {
  root.render(<Clock date={new Date()} />);
}

setInterval(tick, 1000); 
