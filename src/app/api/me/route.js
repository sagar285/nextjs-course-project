import {verify} from "jsonwebtoken"
import {cookies} from "next/headers"
import {NextResponse} from "next/server"

export async function GET(){
    const cokkiestore = cookies();
    const token =cokkiestore.get("cookie_name");
    if(!token){
        return new  NextResponse(JSON.stringify({msg:"unauthorized"}),{status:500});
    }
    const {value} =token;
    try {
        if(value){
            const user= verify(value,"dkfjkdfjdsjfjhfsdhjfdsfjdsjfdj");
            return new NextResponse(JSON.stringify({msg:"authorized user"},{status:201}))
        }
    
    } catch (error) {
        throw new Error(error);
    }
}