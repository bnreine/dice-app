import React, { Component } from 'react';
import Roll from './components/Roll.js';
import Result from './components/Result.js';
//import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      rollNumber: '#'
    }
  }

  handleClick(){
    const randNumber = Math.floor(Math.random() * Math.floor(6)) + 1;
    this.setState({rollNumber: randNumber});
  }

  render() {
    return (
      <div className="card-deck bg-light">
        <Roll handleClick={() => this.handleClick()}/>
        <Result number={this.state.rollNumber}/>
      </div>
    );
  }
}

export default App;
