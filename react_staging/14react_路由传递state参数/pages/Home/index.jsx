import React, { Component } from 'react'
// 引入封装的MyNavLink组件
import MyNavLink from '../../Components/MyNavLink'
import { Route, Redirect, Switch } from 'react-router-dom'
// 引入Message与News组件
import Message from './Message'
import News from './News'

export default class Home extends Component {
  render() {
    // console.log('Home路由组件收到的props', this.props);
    return (
      <div>
        <h2>这是Home组件</h2>
        <ul className="nav nav-tabs">
          <li>
            <MyNavLink to="/home/news">News</MyNavLink>
          </li>
          <li>
            <MyNavLink to="/home/message">Message</MyNavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/home/news" component={News} />
          <Route path="/home/message" component={Message} />
          <Redirect to="/home/news" />
        </Switch>
      </div>
    )
  }
}
