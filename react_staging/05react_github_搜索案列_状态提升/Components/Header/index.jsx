import React, { Component } from 'react'
// 导入axios
import axios from 'axios'

export default class Header extends Component {
  // 获取用户数据
  handleGetUsers = () => {
    // 获取更新状态函数
    const { updateAppState } = this.props;
    // 点击之前，设置isFirst为false loading为true
    updateAppState({ isFirst: false, loading: true });
    const { value } = this.keyCodeNode;
    // 发送请求
    axios.get(`/api/search/users?q=${value}`).then(
      (res) => {
        // 请求成功 更新users 设置loading为false
        updateAppState({ users: res.data.items, loading: false });
      },
      (err) => {
        // 请求失败，设置loaing 为false 将err赋值错误信息
        updateAppState({loading: false, err: err.message})
      }
    )
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">查找GitHub用户</h3>
        <div>
          <input ref={(a) => { this.keyCodeNode = a }} type="text" placeholder="输入关键字信息" />&nbsp;
          <button onClick={this.handleGetUsers}>查找</button>
        </div>
      </section>
    )
  }
}
