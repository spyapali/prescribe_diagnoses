import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SelectBox from './select-box.js'


class App extends Component {
    constructor() {
    super();
    this.state = {
      }
    }
    render() {
        return <div>
            <SelectBox
                items={[
                    { value: 'Headache', id: 'Migraine' },
                    { value: 'Blocked Nose', id: 'Cold' },
                    { value: 'Sore Gums', id: 'Gum Infection' }
                ]}
            />
        </div>
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)