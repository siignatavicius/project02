import React from 'react'
import {  useSelector } from 'react-redux';
import { useNavigate } from 'react-router'

const ProfilePage = () => {
    const user = useSelector(state => state.users.value.currentuser)
   
    const nav = useNavigate()
    

  return (
    <div >
        <img src={user.image} alt="" />
        <h1>{user.username}</h1>
        <button onClick={()=>nav("/changephoto")}>Change photo</button>
        <button>Change password</button>
    </div>
  )
}

export default ProfilePage