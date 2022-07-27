import {useRef, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const ChangePhotoPage = () => {
    const users = useSelector(state => state.users.value.users)
  const user = useSelector(state => state.users.value.currentuser)
    const photo = useRef()
   
    


 

    
        
        




  return (
    <div>
        <h4>Enter photo url</h4>
        <input ref={photo} type="text" />
        <button >Save photo</button>
    </div>
  )
}

export default ChangePhotoPage