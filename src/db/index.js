import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionIntance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDb connected !! Db Host ${connectionIntance.connection.host}`)
    }
    catch (error) {
        console.log("monogooDB error", error)
        process.exit(1)
    }
}



export default connectDB;