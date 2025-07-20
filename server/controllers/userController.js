import { clerkClient } from "@clerk/express";
import Booking from "../models/Booking.js";
import Movie from "../models/Movie.js";


//1. API Controller function to Get user Bookings
export  const getUserBookings = async(req,res) => {
  try{
    const user = req.auth().userId;
    const bookings = await Booking.find({user}).populate({
      path:"show", // show id ni place par whole show data
      populate : {path : "movie"} // and movie id ni place par whole movie data using populate
    }).sort({createdAt: -1})
    res.json({success : true , bookings})
  }catch(err){
    console.log(err.message);
    res.json({success : false ,message : err.message})
  }
}

//2.  API Controller function to add favorite movie in Clerk User Metadata
export  const updateFavorite = async(req,res) => {
  try{
    const {movieId} = req.body;
    const userId = req.auth().userId;
    const user = await clerkClient.users.getUser(userId);

    if(!user.privateMetadata.favorites){
      user.privateMetadata.favorites = []
    }
    if(!user.privateMetadata.favorites.includes(movieId)){
     user.privateMetadata.favorites.push(movieId);
    }
    else{
      user.privateMetadata.favorites = user.privateMetadata.favorites.filter(item => item!== movieId);
    }
    await clerkClient.users.updateUserMetadata(userId,{privateMetadata: user.privateMetadata}); // this will update the private metadata in clerk

    res.json({success : true , message : "Favorite movies updated"})
  }catch(err){
    console.log(err.message);
    res.json({success: false, message : err.message});
  }
}

export const getFavorite = async (req,res) => {
  try{
    const user = await clerkClient.users.getUser(req.auth().userId);
    const favorites = user.privateMetadata.favorites;

    //Getting Movies From database
    const movies = await Movie.find({_id: {$in: favorites}})
    res.json({success: true, movies});
  }catch(err){
    console.log(err.message);
    res.json({success: false, message : err.message});
  }
}