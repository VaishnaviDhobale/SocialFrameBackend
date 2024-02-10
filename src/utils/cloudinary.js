import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv"

dotenv.config("./.env")

// Cloudinary configration 
          
// cloudinary.config({ 
//   cloud_name: process.env.cloudName, 
//   api_key: process.env.apiKey, 
//   api_secret: process.env.apiSecret 
// });

          
cloudinary.config({ 
  cloud_name: 'doegmrrey', 
  api_key: '885664193384118', 
  api_secret: 'TE-Nuq_8-x-ke2mb2BXLxS1Hb-8' 
});


// Upload local files on cloudinary and get public url as a response
export const uploadOnCloudinaryAndGetPublicUrlOfFiles = async ( localFilePath) => {
  try {
    if (!localFilePath) return null;
    let response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    fs.unlinkSync(localFilePath); // Here we deleting a file from our local folder once we got public url.
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // Here we deleting a file from our local folder if cloudinary process gets failed.
    return error;
  }
};
