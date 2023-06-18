"use client";
import React,{useContext,useEffect} from 'react'
import { UserContext } from '@/context/Usercontext'
import {useRouter} from "next/navigation"

const Secretpage = () => {
    const router =useRouter();
    const {user}= useContext(UserContext);
    useEffect(()=>{
      if(!user){
        router.push("/login")
      }
    },[])

  return (
    <div>Secretpage</div>
  )
}

export default Secretpage