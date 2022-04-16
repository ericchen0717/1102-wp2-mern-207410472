import mongoose from "mongoose";

const connectDB_72 = (url) => {
    return mongoose.connect(url);
}

export default connectDB_72;