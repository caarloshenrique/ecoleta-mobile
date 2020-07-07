# ecoleta-mobile
:recycle: Um marketplace para conectar pessoas a empresas que coletam resíduos específicos

<p align="center">
  <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#iphone-recursos-nativos-utilizados">Recursos Nativos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#dart-api-utilizadas">API</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#clipboard-pré-requisitos">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#fire-executando-a-aplicação">Execução</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#iphone-interfaces">Interfaces</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#page_facing_up-licença">Licença</a>
</p>

## :rocket: Tecnologias utilizadas

O projeto foi feito utilizando as seguintes tecnologias:

- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/pt-br/)
- [Celebrate](https://www.npmjs.com/package/celebrate)
- [SQLite 3](https://www.sqlite.org/index.html)
- [KnexJS](http://knexjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo](https://expo.io/)
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Axios](https://github.com/axios/axios)
{...}

## :iphone: Recursos nativos utilizados

- [Location](https://docs.expo.io/versions/latest/sdk/location/)
- [MailComposer](https://docs.expo.io/versions/latest/sdk/mail-composer/)

## :dart: API utilizadas
- [IBGE API](https://servicodados.ibge.gov.br/api/docs)
- [WhatsApp API](https://www.whatsapp.com/business/)

## :clipboard: Pré-requisitos

- [NodeJS LTS (ou superior)](https://nodejs.org/en/)
- [Expo](https://expo.io/)

## :fire: Executando a aplicação

### :bug: Back-end
#### Configuração
```
$ cd ecoleta-api
$ npm install
$ npm run knex:migrate
$ npm run knex:seed
```
#### Execução
```
$ npm run dev
```


### :cyclone: Front-end
#### Configuração
```
$ cd ecoleta-app
$ npm install
```
#### Execução
```
$ expo start
```
<p>Após executar o Expo:</p>
<p>Altere o endereço de IP no arquivo `api` localizado em `ecoleta-mobile/ecoleta-app/src/services/api.ts` para o endereço de IP exibido nos dados de conexão.</p>
<br />
:warning: Caso o build apresente erros com as fontes Ubuntu e Roboto execute o comando: :warning:
```
expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto
```

## :iphone: Interfaces

### :bust_in_silhouette: Autenticação e Cadastro

<p align="center">
    <img width="300" height="600" src="/ecoleta-app/assets/signin.PNG">
    <img width="300" height="600" src="/ecoleta-app/assets/signup.PNG">
</p>

### :round_pushpin: Mapa, Detalhes, Edição e Exclusão

<p align="center">
    <img width="300" height="600" src="/ecoleta-app/assets/home.PNG">
    <img width="300" height="600" src="/ecoleta-app/assets/detail.PNG">
  <img width="300" height="600" src="/ecoleta-app/assets/edit_profile.PNG">
</p>

## :page_facing_up: Licença 
Este projeto é desenvolvido sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para saber mais detalhes.

<p align="center" style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">Feito com :blue_heart: por <strong> Carlos Henrique da Costa Silva </strong> </p>
