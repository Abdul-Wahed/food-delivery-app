import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://abdulwahed7213:kgDQCb6E1hBIc4rk@cluster0.ppcz4qj.mongodb.net/food-delivery').then(() => console.log("DB Connected!"));
}