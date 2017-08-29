import React from 'react'
import PropTypes from 'prop-types'

const User = props => (
  <div>
    <div>name: {props.user.username}</div>
    <div>name: {props.user.age}</div>
    <hr />
  </div>
)
User.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,
}

// function User(props) {
//   return (
//     <div>
//       <div>name: {props.user.username}</div>
//       <div>name: {props.user.age}</div>
//       <hr />
//     </div>
//   )
// }

// const User = (props) => {
//   return (
//     <div>
//       <div>name: {props.user.username}</div>
//       <div>name: {props.user.age}</div>
//       <hr />
//     </div>
//   )
// }
//


// class User extends Component {
//   constructor() {
//     super()
//     console.log(this);
//   }
//
//   render() {
//     return (
//       <div>
//         <div>name: {this.props.user.username}</div>
//         <div>name: {this.props.user.age}</div>
//         <hr />
//       </div>
//     )
//   }
// }

export default User
