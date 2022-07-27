import React from 'react'
import SingleUserCard from '../components/SingleUserCard'
import { useSelector } from 'react-redux'






const AllUsersPage = () => {
  const users = useSelector(state => state.users.value.users)
  
   
  return (
    <div className='d-flex flex-wrap'>
 
        {users.map((x, i) => <SingleUserCard key={i} index={i} user={x} />)}

    </div>
  )
}

export default AllUsersPage