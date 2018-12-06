import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import './index.json'



class App extends Component {
    constructor() {
    super();
    this.state = {
        pilot: "Name of Pilot Here",
        result: null
      };

    }

    updateSymptom(event) {
        this.setState({pilot: event.target.value.substr(0, 20)});

    }

    onClick() {
    }

    render() {
        return <div>
            <textarea value={this.state.pilot}
            onChange = {this.updateSymptom.bind(this)}>
            </textarea>
            <button onClick={this.onClick}>Submit</button>
        </div>
    }

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)