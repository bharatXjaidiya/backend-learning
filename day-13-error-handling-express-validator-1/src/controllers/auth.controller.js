export const registerController = async (req, res, next) => {

    try{
        console.log(email)

    }catch(err){
        err.status = 400;
        next(err)
    }
} 