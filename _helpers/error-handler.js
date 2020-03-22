module.exports = errorHandler;

function errorHandler(err, req, res, next){
    
    if(typeof(err) === 'string'){
        return res.status(400).json({ message: err});
    }

    if(err.name === 'UnauthorizedError'){
        //autorização jwt
        return res.status(401).json({message: "Token inválido!"});
    }

    //default server error (500)
    return res.status(500).json({message: err.message});

}