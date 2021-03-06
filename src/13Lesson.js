/* 现在需要在页面上显示一本书的章节，章节内容存放到一个数组里面：

const lessons = [
  { title: 'Lesson 1: title', description: 'Lesson 1: description' },
  { title: 'Lesson 2: title', description: 'Lesson 2: description' },
  { title: 'Lesson 3: title', description: 'Lesson 3: description' },
  { title: 'Lesson 4: title', description: 'Lesson 4: description' }
  ...
]
现在需要你构建两个组件。一个组件为 Lesson 组件，渲染特定章节的内容。可以接受一个名为 lesson 的 props，并且把章节以下面的格式显示出来：

<h1>Lesson 1: title</h1>
<p>Lesson 1: description</p>
点击每个章节的时候，需要把章节在列表中的下标和它的标题打印（console.log）出来，
例如第一个章节打印： 0 - Lesson 1: title，第二个章节打印：1 - Lesson 2: title。

另外一个组件为 LessonsList，接受一个名为 lessons 的 props，它会使用 Lesson 组件把章节列表渲染出来。
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Lesson extends Component {
  static propTypes = {
    lesson: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
    index: PropTypes.number.isRequired,
  }

  /**
   * 打印章节标题
   * @return {[type]} [description]
   */
  printTitle = () => {
    console.log(`${this.props.index} - ${this.props.lesson.title}`)
  }

  render() {
    return (
      <div onClick={this.printTitle} role="presentation">
        <h1>{this.props.lesson.title}</h1>
        <p>{this.props.lesson.description}</p>
      </div>
    )
  }
}

export default Lesson
