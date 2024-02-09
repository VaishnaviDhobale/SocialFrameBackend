

export const tryCatchWrapper = (requestFuction) => (req,res,next) => {
    return (req,res,next)=>{
        try {
            requestFuction(req,res,next)
        } catch (error) {
            next(error)
        }
    }
}