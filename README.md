# Ignite Lab 01

- NestJS
- GraphQL
- Apache Kafka
- Next.js
- Apollo Client (GraphQL)

## Funcionalidades

### Serviço de compras (purchases)

- [Admin] Cadastro de produtos
- [Admin] Listagem de produtos

- [Auth] Listagem de compras

- [Public] Compra de um produto
- [Public] Lista produtos disponíveis p/ compra

### Serviço de sala de aula (classroom)

- [Admin] Listar matrículas
- [Admin] Listar alunos
- [Admin] Listar cursos
- [Admin] Cadastrar cursos

- [Auth] Listar cursos que tenho acesso
- [Auth] Acessar conteúdo do curso

---

[ ] Importar telas do Tailwind
[ ] URL de Logout no Auth0
[ ] Query das minhas matrículas
[ ] Query de produtos
[ ] Mutation de realizar matrícula

---

## Kafka

- Purchase -> Kafka (Banco de dados)
- Classroom <- Kafka (Compras)
- Serviço 2 <- Kafka (Compras)
- Serviço 3 <- Kafka (Compras)
- Publish/Subscribe
- Particionamento

## Apollo Federation

### Backend

- Purchases: http://localhost:3333/graphql -> https://purchases.rocketseat.com
- Classroom: http://localhost:3334/graphql -> https://classroom.rocketseat.com

### Frontend

- Web: precisa entender para qual endereço irá enviar a requisição (de Purchases ou Classroom)

### (Apollo) Gateway

- O Frontend acessa um único endereço e o Gateway é responsável em enviar a requisição para o Serviço correto

- Gateway http://localhost:3332/ -> PROXY
- Purchases: http://localhost:3333/graphql -> https://purchases.rocketseat.com
- Classroom: http://localhost:3334/graphql -> https://classroom.rocketseat.com

```
# http://localhost:3333/graphql
query {
  me {
    purchases {
      id
    }

    # http://localhost:3334/graphql
    enrollments {
      id
    }
  }
}
```
