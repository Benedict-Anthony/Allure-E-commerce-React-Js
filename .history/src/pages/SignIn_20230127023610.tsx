import React, { SyntheticEvent, useState, ChangeEvent } from 'react'
import loginModel from "../assets/model1.png";
import "../css/login.css"
import Button from '../shared/Button';
import useForm from '../hooks/useInput';

type createAccountType = {
  firstName: string
  lastName: string
  email: string
  password: string
  passowrdcomfirm: string
}
const SignIn = () => {

  const [createAccount, handleFormUpdate] = useForm("")
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    console.log(createAccount)
  }

  const handleAccout = 
  return (
    <section className='container'>
      <main className="login">
        <form action="" className='form' onSubmit={handleSubmit}>
          <h3>Sign in to continue</h3>
          <div className="w-50">
            <div className="form-group">
              <label htmlFor="" >First Name</label>
              <input type="text" placeholder='Enter your first name' name="firstName" onChange={hand} />
            </div>
            <div className="form-group">
              <label htmlFor="">Last Name</label>
              <input type="text" placeholder='Enter your last name' name='lastName' onChange={() => handleAccount} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Enter your last email' name='email' onChange={() => handleAccount} />
          </div>
          <div className="w-50">
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input type="password" placeholder='Enter your email' name='passowrd' onChange={() => handleAccount} />
            </div>
            <div className="form-group">
              <label htmlFor="">Confirm Password</label>
              <input type="password" placeholder='Enter your password' name='passwordcomfirm' onChange={() => handleAccount} />
            </div>
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

export default SignIn
