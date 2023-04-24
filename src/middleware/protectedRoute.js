import jwt from 'jsonwebtoken';

export const verifyLogin = async (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const verify = jwt.verify(token, 'api');

        if(verify){
            req.user = verify;
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

export const checkAdmin = (req, res, next)  => {
    if (req.user.role === 'admin') {
      next(); 
    } else {
      res.status(403).send('Access Denied'); 
    }
}
//