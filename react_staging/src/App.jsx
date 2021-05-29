import React, { Component } from 'react'

// 引入自定义组件
import Header from './Components/Header'
import List from './Components/List'

export default class App extends Component {
  state = {users: []};
  // 保存users
  getDataUsers = (userArr) => {
    // 保存
    this.setState({users: userArr})
  }
  render() {
    const {users} = this.state;
    return (
      <div className="container">
        <Header getDataUsers={this.getDataUsers} />
        <List users={users} />
      </div>
    )
  }
}
