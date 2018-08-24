import React, { Component } from 'react';
import { ComponentA, ComponentB, ComponentC  } from './index';

// 对齐
export class ParentA extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { flag } = this.state;
    return (
      <div>
        <h4>
          children 长度不变且每个 child 不具有 key 属性
        </h4>
        <button onClick={() => this.setState({ flag: !flag })}>刷新</button>
        <pre>
          cur children: [A, B, C]<br />
          pre children: [A, B, C]
        </pre>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    );
  }
}

export class ParentB extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { flag } = this.state;
    return (
      <div>
        <h4>
          children 长度不变且每个 child 不具有 key 属性且顺序变化
        </h4>
        <button onClick={() => this.setState({ flag: !flag })}>刷新</button>
        <pre>
          cur children: [A, B, C]<br />
          pre children: [A, C, B]
        </pre>
        <ComponentA key="A" />
        {
          flag ? (
            <ComponentB />
          ) : (
            <ComponentC />
          )
        }
        {
          !flag ? (
            <ComponentB />
          ) : (
            <ComponentC />
          )
        }
      </div>
    );
  }
}

export class ParentC extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { flag } = this.state;
    return flag ? (
      <div>
        <h4>
          children 长度变化且每个 child 不具有 key 属性
        </h4>
        <button onClick={() => this.setState({ flag: !flag })}>刷新</button>
        <pre>
          cur children: [A, B, C]<br />
          pre children: [A, C]
        </pre>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    ) : (
      <div>
        <h4>
          children 长度变化且每个 child 不具有 key 属性
        </h4>
        <button onClick={() => this.setState({ flag: !flag })}>刷新</button>
        <pre>
          cur children: [A, B, C]<br />
          pre children: [A, C]
        </pre>
        <ComponentA />
        <ComponentC />
      </div>
    );
  }
}

export class ParentD extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { flag } = this.state;
    return flag ? (
      <div>
        <h4>
          children 长度变化且每个 child 具有 key 属性
        </h4>
        <button onClick={() => this.setState({ flag: !flag })}>刷新</button>
        <pre>
          cur children: [A@key, B@key, C@key]<br />
          pre children: [A@key, C@key]
        </pre>
        <ComponentA key="A" />
        <ComponentB key="B" />
        <ComponentC key="C" />
      </div>
    ) : (
      <div>
        <h4>
          children 长度变化且每个 child 具有 key 属性
        </h4>
        <button onClick={() => this.setState({ flag: !flag })}>刷新</button>
        <pre>
          cur children: [A@key, B@key, C@key]<br />
          pre children: [A@key, C@key]
        </pre>
        <ComponentA key="A" />
        <ComponentC key="C" />
      </div>
    );
  }
}


export class ParentE extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { flag } = this.state;
    return (
      <div>
        <h4>
          children 长度不变且每个 child 具有 key 属性且最后一个 child 结构变化
        </h4>
        <button onClick={() => this.setState({ flag: !flag })}>刷新</button>
        <pre>
          cur children: [A@key, B@key,    C@key ]<br />
          pre children: [A@key, B@key, [ C@key ]]
        </pre>
        <ComponentA key="A" />
        <ComponentB key="B" />
        {
          flag ? [
            <ComponentC key="C" />
          ] : (
            <ComponentC key="C" />
          )
        }
      </div>
    );
  }
}

export class ParentF extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { flag } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ flag: !flag })}>刷新</button>
        <ComponentA />
        {
          flag ? (
            <ComponentC />
          ) : null
        }
        {
          flag ? null: (
            <ComponentC />
          )
        }
        <ComponentB />
      </div>
    );
  }
}

export class ParentG extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { flag } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ flag: !flag })}>刷新</button>
        <ComponentA />
        {
          flag ? [
            <ComponentB key="B1" />,
            <ComponentB key="B2" />,
          ] : [
            <ComponentB key="B2" />
          ]
        }
        <ComponentC />
      </div>
    );
  }
}