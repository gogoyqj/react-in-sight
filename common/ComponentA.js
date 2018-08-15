import React, { Component } from 'react';

export default class ComponentA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: `create   ${Date.now()}`
    };
  }

  componentWillReceiveProps() {
    this.setState({
      name: `update ${Date.now()}`
    })
  }

  render() {
    return (
      <div>
        ComponentA {this.state.name}
      </div>
    );
  }
}