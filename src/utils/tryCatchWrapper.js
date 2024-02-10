
import {apiError} from "./apiError.js"
// This utility for try catch wrapper so we dont need to write try catch block in every place
export const tryCatchWrapper = (requestFuction)=> {
    return (req,res,next)=>{
        try {
            console.log(req.body)
            requestFuction(req,res,next);
        } catch (error) {
            next(error);
        };
    };
};