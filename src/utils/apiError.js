class ApiError extends Error {
    constructor(
        statusCode , 
        message = "Something ent wrong ",
        errors = [],
        statck =" ",
    )
        
     {
        super(message)
        this.statusCode= statusCode
        this.data = null 
        this.message = message 
        this.success= false;s
        this.errors= errors
        if (statck){
            this.statck= statck
        }else {
            Error.captureStackTrace(this , this.constructorn )
        }

        
    }
    
}
export { ApiError }