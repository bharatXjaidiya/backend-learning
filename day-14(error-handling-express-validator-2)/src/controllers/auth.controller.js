export const registerController = async (req, res,next) => {
    try {
        const { username, email } = req.body;
        console.log(password)
        return res.status(201).json("no error")

    }
    catch(e){
        e.status = 400;
        next(e)
    }

    
}


 