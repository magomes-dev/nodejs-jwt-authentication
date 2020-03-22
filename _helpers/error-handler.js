module.exports = errorHandler;

function errorHandler(err, req, res, next){
    
    if(typeof(err) === 'string'){
        return res.status(400).json({ message: err});
    }

    if(err.name === 'UnauthorizedError'){
        //autorização jwt
        return res.status(401).json({message: "Token inválido!"});
    }
    if (err.name === 'ValidationError') {
        // mongoose validation error
        return res.status(400).json({ message: err.message });
    }

    //default server error (500)
    return res.status(500).json({message: err.message});

}