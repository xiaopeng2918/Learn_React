import React, { Component } from 'react'
// 引入css文件
import './index.css'

export default class Header extends Component {
  handleKeyUp = (event) => {
    // 获取父组件传来的addtodo
    const { addtodo } = this.props;
    // 获取到事件子组件input输入框的值
    // 由于是在input输入框上回调这个函数并拿取这个input输入框的值 所以这里不需要使用ref 用事件对象
    // keyCode为js事件对象的一个源生属性，获取触发事件对象按下键盘 键 对应的值 这里回车为13
    const { target, keyCode } = event;
    if (keyCode === 13) {
      // 判断一下，如果输入为空，不进行添加操作
      if (target.value.trim() === '') {
        alert('输入的值不能为空');
        // 清空是输入的空格
        target.value = '';
        return
      }
      // 执行父子间传来的函数，添加todo
      addtodo(target.value);
      // 清空输入框的值
      target.value = '';
    }
  }
  render() {

    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={handleKeyUp} />
      </div>
    )
  }
}
