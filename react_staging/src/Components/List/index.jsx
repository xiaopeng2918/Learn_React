import React, { Component } from 'react'
// 引入css文件
import './index.css';
// 引入消息订阅 发送js库
import PubSub from 'pubsub-js'

export default class List extends Component {
  state = {
    users: [],
    isFirst: true,
    loading: false,
    err: '',
  };
  // 组件挂载是订阅消息
  componentDidMount(){
    PubSub.subscribe('getDataFromHeader', (_, data) => {
      this.setState(data);
    })
  }
  render() {
    const {isFirst, loading, err, users} = this.state;
    return (
      <div className="row">
        {
          isFirst ? <h1>welcome</h1> :
          loading ? <h1>loading......</h1> :
          err ? <h1 style={{color: 'red'}}>{err}</h1> :
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
