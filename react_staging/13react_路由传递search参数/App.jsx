import React, { Component } from 'react'
// 引入路由
import { Route, Redirect } from 'react-router-dom'
// 引入路由组件
import Home from './pages/Home'
import About from './pages/About'
// 引入一般组件
import Header from './Components/Header'
import MyNavLink from './Components/MyNavLink'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header a={1} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}
              {/* 注册路由 */}
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 响应路由 */}
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  <Redirect to="/about"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
