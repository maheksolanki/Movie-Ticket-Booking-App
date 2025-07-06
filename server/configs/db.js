import mongoose from "mongoose";

const connectDB = async () => {
  try{
    mongoose.connection.on('connected' , () => { // this is only for just message
      console.log('Database is connected!');
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/quickshow`); //Main Line
  }catch(error){
    console.log(error.message);
  }
}
export default connectDB;