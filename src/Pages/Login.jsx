import React from 'react'
import './CSS/Login.css'
const Login = () => {
  return (
    <div className='login'>
      <div className='login-container'>
        <h1>Sign Up</h1>
        <div className='login-fields'>
            <input type="text" placeholder='Your Name'/>
            <input type="email" placeholder='Email Address'/>
            <input type="password" placeholder='Password'/>

        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already Have an Account <span>Login here</span></p>
        <div className='loginsignup-agree'>
            <input type="checkbox" name='' id=''/>
            <p>By continuing,i agree the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Login
