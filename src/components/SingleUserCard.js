import React from 'react'
import { useSelector } from 'react-redux'

const SingleUserCard = ({user}) => {
  const users = useSelector(state => state.users.value.users)
  
  
  return (
    <div className='usercard d-flex align-center'>
      <img src={user.image} alt="" />
      <div>{user.username} </div>
      

    </div>
  )
}

export default SingleUserCard