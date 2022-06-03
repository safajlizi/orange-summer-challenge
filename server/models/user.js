import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String ,required:true},
  isMmanager:Boolean,

},{timestamps:true});

export default  mongoose.model("User", userSchema);
