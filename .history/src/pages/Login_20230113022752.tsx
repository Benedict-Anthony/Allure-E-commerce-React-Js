import React from 'react'
import loginModel from "../assets/model.png";
import "../css/login.css"

const Login = () => {
  return (
    <section className='container'>
          <main className="login">
              <form action="">
                  <h3>Login Continuer</h3>
                  <div className="form-group">
                      <label htmlFor="">Email</label>
                      <input type="text" />
                  </div>
                   <div className="form-group">
                      <label htmlFor="">Password</label>
                      <input type="password" />
                  </div>
              </form>
              <div>
                  <img src={loginModel} alt="" />
              </div>
      </main>

    </section>
  )
}

export default Login
