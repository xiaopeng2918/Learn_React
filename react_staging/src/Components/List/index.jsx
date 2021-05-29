import React, { Component } from 'react'
// 引入自定义组件
import Item from '../Item'
// 引入css文件
import './index.css'
// 引入第三方模块
import PropTypes from 'prop-types'

export default class List extends Component {
  // props类型声明 必要性
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updatetodoChecked: PropTypes.func.isRequired,
  }
  render() {
    // 拿出父组件传来的值
    const {todos, updatetodoChecked} = this.props;
    return (
      <ul className="todo-main">
        {/* 遍历循环todos渲染对应的列表数据 */}
        {
          todos.map((todo) => {
            /* 这里的{...todo}  不是结构赋值 这是React和Babel结合将todo对象里面的键值对传给子组件*/
            return <Item {...todo} key={todo.id} updatetodoChecked={updatetodoChecked} />
          })
        }
      </ul>
    )
  }
}
