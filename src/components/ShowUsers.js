import React from 'react'
import { useSelector } from 'react-redux'
import SingleUserCard from './SingleUserCard'

const ShowUsers = () => {
    const users=useSelector(state=>state.users.value.users)
  return (
    <div>
        {users.map((x, i) => <SingleUserCard key={i} user={x}/>)}
    </div>
  )
}

export default ShowUsers