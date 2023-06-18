"use client";
import {createContext,useState,useEffect} from "react"

export const UserContext =createContext();

export const Userprovider = ({children})=>{
    const [user,setuser] =useState(false);

    const getuser =async()=>{
       const res =await fetch("/api/me");
       const data =await res.json();
       if(data) setuser(true);
    }
    useEffect(()=>{
          getuser();
    },[])

    return(
        <UserContext.Provider value={{user,setuser}}>
            {children}
        </UserContext.Provider>
    )
}