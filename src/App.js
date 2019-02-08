import React, { Component } from 'react';
import NameComponent from './components/NameComponent';
import LangSelectComponent from './components/LangSelectComponent';
import t from './components/language';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.translate = this.translate.bind(this);
    this.state = {name: '',lang:'en',greeting:''};
  }
  handleChange(e) {
    this.setState({name: e.target.value});
  }
  translate(e) {
    this.setState({lang: e.target.value});
    this.setState({greeting: t[e.target.value].welcome + ' ' + this.state.name});
  }
  render() {
    return (
      <div>
        <h1>Multi Language APP</h1>
        <NameComponent onChange={this.handleChange}/>
        <LangSelectComponent onChange={this.translate}/>
        <h1>{this.state.greeting}</h1>
      </div>
    );
  }
}

export default App;
