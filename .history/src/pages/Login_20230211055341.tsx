import React, { FormEvent } from 'react'
import { Link } from "react-router-dom"
import loginModel from "../assets/model.png";
import "../css/login.css"
import Button from '../shared/Button';
import useForm from "../hooks/useForm"
import FacebookAuth from "../oauth/FacebookAuth"
import GoogleAuth from "../oauth/GoogleAuth"


const Login = () => {
  const { handleAccount, reset, loginData } = useForm("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(loginData)
    reset()
  }
  return (
    <section className='container'>
      <main className="login">
        <form action="" className='form' onSubmit={handleSubmit}>
          <h3>Login to continue</h3>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Enter your email' name="email" onChange={handleAccount} />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Enter your password' name='password' onChange={handleAccount} />
          </div>
          <Button type='submit'>Login</Button>
          <div className="login_or_sigh-up">
            have an account? <Link to={"/sign-in"}>Sign up</Link>
          </div>

          <div className='social'>
            <GoogleAuth />
            <FacebookAuth />
          </div>
        </form>
        <div className="model">
          <img src={loginModel} alt="" />
        </div>
      </main>

    </section>
  )
}

export default Login
