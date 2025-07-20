import Booking from "../models/Booking.js"
import Show from "../models/Show.js";
import User from "../models/User.js";


//1. API to check if user is admin

export const isAdmin = async (req,res) => { 
  res.json({success : true, isAdmin : true})
}
//uper nu function true return karse jo protect middleware admin == true hase to

//2. API to get dashboard data
export const getDeshboardData = async(req,res) => {
  try{
    const bookings = await Booking.find({isPaid : ture});
    const activeShows = await Show.find({showDateTime : {$gte: new Date()}}).populate('movie');

    const totalUser = await User.countDocuments(); // it gives the total number of documents 
    
    const dashboardData = {
      totalBookings : bookings.length,
      totalRevenue: bookings.reduce((acc, booking) => acc + booking.amount, 0), // here acc is accumulator and reduce do the sum of all amount in bookings array and return single value.
      activeShows,
      totalUser
    }
    res.json({success: true , dashboardData})
  }catch(err){
    console.log(err.message);
    res.json({success: false , message : err.message});
  }
}
//3. API to get all shows 
export const getAllShow = async( req,res) => {
  try{
    const shows = await Show.find({showDateTime : {$gte : new Date()}}).populate('movie').sort({showDateTime : 1});
    res.json({success: ture , shows});
  }catch(err){
    console.log(err.message);
    res.json({success: false , message : err.message});
  }
}

//4 . API to get all bookings
export const getAllBookings = async(req,res) => {
  try{
    const bookings = await Booking.find({}).populate('user').populate({
      path : "show",
      populate: {path : "movie"}
    }).sort({createdAt : -1})
     res.json({success: false ,bookings});
  }catch(err){
    console.log(err.message);
    res.json({success: false , message : err.message});
  }
}

