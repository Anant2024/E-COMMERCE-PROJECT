import { hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
export const registerController = async(req,res)=>{
    try{
     const {name,email,password,phone,address}=req.body
     //validationl
     if(!name){
        return res.send({error:'Name is Required'})
    }
    if(!email){
        return res.send({error:'Email is Required'})
    }
    if(!password){
        return res.send({error:'phone no is Required'})
    }
    if(!phone){
        return res.send({error:'Name is Required'})
    }
    if(!address){
        return res.send({error:'address is Required'})
    }
    //check user
    const exisitingUser = await userModel.findOne({email})
    //exisiting user
    if(exisitingUser){
        return res.status(200).send({
            success:true,
            message:'Already Registered please login',
        })
    }
    //register user
    const hashedPassword= await hashPassword(password)
    //save
    const user = await userModel({name,email,phone,address,password:hashedPassword}).save()
    res.status(201).send({
        success:true,
        message:'user registered successfully',
        user,
    });
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in registeration',
            error
        })
    }
};

