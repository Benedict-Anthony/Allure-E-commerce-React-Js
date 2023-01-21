import React from 'react'
import loginModel from "../assets/model.png";
import "../css/login.css"
import Button from '../shared/Button';

const Login = () => {
  return (
    <section className='container'>
          <main className="login">
              <form action="" className='form'>
                  <h3>Login Continuer</h3>
                  <div className="form-group">
                      <label htmlFor="">Email</label>
                      <input type="text" />
                  </div>
                   <div className="form-group">
                      <label htmlFor="">Password</label>
                      <input type="password" />
                  </div>
                  <Button type='submit'>Login</Button>
              </form>
              <div className="model">
                  <img src={loginModel} alt="" />
              </div>
      </main>

    </section>
  )
}

export default Login
