# ecoleta-mobile
:recycle: Um marketplace para conectar conectar pessoas a empresas que coletam resíduos específicos

## :rocket: Tecnologias utilizadas

O projeto foi feito utilizando as seguintes tecnologias:

- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/pt-br/)
- [Sequelize ORM](https://sequelize.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Axios](https://github.com/axios/axios)
- [Styled-Components](https://styled-components.com/)
{...}

## :rocket: Recursos nativos utilizados

- [Location](https://docs.expo.io/versions/latest/sdk/location/)
- [MailComposer](https://docs.expo.io/versions/latest/sdk/mail-composer/)

## :rocket: API utilizadas
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
```
expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto
```


## :page_facing_up: Licença 
Este projeto é desenvolvido sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para saber mais detalhes.

<p align="center" style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">Feito com :blue_heart: por <strong> Carlos Henrique da Costa Silva </strong> </p>
