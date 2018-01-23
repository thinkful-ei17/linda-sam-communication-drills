import React from 'react';
import Button from './button';
import Giphy from './giphy'
import './App.css';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      grumpy: false
    }
  }

  updateMood(grumpy){
    this.setState({grumpy})
  }

  render() {
    if (!this.state.grumpy){
    return (
      <div className="uncertain-app">
        <Button buttonClick={() => this.updateMood(true)} />
      </div>
    );}
    
    return (
      <div className="grumpy-app">
        <Giphy />
        <Button buttonClick={() => this.updateMood(false)} />
      </div>
    )
  }
}
