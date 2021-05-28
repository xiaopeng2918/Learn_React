// 引入React
import {Component} from 'react'
// 引入其他组件
import Hello from './components/Hello'
import Welcome from './components/Welcome'

// 创建组件
class App extends Component {
  render(){
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    )
  }
}
// 导出组件
export default App;