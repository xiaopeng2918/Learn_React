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
  // 这个函数用来为todos添加一个新的todo 并将这个函数传给Header子组件
  addtodo = (todoName) => {
    // 获取到当前组件todos状态
    const { todos } = this.state;
    // 包装一个todoObj
    const todoObj = { id: nanoid(), name: todoName, done: false };
    this.setState({ todos: [todoObj, ...todos] });
  }
  // 修改todo完成状态，对应数据 done  根据id修改
  updatetodoChecked = (id, isTrue) => {
    // 获取todos
    const { todos } = this.state;
    // 遍历修改todos
    const newtodos = todos.map((todo) => {
      // 找到指定id todo
      if (id === todo.id) {
        return { ...todo, done: isTrue };
      } else {
        return todo;
      }
    })
    // 设置状态
    this.setState({ todos: newtodos });
  }
  // 删除todo 
  deletetodo = (id) => {
    const { todos } = this.state;
    // 过滤掉指定id的todo
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    })
    // 设置todos
    this.setState({ todos: newTodos });
  }
  // 处理全布todo的状态
  totalChecked = (trueOrFalse) => {
    const { todos } = this.state;
    // 处理todos中所有的状态
    const newTodos = todos.map((todo) => {
      return { ...todo, done: trueOrFalse };
    })
    // 设置状态
    this.setState({ todos: newTodos });
  }
  // 清楚所有已完成
  clearTrueTotal = () => {
    const {todos} = this.state;
    // 过滤出未完成的todo
    const newTodos = todos.filter((todo) => {
      return todo.done === false;
    })
    // 设置状态
    this.setState({todos: newTodos});
  }
  render() {
    // 获取状态数据传给子组件List
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addtodo={this.addtodo} />
          <List todos={todos} 
          updatetodoChecked={this.updatetodoChecked} 
          deletetodo={this.deletetodo} />
          <Footer totalChecked={this.totalChecked} clearTrueTotal={this.clearTrueTotal} todos={todos} />
        </div>
      </div>
    )
  }
}
