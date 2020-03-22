const config = require('config.json');
const jwt = require('jsonwebtoken');

// Usuarios hardcoded para simplificar, e aplicações reais deve persisitir em banco.
const users = [
    { id: 1, username: 'magomes', password: 'abc', firstName: 'Matheus', lastName: 'Gomes' },
    { id: 2, username: 'elnunes', password: 'abc', firstName: 'Elyse', lastName: 'Nunes'}
];

module.exports = {
    authenticate,
    getAll
};

async function authenticate({ username, password }) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ sub: user.id }, config.secret);
        const { password, ...userWithoutPassword } = user;
        return {
            ...userWithoutPassword,
            token
        };
    }
}

async function getAll() {
    return users.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
}
