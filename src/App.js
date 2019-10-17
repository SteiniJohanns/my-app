import React, { Component } from 'react';

//import styled from 'styled-components';
import Input from './components/input';
//import OutputInfo from './components/Output';
import './App.css';

/* const StyledLabel = styled.label`
width: 20px;
`; */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: '',
      itemCost: '',
      sum: 0,
      items: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log('Her kemur event', event.target.value);
    if (event.target.name === 'Name') {
      this.setState({ itemName: event.target.value });
    }
    if (event.target.name === 'Cost') {
      this.setState({ itemCost: event.target.value });
    }
  }

  handleSubmit(event) {
    this.setState({
      sum: this.state.sum + Number(this.state.itemCost),
      items: [...this.state.items, this.state.itemName]
    });

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="App">
          <form className="App-form" onSubmit={this.handleSubmit}>
            <Input
              name="Name"
              value={this.state.itemName}
              handleChange={this.handleChange}
            />
            <Input
              name="Cost"
              value={this.state.itemCost}
              handleChange={this.handleChange}
            />
            <input type="submit" value="Click me!" />
          </form>
          <div>
            <label>List items: </label>
            <label>{this.state.items.join(', ')} </label>
          </div>
        </div>
        <div className="App">
          <label>Sum: {this.state.sum}</label>
        </div>
      </div>
    );
  }
}

export default App;
