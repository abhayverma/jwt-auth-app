
# JWT User Authentication App

### A Express NodeJS application that supports:

- User Registration
- User Login
- Secured Homepage (requires Authorization token)
- Secured Users page (requires Authorization token)

NOTE: The user information is stored and retrived from local storage using [node-localstorage](https://www.npmjs.com/package/node-localstorage) npm package.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them.

- Ensure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org)

- Install [npm](ttps://www.npmjs.com/get-npm)

### Installing

A step by step guide that tell you how to get a development env running


Clone the repo locally, then using terminal navigate into the cloned repo and run the below command to install node packages:

```
npm i
```
This will install node packages required by the project.

Once the packages are installed, use terminal window to start local instance

```
npm start
```
This will start and run the application locally.

### Using Postman
Please import `User Authentication.postman_collection.json` file in your update Postman application.

- Use user registration to create a new user
- Use login to generate jwt token
- Copy and use the token in `Authorization` header on homepage or users endpoint to test the token validity.

## Configuration
```
config.json
```
The project contains a config file that can be used to 
- change the port number on which the app should run.
- change the jwt auth key for the app
- update the token expiry time

NOTE: app port can be set using environment variable as well, and defaults to `8080` if both (env, config) are not found.

```
response-messages.json
```
This file contains standard response messages for API responses and can be modified and maintained on this central file for use.