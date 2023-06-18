"use client";
import React,{useState} from 'react'
import styles from './page.module.css'
import {useRouter} from "next/navigation"


export default function Register() {
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const router =useRouter();


  const registerapi =async(e)=>{
      e.preventDefault();
      const res =await fetch("/api/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          name,email,password
        })
      })
    const data=await res.json();
    if(data)
    router.push("/login");
  }




  return (
   <div className={styles.register}>
     <form>
      <input type='text' placeholder='enter your name'
      onChange={(e)=>setname(e.target.value)}/>
      <input type='email' placeholder='enter your email'
      onChange={(e)=>setemail(e.target.value)}/>
      <input type='password' placeholder='enter your password'
      onChange={(e)=>setpassword(e.target.value)}/>
      <button onClick={registerapi}>Register</button>
     </form>
   </div>
  )
}
