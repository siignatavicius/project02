import React from 'react'
import {Link} from "react-router-dom";

const Toolbar = () => {
    

  return (
    <div className='d-flex space-btw'>
        <div>
            <Link to="/">Register</Link>
        </div>
          <div>
              <Link to="/login">Login</Link>
          </div>
      <div>
        <Link to="/allusers">Show registered users</Link>
      </div>
      <div>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  )
}

export default Toolbar