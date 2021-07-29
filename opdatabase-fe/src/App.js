import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const scaleName = {
    c:'celsius',
    f:'fahreinheit'
};
class TemInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temp:''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (e)=> {
        this.setState({temp: e.target.value});
    }
    render() {
        return(
            <div>
                <h1>Enter temp in {scaleName[this.props.scale]}:</h1>
                <input value={this.state.temp} onChange={this.handleChange} />
            </div>
        );
    }
}

class Calculator extends React.Component {
    render() {
        return(
            <div>
                <TemInput scale="c" />
                <TemInput scale="f" />
            </div>
        );
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
);

export default App;
