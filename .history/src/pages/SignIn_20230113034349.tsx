import React from 'react'
import loginModel from "../assets/login.jpg";
import "../css/login.css"
import Button from '../shared/Button';


const SignIn = () => {
  return (
        <section className='container'>
          <main className="login">
              <form action="" className='form'>
                  <h3>Login to continue</h3>
                  <div className="form-group">
                      <label htmlFor="">Email</label>
                      <input type="text" placeholder='Enter your email' />
                  </div>
                   <div className="form-group">
                      <label htmlFor="">Password</label>
                      <input type="password"  placeholder='Enter your password'/>
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
