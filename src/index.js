// require('dotenv').config({ path: './env' })
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from './app.js'

dotenv.config({
    path: './env'
})



connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("ERROR", error);
            throw error;
        })
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is listening at port${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log("MongoDB connection failed !! ", err)
    })






// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("ERROR server", error)
//             throw error
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening ono port ${env.process.PORT}`)
//         })
//     } catch (error) {
//         console.log("ERROR", errror)
//         throw err
//     }
// })()