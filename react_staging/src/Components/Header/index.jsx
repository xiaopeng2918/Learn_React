import React, { Component } from 'react'
// 导入axios
import axios from 'axios'

export default class Header extends Component {
  // 获取用户数据
  handleGetUsers = () => {
    const {value} = this.keyCodeNode;
    // 发送请求
    axios.get(`/api/search/users?q=${value}`).then(
      (res) => {console.log(res)},
      (err) => {console.log('失败了', err)}
    )
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">查找GitHub用户</h3>
        <div>
          <input ref={(a) => {this.keyCodeNode = a }} type="text" placeholder="输入关键字信息" />&nbsp;
          <button onClick={this.handleGetUsers}>查找</button>
        </div>
      </section>
    )
  }
}
