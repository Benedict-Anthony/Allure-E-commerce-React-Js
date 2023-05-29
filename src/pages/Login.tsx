import React, { FormEvent, useEffect } from 'react'
import { Link } from "react-router-dom"
import loginModel from "../assets/model.png";
import "../css/form.css"
import Button from '../shared/Button';
import useForm from "../hooks/useForm"
import FacebookAuth from "../oauth/FacebookAuth"
import GoogleAuth from "../oauth/GoogleAuth"
import { useUserContext } from '../contexts/UserAndCartContext';
import useError from '../hooks/useError';
import Alert from '../shared/Alert';
import { FormLoadingSpiner } from '../shared/Spinner';
import { motion } from "framer-motion"
import { PageYVariant } from '../shared/motion';
import Head from '../shared/Head';



const Login = () => {
  const { handleAccount, reset, loginData } = useForm("")
  const { error, handleError, resetError } = useError()
  const { loginUser, isAuthenticated, stopSpining, startSpining, spinning } = useUserContext()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!loginData.email || !loginData.password) {
      handleError("Email or Password field cannot be empty")
      resetError()
      return;
    }
    startSpining()
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify({
        email: loginData.email,
        password: loginData.password,
      })

    }
    const response = await fetch("https://allure-4qsu.onrender.com/api/token/", config)

    if (response.status !== 200) {
      stopSpining()
      handleError("Email or password incorrect")
      resetError()
      return;
    }
    const data = await response.json()
    loginUser(data)
    stopSpining()
    reset()
  }


  useEffect(() => {
    document.querySelector(".form")?.classList.remove("active")

    isAuthenticated()
  }, []) // eslint-disable-line

  return (
    <>

      <Head title='Login' href='/login' description='Login' />

      <motion.section className='container section'
        variants={PageYVariant}
        initial="initial"
        animate="animate"
      >
        {spinning && <FormLoadingSpiner />}
        <main className="login">
          <form action="" className='form' onSubmit={handleSubmit}>
            <h3>Login to continue</h3>
            <div className="form-group">
              {error.status && <Alert message={error.message} styles={{
                fontSize: "16px",
                color: "darkred",
                marginTop: "10px",
                padding: "4px 1px"

              }} />}
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

      </motion.section>
    </>
  )
}

export default Login
