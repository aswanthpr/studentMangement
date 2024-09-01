import  mongoose,{Document,Schema} from "mongoose";

export interface aType extends Document {
    email:string;
    password:string;

}

const adminSchema :Schema<aType> = new Schema({
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true,
    unique:true
},
},{timestamps:true});

const Admin = mongoose.model<aType>('admin',adminSchema)
export{Admin}

