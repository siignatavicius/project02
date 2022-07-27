import { useRef} from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { updateCurrent } from '../features/users';
import { useDispatch } from 'react-redux';


const LoginPage = () => {

  const users = useSelector(state => state.users.value.users)
  
  
 
  const name =useRef()
  const passOne =useRef()
  const dispatch = useDispatch()
  const nav = useNavigate()

  function login() {

    const user = {
      name: name.current.value,
      passOne: passOne.current.value
    }
   
    const userAuth = users.find(x => x.username === user.name && x.passOne === user.passOne)
    console.log(userAuth)
    if (userAuth) {
      dispatch(updateCurrent(userAuth))
      nav("/profile")
      }
     
  }

  return (
    <div>
      <div className="d-flex flex-column">
        <input ref={name} type="text" placeholder="username" />
        <input ref={passOne} type="text" placeholder="password" />

        <button onClick={login}>Login</button>
      </div>

    </div>
  )
}

export default LoginPage