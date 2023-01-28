import React, { FormEvent, useState } from 'react'
import { Link } from "react-router-dom"
import loginModel from "../assets/model1.png";
import "../css/login.css"
import Button from '../shared/Button';
import useForm from '../hooks/useForm'
import Alert from '../shared/Alert';
import useError from '../../.history/src/hooks/useError_20230128022526';


const SignIn = () => {

  const { createAccount, handleAccount, reset } = useForm("")
  const { error, handleError } = useError()


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if ((createAccount.firstName === "") || (createAccount.lastName === "" || (createAccount.email === "" || (createAccount.password === "" || createAccount.passwordcomfirm === "")))) {
      handleError("All fields are required")
      return;
    }

    if (createAccount.password.trim().length <= 5 || createAccount.passwordcomfirm.trim().length <= 5) {
      handleError("Password must be at least 6 characters")
      return;
    }




    if (createAccount.password !== createAccount.passwordcomfirm) {
      handleError("Password does not match")
      return;
    }
    console.log("success", createAccount)

  }


  return (
    <section className='container'>
      <main className="login">
        <form action="" className='form' onSubmit={handleSubmit}>
          <h3>Sign in to continue</h3>
          {error.status && <Alert message={error.message} styles={{
            fontSize: "16px",
            color: "darkred",
            marginTop: "10px"

          }} />}
          <div className="w-50">
            <div className="form-group">
              <label htmlFor="" >First Name</label>
              <input type="text" placeholder='Enter your first name' name="firstName" onChange={handleAccount} />
            </div>
            <div className="form-group">
              <label htmlFor="">Last Name</label>
              <input type="text" placeholder='Enter your last name' name='lastName' onChange={handleAccount} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Enter your last email' name='email' onChange={handleAccount} />
          </div>
          <div className="w-50">
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input type="password" placeholder='Enter your email' name='password' onChange={handleAccount} />
            </div>
            <div className="form-group">
              <label htmlFor="">Confirm Password</label>
              <input type="password" placeholder='Enter your password' name='passwordcomfirm' onChange={handleAccount} />
            </div>
          </div>
          <Button type='submit'>Submit</Button>
          <div className="login_or_sigh-up">
            Have an account? <Link to={"/login"}>Login</Link>
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

export default SignIn
