# Exemplo autenticação JWT
Exemplo simplificado de como implementar uma autenticação JWT em uma API Node.Js

Esta API de exemplo possui apenas dois endpoints:

* /users/authenticate - rota pública que aceita solicitações HTTP POST contendo o nome de usuário e a senha no corpo. Se o nome de usuário e a senha estiverem corretos, um token de autenticação JWT será retornado.

* /users - rota segura que aceita solicitações HTTP GET e retorna uma lista de todos os usuários se o cabeçalho de Autorização HTTP contiver um token JWT válido. Se não houver um token de autenticação ou o token for inválido, será retornada uma resposta 401 Não Autorizado.

