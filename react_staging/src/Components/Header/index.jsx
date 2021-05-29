import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">查找GitHub用户</h3>
        <div>
          <input type="text" placeholder="输入关键字信息" />&nbsp;<button>查找</button>
        </div>
      </section>
    )
  }
}
