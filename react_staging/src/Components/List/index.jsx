import React, { Component } from 'react'
// 引入自定义组件
import Item from '../Item'
// 引入css文件
import './index.css'

export default class List extends Component {
  render() {
    // 拿出父组件传来的值
    const {todos} = this.props;
    return (
      <ul className="todo-main">
        {/* 遍历循环todos渲染对应的列表数据 */}
        {
          todos.map((todo) => {
            /* 这里的{...todo}  不是结构赋值 这是React和Babel结合将todo对象里面的键值对传给子组件*/
            return <Item {...todo} key={todo.id}/>
          })
        }
      </ul>
    )
  }
}
