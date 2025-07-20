import express from "express";
import { createBooking, getOccupiedSeats } from "../controllers/bookingController.js";

const bookingRouter = express.Router();

bookingRouter.post('/create',createBooking); // using we create the new booking
bookingRouter.get('/seats/:showId',getOccupiedSeats);

export default bookingRouter;
