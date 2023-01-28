import React from 'react'
import loginModel from "../assets/model.png";
import "../css/login.css"
import Button from '../shared/Button';
import useForm from "../hooks/useInput"
import { on } from 'stream';


const Login = () => {
  const { handleAccount, reset, email, password } = useForm("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(email, password)
    reset()
  }
  return (
    <section className='container'>
      <main className="login">
        <form action="" className='form'>
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
