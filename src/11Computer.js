// 完成两个组件，电脑 Computer 和显示器 Screen。
//
// 电脑有个 status 状态表示电脑现在是开还是关的，status 为 on 为开，status 为 off 为关，默认状态为 off。电脑有个按钮，点击可以自由切换电脑的开关状态。
//
// 显示器接受一个名为 showContent 的 props，显示器会把它内容显示出来。如果不传入 showContent，显示器显示 “无内容”。
//
// 电脑包含显示器，当电脑状态为开的时候显示器显示“显示器亮了”，否则显示“显示器关了”。

import React, { Component } from 'react'
import Screen from './11Screen'

class Computer extends Component {
  constructor() {
    super()
    this.state = {
      status: 'off',
      showContent: '显示器关了',
    }
    // this.changeStatus = this.changeStatus.bind(this)
  }

  changeStatus = () => {
    if (this.state.status === 'off') {
      this.setState({
        status: 'on',
        showContent: '显示器亮了',
      })
    } else {
      this.setState({
        status: 'off',
        showContent: '显示器关了',
      })
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.changeStatus}>开关{this.state.status}</button>
        <Screen showContent={this.state.showContent} />
      </div>
    )
  }
}

export default Computer
