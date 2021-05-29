import React, { Component } from 'react'
// 引入css文件
import './index.css'

export default class Footer extends Component {
  // 处理全选框
  handleTotal = (event) => {
    // 获取处理状态的函数
    const { totalChecked } = this.props;
    // 执行
    console.log(event.target.checked)
    totalChecked(event.target.checked);
  }
  // 清楚已完成
  handleClearTotal = () => {
    // 获取处理状态函数
    const {clearTrueTotal} = this.props;
    // 执行函数
    clearTrueTotal();
  }
  render() {
    const {todos} = this.props;
    const finishTodosLength = todos.filter((todo) => {
      // 函数体
      return todo.done === true;
    }).length;
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleTotal} 
          checked={finishTodosLength === todos.length && finishTodosLength !== 0? true : false} />
        </label>
        <span>
          <span>已完成{finishTodosLength}</span> / 全部{todos.length}
        </span>
        <button onClick={this.handleClearTotal} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
