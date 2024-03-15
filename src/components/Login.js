// LoginForm.js
import React, { useEffect, useState } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../images/avatar.png'


function LoginForm() {
  const navigate = useNavigate()




  const handleSubmit = (e) => {
    navigate('/news')
  };









  return (
   <div className='login-page'>
   <h1>Login</h1>

<form action="" method="post" className='login-form'>
  <div className="login-imgcontainer">
    <img src={avatar} alt="Avatar" className="avatar"/>
  </div>

  <div className="login-container">
    <label for="username"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="username" className='login-username' id='username' required/>

    <label for="password"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" className='login-password' required/>
        
    <button type="submit" className='login-button' onClick={handleSubmit}>Login</button>
  
  </div>

  <div className="login-links" >
    <span className="reg">Create New Account? <Link to="/register">Register</Link></span>

    <span className="admin"><Link to='#'>Admin Login</Link></span>

  </div>
</form>
</div>

  );
}

export default LoginForm;
