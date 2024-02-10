import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv"

dotenv.config();
console.log(process.env.cloudName, process.env.apiKey,process.env.apiSecret)
// Cloudinary configration 
          
cloudinary.config({ 
  cloud_name: process.env.cloudName, 
  api_key: process.env.apiKey, 
  api_secret: process.env.apiSecret 
});

          
// Upload local files on cloudinary and get public url as a response
export const uploadOnCloudinaryAndGetPublicUrlOfFiles = async ( localFilePath) => {
  try {
    if (!localFilePath) return null;
    let response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // fs.unlinkSync(localFilePath); // Here we deleting a file from our local folder once we got public url.
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // Here we deleting a file from our local folder if cloudinary process gets failed.
    return error;
  }
};
