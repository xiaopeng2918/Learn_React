import React, { Component } from 'react'

// 引入自定义组件
import Header from './Components/Header'
import List from './Components/List'

export default class App extends Component {
  state = {
    users: [],
    isFirst: true,
    loading: false,
    err: '',
  };
  // 改变状态对象
  updateAppState = (stateObj) => {
    // 保存
    this.setState(stateObj);
  }
  render() {
    return (
      <div className="container">
        <Header updateAppState={this.updateAppState} />
        {/* 传递所有state数据 */}
        <List {...this.state} />
      </div>
    )
  }
}
