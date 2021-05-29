import React, { Component } from 'react'
// 引入css文件
import './index.css'

export default class Item extends Component {
  // 设置状态
  /* 
  isFocus 记录当前Item是否被鼠标选中
  */
  state = {isFocus: false}
  // 处理鼠标移入移出事件
  handleMouse = (status) => {
    // 函数柯里化
    return () => {
      // 将这个状态保存到组件state
      this.setState({isFocus: status});
    }
  }
  // 处理修改todo状态
  handleChange = (id) => {
    const {updatetodoChecked} = this.props;
    return (event) => {
      updatetodoChecked(id, event.target.checked);
    }
  }
  render() {
    // 拿取isFocus
    const {isFocus} = this.state;
    // 父组件传来的todo 对象 ，这里是结构赋值 用到什么结构出什么
    const { id, name, done } = this.props;
    return (
      <li style={{backgroundColor: isFocus ? '#f0f0f4' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          {/* defaultChecked 表示默认情况下为什么状态 ，用户可以进行修改 */}
          <input type="checkbox" defaultChecked={done} onChange = {this.handleChange(id)} />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: isFocus ? 'block' : 'none' }}>删除</button>
      </li>
    )
  }
}
