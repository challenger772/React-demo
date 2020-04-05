import React, { Component } from 'react';
import Form from './components/forms/index';
import Multiple from './components/multiple/index';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <Multiple />
      </div>
    )
  }
}