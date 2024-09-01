import {Request,Response} from "express";
// import { SessionData } from "express-session";
// import userSchema from  "../model/loginModel";


const getLogin = async(req:Request,res:Response):Promise<any> =>{
    try {
    res.render("login")
    } catch (error) {
        console.log(error)
    }
}

const postLogin =async(req:Request,res:Response)=>{
    const Email:string = "admin@gmail.com";
    const Password:string = "123qwe";
  
console.log("hasiii",req.body)
    try {
        const {email,password} = req.body as {email:string,password:string}
        
        if(Email===email || Password ===password){
          
            return res.json({success:true})
        }else{
            return res.json({success:false,message:"email or password is incorrect"})
        }
    } catch (error) {
        console.log(error)
    }
}
export{
    getLogin,
    postLogin
}
