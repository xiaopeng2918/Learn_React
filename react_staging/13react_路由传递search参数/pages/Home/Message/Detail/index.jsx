import React, { Component } from 'react'
import qs from 'querystring'


export default class Detail extends Component {
  state = {
    detailDatas: [
      {id: '01', content: '你好，世界'},
      {id: '02', content: '你好，地球'},
      {id: '03', content: '你好，中国'},
    ]
  }
  render() {
    // console.log(this.props)
    // 获取组件状态数据
    const {detailDatas} = this.state;
    // 获取路由组件收到的参数 search
    const {id, title} = qs.parse(this.props.location.search.slice(1));
    // 根据ID筛选出对应的detailData
    const resultDetailData = detailDatas.find((detailDataObj) => {
      return detailDataObj.id === id;
    })
    return (
      <ul>
        <li>ID: {id}</li>
        <li>Title: {title}</li>
        <li>Content: {resultDetailData.content}</li>
      </ul>
    )
  }
}
