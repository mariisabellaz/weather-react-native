## 📱 Projeto

![cover](.github/project.gif?style=flat)

## 🎯 Objetivo

Desenvolver um aplicativo que consuma a localização atual do usuário e exiba na interface o endereço atual e os dados climáticos da região.

## 📌 Features 

-   [ ] Capturar a localização atual do usuário.
-   [ ] Dados climáticos atuais;
-   [ ] Dados climáticos da semana;
-   [ ] Internacionalização;
## 💻 Tecnologias

-   [ ] React Native
-   [ ] Typescript
-   [ ] Expo Bare Workflow
-   [ ] ContextApi
-   [ ] Styled Components
-   [ ] i18next
-   [ ] Svg & Svg Transform
-   [ ] Axios
-   [ ] Expo Gradient colors
-   [ ] Animated 
-   [ ] Expo Google Fonts
-   [ ] Expo Location
-   [ ] React Navigation Stack 6x
-   [ ] Gesture Handler
-   [ ] moment
-   [ ] Flipper
-   [ ] Atomic Design
-   [ ] Jest
-   [ ] dotEnv

## ✨ Estrutura do projeto

```cl
├── __tests__ # Pasta onde tem a configuração e arquivos de testes.
├── .expo # Pasta onde tem a configuração e arquivos necessários para o funcionamento do expo
├── android # Código fonte Android
├── ios # Código fonte iOS
├── src # Código fonte TypeScript
│ 	├── @types # tipagem de png, svg, jpeg e navigation e dotenv
│ 	├── assets # imagens, icones e assets no geral
│ 	│ 	└── images
│ 	│ 	└── icons
│ 	├── components # Componentes genéricos da aplicação no padão Atomic Design
│ 	├── constants # Pasta com os arquivos contendo a key da async storage
│ 	├── hooks # Pasta com os arquivos de hooks personalizados
│ 	├── interfaces # Pasta com os arquivos de tipagem do response
│ 	├── routes # Pasta com todos os arquivos e configuração de rota
│ 	│ 	├─── Routes.tsx # Arquivo de configuração das Rotas
│ 	│ 	└─── index.tsx  # arquivo exportando as Rotas
│ 	├── screens # Pasta com os arquivos de screens
│ 	├── services # Pasta com os arquivos de configuração axios
│ 	├── theme # Pasta com os arquivos de cores e temas
│ 	├── translation # Pasta com os arquivos strings para internacionalização
│ 	├── utils # Pasta com os arquivos de validação, mascaras, formatações e outras funções/constantes utéis globais
├── App.tsx # Componente raiz da aplicação
├── README.md # Documentação básica do projeto
├── .eslintrc.js # Arquivo de configuração do ESLint
├── .prettierrc # Arquivo de configuração do Prettier
├── index.js # Arquivo de entrada para registrar a aplicaçào
├── package.json
└── yarn.lock
```
### 👇 Api de referência para busca e listagem dos dados climáticos:
​
https://openweathermap.org/api
## 🚀 Executando o projeto

Utilize o **yarn** ou o **npm install** para instalar as dependências do projeto.
Em seguida, inicie o projeto.

```cl
yarn ios ou yarn android

```
ou 

```cl
expo start

```

## 👩‍💻 Autor

-   [ ] Marília Isabella.