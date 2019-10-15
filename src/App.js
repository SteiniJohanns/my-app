import React, { Component } from 'react';

import Input from './components/input';
import OutputInfo from './components/Output';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Voff',
      value: 100
    };
    this.updateValues = this.updateValues.bind(this);
  }

  updateValues = event => {
    console.log('The event', event);
    const prevValue = this.state.value;
    this.setState({ name: event.target.name + 1 });
    this.setState({ value: this.state.value + prevValue });
    console.log(this.name);
  };

  render() {
    return (
      <div className="App">
        <div className="Left">
          <Input onChange={this.updateValues()} />
        </div>
        <div className="Right">
          <OutputInfo name={this.state.name} value={this.state.value} />
        </div>
      </div>
    );
  }
}

export default App;
