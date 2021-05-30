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
