// it is promise rapper

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        console.log("Request body:", req.body.email);
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}





export { asyncHandler }

// const asyncHandler =()=>{}
// const asyncHandler =(fn)=>{()=>{}}
// const asyncHandler= (fn)=>()=>{}



// it is async await rapper-----
// const asyncHandler=(fn)=>async (req,res,next)=>{
//     try{
//       await fn(req,res,next)
//     }
//     catch(error){
//         res.status(err.code || 500).json({
//             sucess:false,
//             message:err.message
//         })
//     }
// }