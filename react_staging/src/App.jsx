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
  // 定义一个函数，这个函数用来修改当前组件todos状态 并将这个函数传给Header子组件
  addtodo = (event) => {
    // 获取到当前组件todos状态
    const { todos } = this.state;
    // 获取到事件子组件input输入框的值
    // 由于是在input输入框上回调这个函数并拿取这个input输入框的值 所以这里不需要使用ref 用事件对象
    // keyCode为js事件对象的一个源生属性，获取触发事件对象按下键盘 键 对应的值 这里回车为13
    const { target, keyCode } = event;
    // 包装一个todoObj
    const todoObj = { id: nanoid(), name: target.value, done: false };
    if (keyCode === 13) {
      // 判断一下，如果输入为空，不进行添加操作
      if (target.value.trim() === '') {
        alert('输入的值不能为空');
        target.value = '';
        return
      }
      this.setState({ todos: [todoObj, ...todos] });
      // 清空输入框
      target.value = '';
    }
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
