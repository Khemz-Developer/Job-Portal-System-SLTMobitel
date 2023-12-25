const jsonWebToken = require('jsonwebtoken');

function UserverifyToken(req,res,next){
    const authorizeHeader = req.headers.authorization;
    if(!authorizeHeader){
        return res.status(401).json({error:'no token provided'})
    }
    if(!authorizeHeader.startsWith('Bearer ')){
        return res.status(401).json({error:'invalid  token foemate!'});
    }

    const token = authorizeHeader.slice(7);
    if(!token){
        return res.status(401).json({error:'invalid  token '});
    }
    try{
        const decodedData = jsonWebToken.verify(token,process.env.SECRET_KEY);
        console.log(decodedData);
        if (decodedData.role === 'user') {
            next();
          } else {
            console.log('Decoded Token:', decodedData);
            return res.status(403).json({ error: 'Unauthorized: Insufficient privileges' });
          }
    }catch(error){
        return res.status(401).json({error:'invalid  token !'});
    }
}

module.exports=UserverifyToken;