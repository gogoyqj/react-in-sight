import React, { Component } from 'react';
import { ComponentA  } from './index';

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
        <ComponentA name="A" />
        <ComponentA name="B" />
        <ComponentA name="C" />
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
        <ComponentA name="A" key="A" />
        {
          flag ? (
            <ComponentA name="B" />
          ) : (
            <ComponentA name="C" />
          )
        }
        {
          !flag ? (
            <ComponentA name="B" />
          ) : (
            <ComponentA name="C" />
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
        <ComponentA name="A" />
        <ComponentA name="B" />
        <ComponentA name="C" />
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
        <ComponentA name="A" />
        <ComponentA name="C" />
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
        <ComponentA name="A" key="A" />
        <ComponentA name="B" key="B" />
        <ComponentA name="C" key="C" />
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
        <ComponentA name="A" key="A" />
        <ComponentA name="C" key="C" />
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
        <ComponentA name="A" key="A" />
        <ComponentA name="B" key="B" />
        {
          flag ? [
            <ComponentA name="C" key="C" />
          ] : (
            <ComponentA name="C" key="C" />
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
        <ComponentA name="A" />
        {
          flag ? (
            <ComponentA name="C" />
          ) : null
        }
        {
          flag ? null: (
            <ComponentA name="C" />
          )
        }
        <ComponentA name="B" />
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
        <ComponentA name="A" />
        {
          flag ? [
            <ComponentA name="B" key="B1" />,
            <ComponentA name="B" key="B2" />,
          ] : [
            <ComponentA name="B" key="B2" />
          ]
        }
        <ComponentA name="C" />
      </div>
    );
  }
}