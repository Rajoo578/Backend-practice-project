 //promises base define asynceHandler

const asyncHandler =( requestHandler)=>{
    (req, res , next )=>{
        Promise.resolve (req, res, next )
        .catch((err)=>{
            next(err)
        })
    }
}

export { asyncHandler}

// try catch rule to define the asyncHandler 
//highorder function high order function is the accest the function
// as an argument and return as a variable is call the high order function 
// const asyncHandler = (fn)=> async(req, res , next )=>{
//     try{
// await fn(req, res, next)
//     }
//     catch(error){
//         res.status (err.code||500 ) .json(
//             {success :false ,
//         message :error.message})

//     }

// }