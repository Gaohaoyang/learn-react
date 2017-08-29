import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// import LikeButton from './10likeButton'
// import Dog from './Dog'
// import LikeButton from './11Props'
// import Computer from './11Computer'
import List from './12map'

// class Index extends Component {
//   render() {
//     const words = {
//       likeText: 'yes',
//       unlikeText: 'no0',
//     }
//     return (
//       <div>
//         {/* <LikeButton />
//         <Dog /> */}
//         <LikeButton words={words} />
//       </div>
//     )
//   }
// }

// function Index() {
//   const words = {
//     likeText: 'yes',
//     unlikeText: 'check',
//   }
//   return (
//     <div>
//       <LikeButton words={words} />
//     </div>)
// }

// function Index() {
//   return (
//     <div>
//       <Computer />
//     </div>
//   )
// }

const Index = () => (
  <div>
    <List />
  </div>
)

ReactDOM.render(
  <Index />,
  document.getElementById('root'),
)
