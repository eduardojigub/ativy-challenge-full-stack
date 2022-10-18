# :computer: Ativy Full Stack Challenge

Desenvolvimento de aplicação Full Stack, construindo uma API com NodeJs para gerenciar uma To-Do List. 

## :pushpin: Telas do projeto:
<h3 align="center">Fluxo de Registro</h3>
<p align="center">
  <img src="https://user-images.githubusercontent.com/47367373/196340386-11e9e6b7-7b4e-4d81-b715-4e72cdbc55fc.gif" alt="Fluxo Registro"/>
</p>
<h3 align="center">Fluxo Login</h3>
<p align="center">
  <img src="https://user-images.githubusercontent.com/47367373/196340521-0bae2a94-f8e8-425c-9d00-4ad1a3dec426.gif" alt="Fluxo Login"/>
</p>
<h3 align="center">Fluxo Add Task</h3>
<p align="center">
  <img src="https://user-images.githubusercontent.com/47367373/196340612-de3e299b-009a-41a7-a136-cf2c16bb9d49.gif" alt="Fluxo Add Task"/>
</p>
<h3 align="center">Fluxo Edição e Logout</h3>
<p align="center">
  <img src="https://user-images.githubusercontent.com/47367373/196340686-2cfa4e91-9588-4d0f-8a95-2239c0f1ea84.gif" alt="Fluxo Edição e Logout"/>
</p>
<h3 align="center">Fluxo de Logins Diferentes</h3>
<p align="center">
  <img src="https://user-images.githubusercontent.com/47367373/196340766-e1885daf-e841-4681-8d71-13101ccc8493.gif"
 alt="Fluxo Logins"/>
</p>

## :pushpin: Back-end

### Habilidades

Utilização do serviço Mongo DB Atlas para utilização de banco de dados cloud. 

Realizado o CRUD da aplicação com Node+React+AtlasDB.

Libs utilizadas no módulo de Back end:

- express
- nodemon
- mongoose
- morgan
- cookieParser
- dotenv
- cors
- jsonwebtoken

Desenvolvido com conceitos de arquitetura de software(models e controllers) e Utilização do conceito de Arquitetura REST.

### O que foi desenvolvido

Nesse projeto foi desenvolvido uma API de um CRUD (Create, Read, Update e Delete) de uma to-do-list com endpoints que irão permitir a interação do usuário com a interface de navegação, persistindo os dados em um banco de dados. 

Criação dos devidos relacionamentos para que cada usuário tenha sua task salva no banco de dados. 

Implementação do CRUD das rotas de auth/users/tasks, de acordo com as regras de negócio.

O JWT é guardado através de cookie logo após o login, e algumas rotas são privadas e tem a visualização permitida apenas quando se está logado e com o token. 


### :warning: Documentação da API

[Acesse a documentação aqui]('')

## :pushpin: Front-end

### Habilidades

Manipulação do Reactjs utilizando componentes funcionais com hooks, custom hooks . 

Criação de Hooks customizados para agilizar no desenvolvimento.

Libs utilizadas:
- SASS
- React Hot Toast (para avisos de erros e sucessos)
- react router dom


### O que foi desenvolvido

Desenvolvimento da interface de uma aplicação todo-list que permite a inserção, atualização, leitura e deleção de tarefas.
A aplicação também possui rotas privadas e as páginas de edição de perfil e de tarefa. 

## :pushpin: Como acessar o projeto

1. Clone e rode o projeto localmente:
    * `git clone git@github.com:eduardojigub/ativy-challenge-full-stack.git`
    * Acesse a pasta frontend e dê o comando `npm install`
    * Acesse a pasta backend e dê o comando `npm install`
    * Agora você precisa configurar as variaveis de ambiente, conforme arquivo `.env.example`, obs: o arquivo deve estar na pasta backend. 
    * Rode as duas aplicações com o comando "npm run dev" em suas respectivas pastas.
    * Acesse o localhost e utilize a aplicação como desejar.


## :thought_balloon: Autores

- GitHub - [Eduardo Sousa](https://github.com/eduardojigub)



