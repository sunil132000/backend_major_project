import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        //upload the file on cloudinary
        const respnse = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        //file has been uploaded successfull
        console.log("file is upload on cloudinaru", response.url)
        return response
    }
    catch (error) {
        fs.unlinkSync(localFilePath)//remove the locally saved temprory file as upload operation got failed
        return null
    }
}


export { uploadOnCloudinary }