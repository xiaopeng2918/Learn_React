import React, { Component } from 'react'

export default class News extends Component {
  // 当加载News路由组件3秒时，跳转到Message组件
  componentDidMount(){
    this.timer = setTimeout(() => {
      this.props.history.push('/home/message');
    }, 3000)
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }
  render() {
    return (
      <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
      </ul>
    )
  }
}
