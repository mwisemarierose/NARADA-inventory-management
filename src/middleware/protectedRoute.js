import jwt from 'jsonwebtoken';

export const verifyLogin = async (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const verify = jwt.verify(token, 'api');

        if(verify){
            next();
        } else {
            res.status(401).json({
              status: 401,
              message: 'Please log in to make an action'
            });
        }
    } catch(err) {
        res.status(401).json({
            status: 401,
            message: 'Please log in to make an action'
        });
    }
}

// function to verify login and check the clirnt role if it is admin
export const verifyAdmin = async (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const verify = jwt.verify(token, 'api');
        if(verify.id.role ==='admin'){
            next();
        }
    } catch(err) {
        res.status(401).json({
            status: 401,
            message: 'You are not authorized to make this action'
        });
    }
}





