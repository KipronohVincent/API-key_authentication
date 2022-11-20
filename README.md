## API key authentication in Node.js

- When building an API with Node.js, there are different options available regarding authentication. Some of these include the `JSON Web Token`, `OAuth`, the `API key`, and more. 

- Using `API keys` has an advantage if you want to set a limit or track how often a particular user is using an API. By using API keys, the user doesn’t need to worry about multi-factor authentication with their username and password. Your API’s user will be able to automate data fetching on the application.

- Creating an authentication system that creates an API key whenever a user registers on the application. With the newly created API key, the user will be able to access all of the routes on the API.

- I will use Express to develop the API and Nodemon to run the API server and listen for changes in the code in real-time.