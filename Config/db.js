import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://shahzaib823786_db_user:VozeeBYyd3DXZOK7@cluster0.2n5ciii.mongodb.net/";

// 1. Code ko ek function ke andar wrap karein
const connectDB = () => {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("MongoDB Atlas Connected Successfully 🎉");
    })
    .catch((error) => {
      console.log("MongoDB Connection Error:", error);
    });
};

// 2. Is function ko default export banayein taaki server.js isay read kar sake
export default connectDB;
