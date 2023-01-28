import React, { FormEvent } from 'react'
import {Link} from "react-router-dom"
import loginModel from "../assets/model.png";
import "../css/login.css"
import Button from '../shared/Button';
import useForm from "../hooks/useInput"


const Login = () => {
  const { handleAccount, reset, email, password } = useForm("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(email, password)
    reset()
  }
  return (
    <section className='container'>
      <main className="login">
        <form action="" className='form' onSubmit={handleSubmit}>
          <h3>Login to continue</h3>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Enter your email' onChange={handleAccount} />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Enter your password' onChange={handleAccount} />
          </div>
          <Button type='submit'>Login</Button>
            <div className="login_or_sigh-up">
            have an accout? <Link to={"/login"}>lofin</Link>
          </div>

          <div className='social'>
            <Button type='submit'>Google</Button>
            <Button type='submit'>Facebook</Button>
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
