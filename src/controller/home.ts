import {Request ,Response } from "express"
import {studentSchema} from "../model/studentModel"



 const getHome  = async (req:Request,res:Response):Promise<void> =>{
    try {
        const stuData = await studentSchema.find({}).sort({createdAt:-1})
        res.render("home",{stuData})        
    } catch (error) {
        console.log(error)
    }
}

const addStudent = async(req:Request,res:Response):Promise<void> =>{
    try {
        const {name,age,gender,studentClass} =req.body as {name:string,age:number,gender:string,studentClass:string}
        console.log(name ,age ,gender ,studentClass,'sf')
         const studData= await studentSchema.findOne({name:name,age:age});
         if(!studData){
            const studData= new studentSchema({
                name,
                age,
                gender,
                class:studentClass,
            
            })
        const saveData = await studData.save();
        if(saveData){
             res.json({success:true,message:'Details saved successfully'})
        }else{
            res.json({success:false,message:"error while saving details"})
        }

         }else{
            res.json({success:false,message:"student is exitst"})
         }
        
    } catch (error) {
        console.log(error)
    }
}
const editStudent = async(req:Request,res:Response):Promise<void> =>{
    try {
        const {name ,age ,studentClass,gender,studId} =req.body as {name:string,age:number,studentClass:string,gender:string,studId:string}
        console.log(name,age,studentClass,gender,studId)

    const studData = await studentSchema.findById(studId)
   
    if(studData){
        
    
     const updateData = await studentSchema.findByIdAndUpdate(studId,{$set:{name:name,age:age,class:studentClass,gender:gender}},{new:true})
     if(updateData){
        res.json({success:true,message:"successfully updated"})
     }else{
        res.json({success:false,message:"updation failed"})
     }
    }else{
        res.json({success:false,message:"student not exist"})
    }
    } catch (error) {
        
    }
}
const deleteStudent = async(req:Request,res:Response):Promise<void> =>{
    try {
        const {studentId} =req.body as {studentId:string}
        console.log(studentId,'ofijaoisfsthdiundet')
        const deleted = await studentSchema.findByIdAndDelete({ _id: studentId })
        
        if (deleted) {
            res.status(200).json({success:true, message: "deleted successfully" });
        } else {
            res.status(404).json({success:false, message: "student not found" });
        }
    } catch (error) {
        
    }
}
const signout = async(req:Request,res:Response):Promise<void> =>{
    try {
        
    } catch (error) {
        
    }
}
export const homeController={getHome,addStudent,editStudent,deleteStudent,signout}
