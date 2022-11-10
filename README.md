# TDTR => To Drunk To Remember

### I designed and developed this product and conducted the following:

- Business/client needs ⇒ my personal / class project needs

1. class project needs

- A working full-stack application, built by you, using the MERN stack: Node.js, MongoDB/Mongoose, Express and React.
- At least two models with full CRUD.
- Follow proper MVC backend structure (models, controllers, routes in separate folders)
- As many pages and components as you need
- Include sign up/login (authentication) functionality, with encrypted passwords & an authorization flow
- Use of axios and local storage for tokens
- Use of a CSS framework for styling (Bootstrap, MaterialUI, Skeleton, Tailwind, etc.)
- At least one GitHub commit per day (at least 15)
- Be deployed online and accessible to the public
- A README.md file (should include a link to your hosted working website)

#### Stretch goals:

- Manage at least some part of state with the useReducer and useContext hooks (together) or ReduxLinks to an external site. (npm install @reduxjs/toolkit react-redux)
- Pull from a third party API - either client side with AJAX or server-side with an NPM

2. Personal needs

- I consider myself a beer connoisseur. I’m not an alcoholic, nor do I drink everyday but I do enjoy having a few cold brews several times a week. I like to switch things up, try different beers and a lot of time will build my own six pack of different beer to try. The problem I alway run into is remembering which beers I’ve already tried and my thoughts about it. I’ve always wanted to build a beer log/tracker to solve this problem for me.

- A way to keep track of the beers that I’ve drank, log their info like name, type, location, description, and my personal ranking of the beer so that when shopping at a later date of while having a conversation about different beers I have a record of what I drank, the info about the beer and my thoughts about it

## Business Needs / Problem Statement\*\*

- User needs a ways to keep track of what beers they have drank, log info about the particular beer and most importantly their thoughts about it

## [Information Architecture](https://www.figma.com/file/nNkKdpeDNBzyvU9ObTfoBP/Information-Architecture)

## [User Flow](https://www.figma.com/file/paclPNy2tqpoKXQ3CcjTsh/User-Flow?node-id=0%3A1)

## Uses:

- React
- React Hooks (useState, useEffect, useReducer, createContext, useContext)
- Custom Hooks
- Node
- Express
- Mongoose
- MongoDB
- Styled Components
- React RouterV6
- recharts

## Extras

- [express-async-errors](https://www.npmjs.com/package/express-async-errors)
  > No need for try/catch in async controller functions, nor need to call next and pass in error for error to be sent to error handler middleware... All this is handled behind the scenes with the express-async-errors package
- [validator](https://www.npmjs.com/package/validator)
  > This package validates strings. I used it to validate emails because it's better tested and gives you more options than out of the box mongoose validation. You can use this package to validate just about anything
- [http status codes](https://www.npmjs.com/package/http-status-codes)
  > This package provides constants for status codes. It provides consistency, less bugs, and is easier to read/manage
