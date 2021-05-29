import React, { Component } from 'react'

import axios from 'axios'

export default class App extends Component {
  // 发起网络请求学生数据
  handleAxiosStudent = () => {
    axios.get('http://localhost:3000/api1/students').then(
      (res) => {console.log(res)},
      (err) => {console.log('失败了', err)}
    )
  }
  // 发起网络请求汽车数据
  handleAxiosCar = () => {
    axios.get('http://localhost:3000/api2/cars').then(
      (res) => {console.log(res)},
      (err) => {console.log('失败了', err)}
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.handleAxiosStudent}>发起网络请求学生数据</button>
        <button onClick={this.handleAxiosCar}>发起网络请求汽车数据</button>
      </div>
    )
  }
}
