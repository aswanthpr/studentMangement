import  mongoose,{Document,Schema} from "mongoose";

export interface studType extends Document {
    name:string;
    class:string;
    age:number;
    gender:string;

}

const studSchema :Schema<studType> = new Schema({
name:{
    type:String,
    required:true
},
class:{
    type:String,
    required:true,
    
},
age:{
    type:Number,
    required:true,
    
},
gender:{
    type:String,
    required:true,
   
},
},{timestamps:true});

const studentSchema = mongoose.model<studType>('studnet',studSchema)
export  {studentSchema}
