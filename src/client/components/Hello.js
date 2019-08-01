import React, { Fragment } from 'react';

export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'sfilata ' };
  }

  render () {
    const { name } = this.state;
    return (
      <Fragment>
        <h2 style={{ color: 'blue' }}>Hello {name}, SSR Demo</h2>
        <button onClick={() => { this.setState({name: 'naver'})}}>click</button>
      </Fragment>
    )
  }
}