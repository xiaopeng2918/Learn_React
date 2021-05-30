import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    console.log('Home路由组件收到的props', this.props);
    return (
      <h2>这是Home组件</h2>
    )
  }
}
