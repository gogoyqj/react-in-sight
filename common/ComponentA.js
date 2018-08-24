import React, { Component } from 'react';
let counter = 0;
export default (name) => {
  return class ComponentA extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: `create   ${counter++}`
      };
    }
  
    componentWillReceiveProps() {
      this.setState({
        name: `update ${counter++}`
      })
    }
  
    render() {
      return (
        <div>
          Component{name} {this.state.name}
        </div>
      );
    }
  }
}