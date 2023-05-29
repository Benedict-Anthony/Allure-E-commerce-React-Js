import React, { FormEvent, useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import loginModel from "../assets/model1.png";
import "../css/form.css"
import Button from '../shared/Button';
import useForm from '../hooks/useForm'
import Alert from '../shared/Alert';
import useError from '../hooks/useError';
import FacebookAuth from '../oauth/FacebookAuth';
import GoogleAuth from '../oauth/GoogleAuth';
import Modal from '../components/Modal';
import { useUserContext } from '../contexts/UserAndCartContext';
import { PageYVariant } from '../shared/motion';
import { motion } from "framer-motion"
import { FormLoadingSpiner } from '../shared/Spinner';
import Head from '../shared/Head';


const SignIn = () => {
  const { isAuthenticated, spinning, startSpining, stopSpining } = useUserContext()
  const { formData, handleAccount } = useForm("")
  const { error, handleError, resetError } = useError()
  const [modal, setModal] = useState(false)
  async function signUp(body: any) {
    window.scrollTo(0, 0)
    startSpining()
    const config = {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(body)

    }
    const response = await fetch("https://allure-4qsu.onrender.com/api/user/create/", config)
    if (!response.ok || response.status === 400) {
      stopSpining()
      handleError("User with this Email already exist")
      return;
    } else {
      stopSpining()
      setModal(true)
      console.log(response)
    }



  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    window.scrollTo(0, 0)
    if ((formData.first_name === "") || (formData.last_name === "" || (formData.email === "" || (formData.password === "" || formData.passwordcomfirm === "")))) {
      handleError("All fields are required")
      resetError()
      return;
    }

    if (formData.password.trim().length <= 5 || formData.passwordcomfirm.trim().length <= 5) {
      handleError("Password must be at least 6 characters")
      resetError()
      return;
    }

    if (formData.password !== formData.passwordcomfirm) {
      handleError("Password does not match")
      resetError()
      return;
    }

    signUp(formData)
  }

  useEffect(() => {
    isAuthenticated()
  }, []) // eslint-disable-line
  return (
    <>
      <Head title='Sign UP' href='/sign-in' description='Sign up an account' />

      <section className='container section'

      >
        {spinning && <FormLoadingSpiner />}
        {modal ? (
          <Modal>
            <h1>Account was created succesfuly.</h1>
            <p>An email was sent to you, click on  link provided in the email to activate your account</p>
            <p>if having any issue, please check your spam folder</p>
            <Button type='button'> <Link to={"/login"}>OK</Link></Button>


          </Modal>
        )
          : (
            <motion.main className="login"
              variants={PageYVariant}
              initial="initial"
              animate="animate"
            >
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
                    <input type="text" placeholder='Enter your first name' name="first_name" onChange={handleAccount} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder='Enter your last name' name='last_name' onChange={handleAccount} />
                  </div>
                </div>
                <div className="w-50">
                  <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='Enter your email' name='email' onChange={handleAccount} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">phone</label>
                    <input type="text" placeholder='Phone' name='phone' onChange={handleAccount} />
                  </div></div>
                <div className="w-50">
                  <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='password' name='password' onChange={handleAccount} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" placeholder='comfirm password' name='passwordcomfirm' onChange={handleAccount} />
                  </div>
                </div>
                <Button type='submit'>Submit</Button>
                <div className="login_or_sigh-up">
                  Have an account? <Link to={"/login"}>Login</Link>
                </div>

                <div className='social'>
                  <GoogleAuth />
                  <FacebookAuth />
                </div>
              </form>
              <div className="model">
                <img src={loginModel} alt="" />
              </div>
            </motion.main>
          )}

      </section>
    </>

  )
}

export default SignIn
