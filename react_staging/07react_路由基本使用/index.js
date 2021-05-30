// 引入React
import React from 'react'
// 引入ReactDOM 
import ReactDOM from 'react-dom'
// 引入路由外壳
import { BrowserRouter } from 'react-router-dom'

// 引入App组件
import App from './App'

// 渲染 组件
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'));