import React from "react";
import './Register.css'
import { Link } from "react-router-dom";


const Register = () =>{
    
    
    
    return(
        <div className="reg-page">
             <h1>Sign Up</h1>
            
<form action="" className="reg-form">
  <div class="reg-container">
   

    <label for="f_name"><b>First Name</b></label>
    <input className='reg-first' type="text" placeholder="Enter First Name" name="f_name" required />

    <label for="l_name"><b>Last Name</b></label>
    <input className='reg-last' type="text" placeholder="Enter Last Name" name="l_name" required />



    <label for="email"><b>Email</b></label>
    <input className='reg-email' type="email" placeholder="Enter Email" name="email" required />

    <label for="psw"><b>Password</b></label>
    <input className='reg-password' type="password" placeholder="Enter Password" name="psw" required />

    <label for="psw-repeat"><b>Confirm Password</b></label>
    <input className='reg-con-password' type="password" placeholder="Confirm Password" name="psw-repeat" required />

    


    <div class="clearfix">

      <button type="submit" class="reg-button">Sign Up</button>
      <div>Already have an account?<Link to='/login'>Login</Link></div>
    </div>
  </div>
</form>        
                    
        </div>
    )
}

export default Register 