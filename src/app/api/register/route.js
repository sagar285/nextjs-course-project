import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server";

export const POST =async(request)=>{
    const {name,email,password} =await request.json();
    console.log(name,email,password);
    await connect();
    const hashpasshword =await bcrypt.hash(password,8)
    const newuser =new User({name,email,password:hashpasshword});
    try {
      await newuser.save();  
      return new NextResponse(JSON.stringify({msg:"user has been created"}),{status:201});
    } catch (error) {
        throw new Error(error);
    }
}