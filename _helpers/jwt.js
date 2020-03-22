const expressJwt = require('express-jwt');
const config = require('config.json');

module.exports = jwt;

function jwt(){
    const { secret } = config;
    return expressJwt({ secret }).unless({
        path: [ //rotas que não precisam de autenticação
            '/users/authenticate'
        ] 
    });
}
