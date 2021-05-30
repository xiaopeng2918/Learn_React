## 一般组件与路由组件的区别
### 区别一： 使用方式不同
        一般组件：
            <Header />
        路由组件：
            <Route path="/a
### 区别二： 存放位置不同
        一般组件：存放在Components文件夹当中
        路由组件：存在pages文件夹当中
### 区别三： 接收到的props不同
        一般组件：
            接收到的是父组件传来的值
        路由组件： 接收到三个固定属性
            history:
                go: ƒ go(n)
                goBack: ƒ goBack()
                goForward: ƒ goForward()
                push: ƒ push(path, state)
                replace: ƒ replace(path, state)

            location:
                pathname: "/home"
                search: ""
                state: undefined

            match:
                params: {}
                path: "/home"
                url: "/home"
## NavLink 路由设置组件
      路由设置：
          被点击默认给当前导航添加active类名
          如果要修改这种默认状态可以给NavLink添加activeClassName类名
## 封装NavLink
      封装组件：
          import React, { Component } from 'react'
          // 引入NavLink
          import {NavLink} from 'react-router-dom'

          export default class MyNavLink extends Component {
            render() {
              return (
                <NavLink activeClassName="skyblue_white" className="list-group-item" {...this.props} />
              )
            }
          }
      使用： 
          <MyNavLink to="/about">About</MyNavLink>
      注意：
          react标签体（双标签包括内容）也是props的一个children属性
          如果双标签没有声明标签体内容，声明了children属性，那么标签之间内容显示为children属性值