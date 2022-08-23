// <------------ Add an Constructor Class  ------------> 


const root = ReactDOM.createRoot(document.getElementById('root'));

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

// <------------ LifeCycle Methoeds  ------------> 

    componentDidMount() {
        this.timeID = setInterval(
            () => {
                this.tick(), 1000
            }
        );
    }

    componentWillUnmount() {
        clearInterval(this.timeID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
              <h1>Hello, world!</h1>
              <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
          );
    }
}

function tick() {
  root.render(<Clock />);
} 
