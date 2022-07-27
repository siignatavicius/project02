import { useRef,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../features/users';
import { useNavigate } from 'react-router-dom';


const RegisterPage = () => {
  const users = useSelector(state => state.users.value.users)
  const [error, setError] = useState(null)

  const username = useRef()
  const passOne = useRef()
  const passTwo = useRef()
 
  const dispatch = useDispatch()
  const nav = useNavigate ()
  

  function register() {


    const user = {
      image: "https://cdn3.vectorstock.com/i/thumb-large/32/12/default-avatar-profile-icon-vector-39013212.jpg",
      username: username.current.value,
      passOne: passOne.current.value,
      passTwo: passTwo.current.value
    }
    if (users.find(x => x.username === user.username)) {
      return setError('User exist')
    }
  
    if (user.username.length < 4 || user.username.length > 20) {
      return setError('Bad username length')
    }

    if (user.passTwo !== user.passOne) {
      return setError("passwords don't match")
    }
    
    if (user.passTwo.length < 4 || user.passTwo.length > 20) {
      return setError("bad password length")
    }

    if (!(user.passOne.includes("!") ||
          user.passOne.includes("@") ||
          user.passOne.includes("#") ||
          user.passOne.includes("$") ||
          user.passOne.includes("%") ||
          user.passOne.includes("^") ||
          user.passOne.includes("&") ||
          user.passOne.includes("*") ||
          user.passOne.includes("_") ||
          user.passOne.includes("+"))) {

     return setError("password must include special symbol")
    }
    if (!user.passOne.match("^.*[A-Z].*$"))
      return setError("password must have uppercase letter")
   
   

     
     
    
    setError(null)

    
        dispatch(addUser(user))
        nav('/login')

  }
  return (
    <div className='register'>
      <input ref={username} type="text" placeholder='user name' />
      <input ref={passOne} type="text" placeholder='create password' />
      <input ref={passTwo} type="text" placeholder='confirm password' />

      {error && <h3 className='msg'>{error}</h3>}

      <button onClick={register}>Register</button>
    </div>
  )
}

export default RegisterPage