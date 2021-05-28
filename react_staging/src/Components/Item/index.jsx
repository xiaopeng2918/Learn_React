import React, { Component } from 'react'
// 引入css文件
import './index.css'

export default class Item extends Component {
  render() {
    // 父组件传来的todo 对象 ，这里是结构赋值 用到什么结构出什么
    const { name, done} = this.props;
    return (
      <li>
        <label>
          {/* defaultChecked 表示默认情况下为什么状态 ，用户可以进行修改 */}
          <input type="checkbox" defaultChecked={done} />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: 'none' }}>删除</button>
      </li>
    )
  }
}
