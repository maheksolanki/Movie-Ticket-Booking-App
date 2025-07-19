import Booking from "../models/Booking.js";
import Show from "../models/Show.js";

//1. Function to check availability of selected seats for a movie
const checkSeatsAvailability = async(showId,selectedSeats) => {
  try{
    const showData = await Show.findById(showId);
    if(!showData){
      return false;
    }
    const occupiedSeats = showData.occupiedSeats;

    const isAnySeatTaken = selectedSeats.some(seat => occupiedSeats[seat]); 
    return !isAnySeatTaken;

  }catch(err){
    console.log(err.message);
    return false;
  }
}

//Using this function user can booked new show if seat is awailable.

export const createBooking = async (req,res) => {
  try{
    const {userId} = req.auth();
    const {showId,selectedSeats} = req.body;
    const {origin} = req.headers; // means it is frontend url

    //Check if the seat is available for the selected show
    const isAvailable = await checkSeatsAvailability(showId, selectedSeats);

    if(!isAvailable){
      return res.json({success: false, message : "Selected seats are not awilable"});
    }

    //Get the show details if seats is awailable
    const showData = await Show.findById(showId).populate('movie');

    //Create a new booking
    const booking = await Booking.create({
      user : userId,
      show: showId,
      amount : showData.showPrice * selectedSeats.length,
      bookedSeats : selectedSeats
    })
    selectedSeats.map((seat) => {
      showData.occupiedSeats[seat] = userId;
    })
    showData.markModified('occupiedSeats');

    await showData.save();

    //Stripe GateWay Initialize
    
    res.json({success : true , message : "Booked Successfully"})
  }catch(err){
    console.log(err.message);
    res.json({success : false , message : err.message});
  }
}
// get The occupied seat data 
