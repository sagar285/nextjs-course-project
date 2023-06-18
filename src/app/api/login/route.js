import User from "@/models/User";
import connect from "@/utils/db";
import {serialize} from "cookie"
import{sign} from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server";

export async function POST(request){
    const {email,password} =await request.json();
    console.log(email,password);
    await connect();
    const user =await User.findOne({email:email});
    if(user){
        const ispassword = await bcrypt.compare(password,user.password);
        if(ispassword){
            const token =sign({_id:user._id},"dkfjkdfjdsjfjhfsdhjfdsfjdsjfdj");
            const serialized = serialize("cookie_name",token,{
                httpOnly:true,
            })
        return new NextResponse(JSON.stringify(user),{
            status:201,
            headers:{"Set-Cookie":serialized},
        })

        }
        else{
            throw new Error("wrong email or password");
        }
    }
    else{
        throw new Error("user does not exist");
    }
}