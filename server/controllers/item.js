import mongoose from 'mongoose'
import Item from  '../models/item.js';
export const readItems=async(req,res)=>{
    try{
    const Items= await Item.find();
    res.status(200).json(Items);
    }
    catch(error){
      res.status(404).json({error:error.message})
    }
}
export const createItem= async(req,res)=>{
    const item= new Item(req.body) 
    try{
    await item.save();
    res.status(201).json(item);
    }
    catch(error){
      res.status(409).json({error:error.message})
    }
}
export const updateItem=async(req,res)=>{
    const {id}=req.params;
    const{title,content}=req.body;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).send(`the id ${id} is not  valid `)
    }
    const Item ={title,content,_id:id}
    await Item.findByIdAndUpdate(id,Item,{new:true})
    res.json(Item);
}
export const deleteItem=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).send(`the id ${id} is not  valid `)
    }
    
    await Item.findByIdAndRemove(id)

    res.status(201).json({message:'Item deleted successfully'});
    
}