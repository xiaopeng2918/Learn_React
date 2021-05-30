import React, { Component } from 'react'
// 引入Link组件
import { Link, Route } from 'react-router-dom'
// 引入Detail组件
import Detail from './Detail'

export default class Message extends Component {
  state = {
    messages: [
      { id: '01', title: '信息1' },
      { id: '02', title: '信息2' },
      { id: '03', title: '信息3' },
    ]
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.messages.map((message) => {
              return (
                <li key={message.id}>
                  <Link to={{pathname: '/home/message/detail', state: {id: message.id, title: message.title}}}>{message.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <Route path="/home/message/detail" component={Detail} />
      </div>
    )
  }
}
