import React, { Component } from 'react'
// 引入css文件
import './index.css';

export default class List extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="row">
        {
          users.map((user) => {
            return (
              <div className="card" key={user.id}>
                <a rel="noreferrer" href={user.html_url} target="_blank">
                  <img alt="head_photo" src={user.avatar_url} style={{ width: '100px' }} />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
