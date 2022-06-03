import mongoose from 'mongoose'
import  User  from  '../models/user.js';
export const readUsers=async(req,res)=>{
    try{
    const Users= await User.find();
    res.status(200).json(Users);
    }
    catch(error){
      res.status(404).json({error:error.message})
    }
}
/**
 * export const createTodo=async(req,res)=>{
    const todo= new Todo(req.body) 
    try{
    await todo.save();
    res.status(201).json(todo);
    }
    catch(error){
      res.status(409).json({error:error.message})
    }
}*/ 
export const createUser=async(req,res)=>{
    const user= new User(req.body) 
    try{
    await user.save();
    res.status(201).json(user);
    }
    catch(error){
      res.status(409).json({error:error.message})
    }
}
export const updateUser=async(req,res)=>{
    const {id}=req.params;
    const{title,content}=req.body;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).send(`the id ${id} is not  valid `)
    }
    const User ={title,content,_id:id}
    await User.findByIdAndUpdate(id,User,{new:true})
    res.json(User);
}
export const deleteUser=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).send(`the id ${id} is not  valid `)
    }
    
    await User.findByIdAndRemove(id)

    res.status(201).json({message:'User deleted successfully'});
    
}