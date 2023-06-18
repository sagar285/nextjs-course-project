"use client";
import Link from 'next/link'
import React,{useContext} from 'react'
import styles from './navbar.module.css'
import { UserContext } from '@/context/Usercontext';
import {useRouter} from "next/navigation"

const Navbar = () => {
  const {user,setuser} =useContext(UserContext)
  const router =useRouter();


  const logouthandler =async()=>{
    try {
      const res =await fetch("/api/logout");
      const data =await res.json();
      if(data){
        setuser(false)
        router.push("/login")
      }
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <div className={styles.container}>
       {
        !user ? (
          <div className={styles.link}>
          <Link href={"/"}>Register</Link>
          <Link href={"/login"}>Login</Link>
      </div>
        ):(
          <div className={styles.link}>
          <Link href={"/secret"}>secret</Link>
          <Link href={"/login"} onClick={logouthandler}>Logout</Link>
      </div>
        )
       }
    </div>
  )
}

export default Navbar
