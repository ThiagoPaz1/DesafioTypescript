# Seja bem vindo :smile:

# Instruções para instalação do projeto:

## Backend:
### 1 - No seu terminal, após clonar o repositório entre na pasta /challenge/backend/api, e digite o comando killall node, para garantir que não existe nenhum processo que esta utilizando a porta do servidor.
### 2 - Ainda na pasta /api, digite o comando yarn, para instalar as dependências do projeto.
### 3 - Ainda na pasta /api, digite o comando yarn docker:up para subir o container responsável pelo banco de dados.
### 4 - Ainda na pasta /api, digite o comando yarn migrations:run para criar as tabelas do banco de dados.
### 5 - Ainda na pasta /api, digite o comando yarn seeders:run, para popular o banco de dados.
### 6 - Último passo, digite o comando yarn start:dev, para iniciar a api.

## Frontend:
### 1 - Verifique se seu node está na versão de no mínimo v16.16.0 ou maior.
### 2 - No seu terminal, entre na pasta /challenge/frontend, e digite o comando npm install, para instalar as dependências do projeto.
### 3 - Antes de iniciar o projeto verifique se a api foi iniciada, pois vai ser a partir dela que o app irá consumir os dados da lista de produtos, se estiver com dúvida de uma olhada na sessão backend acima.
### 4 - Último passo, digite o comando npm run dev, para iniciar o app.

## Pronto! Agora a aplicação esta completa e pronta para uso 🚀🚀🚀

## Tecnologias utilizadas:
### Backend:
 <ol>
    <li>Nest</li>
    <li>Docker</li>
    <li>PostgreSQL</li>
    <li>Typescript</li>
    <li>Prisma</li>
    <li>Node</li>
</ol>

### Frontend:
 <ol>
    <li>Next</li>
    <li>Typescript</li>
    <li>Styled components</li>
    <li>Typescript</li>
    <li>React loading skeleton</li>
</ol>
