interface User {
    firstName: String,
    lastName: String,
    age: Number,
    dateCreated: Date,
};

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