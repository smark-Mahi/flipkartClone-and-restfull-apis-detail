import React, { useEffect, useState } from 'react'
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import Nav from './Nav'
const Login = () => {
  const [state,setstate]=useState(true)
  const schema=yup.object().shape({
    email:yup.string().required("your email is required"),
    password:yup.string().min(6).max(10).required("your password should be greater than six characters"),
    confirmpassword:yup.string().oneOf([yup.ref("password"),null,"passwords don't match"]).required(),
  });
  const {register,handleSubmit,formState:{errors}}=useForm({
    resolver:yupResolver(schema),
  });
  const onSubmit=(data)=>{
    console.log(data)
    if(data){
      localStorage.setItem('login',true)
    }
  }
  const navigate=useNavigate()
  useEffect(()=>{
    let login=localStorage.getItem('login')
    if(login){
      navigate('/dashboard')
      setstate(false)  
    }
})
  return (
    <div>
    <Nav state={state}/>
    <form onSubmit={handleSubmit(onSubmit)} style={{textAlign:`center`,position:`relative`,top:`20px`}}>
      <input type="email" placeholder='Email... '{...register("email")} style={{marginLeft:`200px`}} /><br/>
      <p style={{color:`red`,fontWeight:`400`,fontSize:`13px`}}>{errors.email?.message}</p>
      <input type="password" placeholder='Password' {...register("password")} /><br/>
      <p style={{color:`red`,fontWeight:`400`,fontSize:`13px`}}>{errors.password?.message}</p>
      <input type="password" placeholder='Confirm password...' {...register("confirmpassword")} /><br/>
      <p style={{color:`red`,fontWeight:`400`,fontSize:`13px`}}>{errors.confirmpassword?.message}</p>
      <button type="submit" style={{width:`13vw`,color:`white`,backgroundColor:`rgb(8, 93, 228)`,height:`5vh`}}>SIGN UP</button>
    </form>
    </div>
  )
}

export default Login
