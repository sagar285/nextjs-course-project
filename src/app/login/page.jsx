"use client";
import React,{useState} from 'react'
import styles from './page.module.css'
import {useRouter} from "next/navigation"

const Login = () => {
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const router =useRouter();



  const loginapi =async(e)=>{
     e.preventDefault();
     const res =await fetch("/api/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        email,password
      })
     });
     const data =await res.json();
     if(data){
        router.push("/secret")
     }
  }



  return (
    <div className={styles.login}>
    <form>
     <input type='email' placeholder='enter your email'
     onChange={(e)=>setemail(e.target.value)}/>
     <input type='password' placeholder='enter your password'
      onChange={(e)=>setpassword(e.target.value)}/>
     <button onClick={loginapi}>Login</button>
    </form>
  </div>
  )
}

export default Login