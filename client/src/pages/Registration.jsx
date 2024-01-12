import React, { useState } from 'react'
import Input from '../components/Input'
import Layout from '../components/Layout'

const Registration = () => {
  const user = "shoeb";
  const initialFormData = {
    email: "",
    password: ""
  }
  const [formData, setFormData] = useState(initialFormData)
  const [isLogin, setIsLogin] = useState(false)

  const Logincontrols = [
    {
      name: "email",
      placeholder: "Enter your email",
      type: "text",
      label: "Email"
    },
    {
      name: "password",
      placeholder: "Enter your password",
      type: "text",
      label: "Password"
    },
  ]
  const RegistrationControls = [
    {
      name: "name",
      placeholder: "Enter your name",
      type: "text",
      label: "Name"
    },
    {
      name: "email",
      placeholder: "Enter your email",
      type: "text",
      label: "Email"
    },
    {
      name: "password",
      placeholder: "Enter your password",
      type: "text",
      label: "Password"
    },
  ]

  return (
    <Layout>
      {
        isLogin ?
          <>
            <p className='mb-5'>Login</p>
            <Input controls={Logincontrols} formData={formData} setFormData={setFormData} />
          </>
          :
          <>
            <p className='mb-5'>Register</p>
            <Input controls={RegistrationControls} formData={formData} setFormData={setFormData} />
          </>
      }
      {
        isLogin
          ?
          <p>Already have an account ? <span onClick={() => setIsLogin(!isLogin)} className='text-primary-btn'>Login</span></p>
          :
          <p>create an account ? <span onClick={() => setIsLogin(!isLogin)} className='text-primary-btn'>Register</span></p>

      }
      <button className='mt-5 bg-primary-btn text-white p-2 rounded-md w-fit'>{isLogin?"Login":"Register"}</button>
    </Layout>
  )
}

export default Registration