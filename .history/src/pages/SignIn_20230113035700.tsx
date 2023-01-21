import React from 'react'
import loginModel from "../assets/sign.jpg";
import "../css/login.css"
import Button from '../shared/Button';


const SignIn = () => {
  return (
        <section className='container'>
          <main className="login">
              <form action="" className='form'>
                  <h3>Login to continue</h3>
                  <div className="w-500">
                       <div className="form-group">
                        <label htmlFor="">First Name</label>
                        <input type="text" placeholder='Enter your first name' />
                    </div>
                   <div className="form-group">
                      <label htmlFor="">Last Name</label>
                      <input type="text"  placeholder='Enter your last name'/>
                  </div>
                  </div>
                     <div className="form-group">
                      <label htmlFor="">Last Name</label>
                      <input type="text"  placeholder='Enter your last name'/>
                  </div>
                  <div className="w-500">
                       <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='Enter your email' />
                    </div>
                   <div className="form-group">
                      <label htmlFor="">Confirm Password</label>
                      <input type="password"  placeholder='Enter your password'/>
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
