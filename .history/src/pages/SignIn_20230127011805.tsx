import React, { SyntheticEvent } from 'react'
import loginModel from "../assets/model1.png";
import "../css/login.css"
import Button from '../shared/Button';
import { useInput } from '../hooks/useInput';



const SignIn = () => {
  const [firstName, firstNameRef] = useInput()


  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    console.log(firstName)
  }
  return (
    <section className='container'>
      <main className="login">
        <form action="" className='form' onSubmit={handleSubmit}>
          <h3>Sign in to continue</h3>
          <div className="w-50">
            <div className="form-group">
              <label htmlFor="" >First Name</label>
              <input type="text" placeholder='Enter your first name' ref={firstNameRef} />
            </div>
            <div className="form-group">
              <label htmlFor="">Last Name</label>
              <input type="text" placeholder='Enter your last name' />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Enter your last email' />
          </div>
          <div className="w-50">
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input type="password" placeholder='Enter your email' />
            </div>
            <div className="form-group">
              <label htmlFor="">Confirm Password</label>
              <input type="password" placeholder='Enter your password' />
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
