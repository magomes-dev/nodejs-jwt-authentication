![logo_prj](https://cdn-media-1.freecodecamp.org/images/1*0ABaK4SrXGUnXgmXqMkZtA.png)

Exemplo de como implementar autenticação JWT em uma API Node.Js, persistindo usuarios em banco(MongoDb).

| Method| Routes                | Description                                           |
|-------|-----------------------|-------------------------------------------------------|
|POST   | /users/authenticate   | Rota pública, autentica o usuário, retorna token jwt  |
|POST   | /users/register       | Rota pública. registra um novo usuário.               |
|GET    | users                 | Rota privada, retorna todos os usuários cadastrados   |
|GET    | /users/current        | Rota privada, retorna o usuário dono do jwt do request|
|GET    | /users/:id            | Rota privada, retorna um usuário específico           |
|PUT    | /users/:id            | Rota privada, altera um usuário específico            |
|DELETE | /users/:id            | Rota privada, deleta um usuário específico            |

Obs: O intuito deste projeto é apenas colocar em prática conteúdos que estou estudando sobre Node.Js
