import React, { Component } from 'react';
import Form from './components/forms/index';
import Multiple from './components/multiple/index';
import Calculator from './components/bolling-vertict/index'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <Multiple />
        <Calculator />
      </div>
    )
  }
}