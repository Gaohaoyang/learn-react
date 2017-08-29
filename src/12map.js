import React from 'react'
import User from './12User'

const users = [{
  username: 'cs',
  age: 12,
}, {
  username: 'zhi',
  age: 22,
}, {
  username: 'xtx',
  age: 44,
}]

const List = () => (
  <div>
    {
      users.map(item => (
        <User key={item.username} user={item} />
      ))
    }
  </div>
)

export default List
