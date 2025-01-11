import mongoose from "mongoose";

const connectDB= async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("databases is conncected")
    } catch (error) {
        console.log("error in connecting database :",error)
    }
}

export default connectDB;