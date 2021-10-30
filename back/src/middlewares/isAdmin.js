import { UserService } from '../service/UserService.js'

const userService = new UserService();

const isAdmin = async (req, res, next) => {
    try{
        const id = req.userId;
        const user = await userService.findByIdAndAuthorization(id);
        if(user.authorization !== "ADMIN"){
            return res.status(401).json({
                error: "User not admin"
            });
        }
        next();    
    }catch(err){
        return res.status(401).json({
            error: err
        });
    }
}

export { isAdmin } 