import mongoose from './index.js'

const validateEmail = (e)=>{
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(e);
}

const userSchema = new mongoose.Schema({
    firstName:{type:String, required:[true,"FirstName is Required"]},
    lastName:{type:String, required:[true,"LastName is Required"]},
    email:{type:String, required:[true,"Email is Required"],validate:validateEmail},
    password:{type:String,required:[true,"Password is Required"]},
    status:{type:Boolean,default:true},
    role:{type:String,default:"Customer"},
    createdAt:{type:Date, default:Date.now()}
},
{
    collection:'users',
    versionKey:false
})

const userModel = mongoose.model('users',userSchema)

export default userModel