import mongoose from 'mongoose'


const dbConnect =async():Promise<void> =>{
try {
   await mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.15")

        console.log('mongoose connected successfully')
  
} catch (error) {
    console.log(error);
}
}
export {dbConnect}