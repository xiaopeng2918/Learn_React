import React, { Component } from 'react'
// 引入withRouter
import { withRouter } from 'react-router-dom'

class Header extends Component {
  // 后退
  goBack = () => {
    this.props.history.goBack();
  }
  render() {
    // console.log('Header一般组件接收到的props', this.props);
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={this.goBack}>后退</button>
      </div>
    )
  }
}
export default withRouter(Header);
