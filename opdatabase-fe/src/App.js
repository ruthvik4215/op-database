import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// const scaleNames = {
//     c:"celsius",
//     f:"fahrenheit"
// }

// toCelsius = (fahrenheit)=> {
//     return (fahrenheit - 32) * 5 / 9;
// }

// toFahrenheit = (celsius)=> {
//     return (celsius * 9 / 5) + 32;
// }

// tryConvert = (temp, convert)=> {
//     const input = parseFloat(temp);
//     if(Number.isNaN(temp)) {
//         return '';
//     }
//     const output = convert(input)
//     const rounded = Math.round(output *1000)/1000;
//     return rounded.toString();
// }

// class TempInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//     }
//     handleChange = (e)=> {
//         this.props.onTempChange(e.target.value);
//     }
//     render() {
//         return (
//             <div>
//                 <fieldset>
//                     <legend>
//                         Enter temperature in {scaleNames[this.props.scale]}
//                     </legend>
//                     <input value={this.props.temp} onChange={this.handleChange} />
//                 </fieldset>
//             </div>
//         );
//     }
// }

// class Calculate extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {scale:'c', temp};
//         this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//         this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//     }
//     handleCelsiusChange = (temp)=> {
//         this.setState({scale:'c', temp});
//     }
//     handleFahrenheitChange = (temp)=> {
//         this.setState({scale:'f', temp});
//     }
//     render() {
//         const scale = this.state.scale;
//         const temp = this.state.temp;
//         const celsius = (scale === 'f') ? tryConvert(temp, toCelsius) : temp;
//         const fahrenheit = (scale === 'c') ? tryConvert(temp, toFahrenheit) : temp;
//         return (
//             <div>
//                 <TempInput scale='c' temp={celsius} onTempChange={this.handleCelsiusChange} />
//                 <TempInput scale='f' temp={fahrenheit} onTempChange={this.handleFahrenheitChange} />
//             </div>
//         );
//     }
// }

// ReactDOM.render(
//     <Calculate />,
//     document.getElementById('root')
// );