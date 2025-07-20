import express from "express"
import { protectAdmin } from "../middleware/auth.js";
import { getAllBookings, getAllShow, getDeshboardData, isAdmin } from "../controllers/adminController.js";

const adminRouter = express.Router();

adminRouter.get('/is-admin',protectAdmin,isAdmin)
adminRouter.get('/dashboard',protectAdmin,getDeshboardData)
adminRouter.get('/all-shows',protectAdmin,getAllShow)
adminRouter.get('/all-bookings',protectAdmin,getAllBookings)

export default adminRouter;