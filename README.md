## Dependência
  - Executar o projeto datasus-view-api (backend desta aplicação)

## Stack
  - Angular 6
  - Docker version 18.09.3

## Executando a aplicação
`obs: necessário instalação do Docker - https://www.docker.com/`

```bash
  $ docker build -t datasus-view-app .
  
  $ docker run -d -p 4200:80 datasus-view-app
```
## Acessando a Aplicação
  - acesse: http://localhost:4200
  - usuario: diego
  - senha: 12345

