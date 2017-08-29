import React, { Component } from 'react'

class LikeButton extends Component {
  static defaultProps = {
    likedText: '取消',
    unlikedText: '点赞',
  }

  constructor() {
    super()
    this.state = {
      isLiked: false,
    }
    this.clickLikeBtn = this.clickLikeBtn.bind(this)
  }

  clickLikeBtn() {
    this.setState({
      isLiked: !this.state.isLiked,
    })
  }

  render() {
    const likeText = this.props.words.likeText
    const unlikeText = this.props.words.unlikeText
    return (
      <button onClick={this.clickLikeBtn}>
        {this.state.isLiked
          ? likeText
          : unlikeText}
      </button>
    )
  }
}

export default LikeButton
