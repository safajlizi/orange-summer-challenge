import mongoose from 'mongoose'


const itemSchema = new mongoose.Schema({
  label: { type: String, default: null },
  count: { type: Number, default: null }},{timestamps:true})
  

  export default  mongoose.model("Item", itemSchema);