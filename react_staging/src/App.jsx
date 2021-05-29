import React, { Component } from 'react'
// 引入第三方库  一个随机生成独一无二的id字符串
import { nanoid } from 'nanoid'

// 引入自定义组件
import Header from './Components/Header'
import List from './Components/List'
import Footer from './Components/Footer'

export default class App extends Component {
  // 在App组件上面定义数据
  state = {
    todos: [
      { id: '1', name: '吃饭', done: true },
      { id: '2', name: '睡觉', done: true },
      { id: '3', name: '学习', done: false },
    ]
  }
  // 定义一个函数，这个函数用来为todos添加一个新的todo 并将这个函数传给Header子组件
  addtodo = (todoName) => {
    // 获取到当前组件todos状态
    const { todos } = this.state;
    // 包装一个todoObj
    const todoObj = { id: nanoid(), name: todoName, done: false };
    this.setState({ todos: [todoObj, ...todos] });
  }
  render() {
    // 获取状态数据传给子组件List
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addtodo={this.addtodo} />
          <List todos={todos} />
          <Footer />
        </div>
      </div>
    )
  }
}
