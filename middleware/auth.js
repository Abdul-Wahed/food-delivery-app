import jwt from "jsonwebtoken";

const authMiddleware = async(req, res, next) => {
    const { token } = req.headers;

    if(!token) {
        return res.json({success: false, message: "Authorization failed cannot get the token"});
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
    } 
    catch (error) {
        console.log(error);
        res.json({success: false, message: "Authorization error!"});
    }
}

export default authMiddleware;