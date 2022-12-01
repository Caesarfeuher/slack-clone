import React from 'react'
import './Login.css'
import { getAuth, signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
  const [state, dispatch] = useStateValue();

    const signIn = () => {

       const auth = getAuth();
       const provider = new GoogleAuthProvider();
         signInWithPopup(auth, provider)
         
        //  getAuth
        //  signInWithPopup(GoogleAuthProvider)
        .then(result => {
            console.log(result);
            dispatch({
              type:actionTypes.SET_USER,
              user: result.user,
            })
        })
        .catch(error => {
            alert(error.message)
        })
    }
  return (
    <div className='login'>
      <div className='login__container'>
        <img
            src='https://cdn.dribbble.com/users/121337/screenshots/6665825/slack.png?compress=1&resize=400x300'
            alt=''
        />
        <h1> Sign to caesariodinario</h1>
        <p>caesar.slack.com</p>
        <button onClick={signIn}>Sign in with Google</button>
      </div>
      
    </div>
  )
}

export default Login
