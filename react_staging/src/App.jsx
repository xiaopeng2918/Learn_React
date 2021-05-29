import React, { Component } from 'react'

// 引入自定义组件
import Header from './Components/Header'
import List from './Components/List'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <List/>
      </div>
    )
  }
}
