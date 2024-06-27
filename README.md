# HIT => Have I Tried

### [Live Site](https://tdtr.onrender.com/intro)

For this project I wanted combine my design/user experience knowledge with what I’ve learned in full stack web development using the MERN stack.

Before developing anything I started with the user experience of thinking about the class projects needs as well as the user needs. Since this was a two week sprint, a MVP (minimum viable product) in this case I went with my personal needs, which ultimately is who I solved this problem for.

### [Class Project Needs](https://www.notion.so/Class-Project-Needs-a851f568f57242d39dc8c9813c0bb5f1)

### [User Needs](https://www.notion.so/Personal-Needs-81c8584e66fa4950a53b2c702fe3cb19)

After reviewing the client and user needs I researched and designed the information architecture for this application

### [Information Architecture](https://www.figma.com/file/nNkKdpeDNBzyvU9ObTfoBP/Information-Architecture)

### [User Flow](https://www.figma.com/file/paclPNy2tqpoKXQ3CcjTsh/User-Flow?node-id=0%3A1)

Next came the design process of creating high fidelity designs of what I wanted the application to look like. My thought process behind the design was minimalism, simplicity, and ease of use

### [Designs](https://www.figma.com/file/JrtbLcHt61qyx76Ztqwcxx/Designs?node-id=4%3A11)

## The main tech this app uses:

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

## Some extra packages I used:

- [express-async-errors](https://www.npmjs.com/package/express-async-errors)
  > No need for try/catch in async controller functions, nor need to call next and pass in error for error to be sent to error handler middleware... All this is handled behind the scenes with the express-async-errors package
- [validator](https://www.npmjs.com/package/validator)
  > This package validates strings. I used it to validate emails because it's better tested and gives you more options than out of the box mongoose validation. You can use this package to validate just about anything
- [http status codes](https://www.npmjs.com/package/http-status-codes)
  > This package provides constants for status codes. It provides consistency, less bugs, and is easier to read/manage. It also gives you a description of the status code when hovering over it. As well it gives you suggestions with descriptions when choosing a status code
- [helmet](https://www.npmjs.com/package/helmet)
  > Helmet helps you secure your Express apps by setting various HTTP headers.
- [xss-clean]()
  > Node.js Connect middleware to sanitize user input coming from POST body, GET queries, and url params. help prevent cross-site scripting attacks
- [express-mongo-sanitize](https://www.npmjs.com/package/express-mongo-sanitize)
  > Express 4.x middleware which sanitizes user-supplied data to prevent MongoDB Operator Injection
- [express-rate-limit](https://www.npmjs.com/package/express-rate-limit)
  > Basic rate-limiting middleware for Express. Use to limit repeated requests to public APIs and/or endpoints such as password reset.

## what I learnt

- How to setup proper error handling, not only on backend but conducting checks on the front end to hopefully catch any user error before getting to the server
- How to research to find solutions to problems using documentation, watching videos, and finding other Github repositories for reference
- How to use a wide variety of tech frontend and backend together
- How to deploy a full stack application on render
- How to complete a full stack application solving client and user needs conducting the human centered design process, development, and CI/CD (continues integration / continues deployment)

## what problems you solved

- User authentication was the toughest challenge for me
- Setting up error handling on the server and breaking it down by bad request, not found, and unauthenticated to send back the correct error
- Creating complex mongoDB queries for search and sort
- Implementing pagination
- Really trying to understand everything in the code even if it’s something that I found through research

## what I liked about the project

- I really enjoyed getting more comfortable working with a server and database
- Implementing authentication from scratch using node, express, and mongoDB
- Of course the design and bringing the design to life by writing code
- Getting a better understanding of server errors and implanting proper error handling
- Creating a custom loader with just html and css
- creating complex queries in mongoDB with mongoose
- implementing the pagination feature from scratch

## Next steps

- Turn this into more of a social media platform where you can see and search other users collection as well as add friends, be friended, and send messages
