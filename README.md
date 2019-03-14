# Mongo DB Schema
The purpose of this repository is to demonstrate some basic techniques to work with embeded object in MongoDB and Node.js.

## Background

We have two collections in MongoBD: `Machine` and `MachineType`. `Machine` contains redundant copy of the `MachineType`, without timestamps fields.

## Aim

1. Create the MongoDB Schema for `Machine` and `MachineType` (all values are String or DateTime).
2. When we update a `MachineType`, we must cascade the operation on all of the other `Machine` collections.
3. Implement the `machinetype/update/:id`.
4. Cover the route with tests.

## Installation

To install the project you need to:

1. Install Node.js v11.11.0  - recommend installation with [nvm](https://github.com/creationix/nvm).
2. Install [MongoDB](https://docs.mongodb.com/manual/installation) 4.0.6
3. Checkout the project:
```
  $ git clone git@github.com:go8soft/mongo_db_schema.git
```
4. Install the modules:
```
  $ npm install
```
This will create `node_modules`.

5. Run the server:
```
  mongo_db_schema$ node index
```
The output should be:
```
Listening on port 3001...
```

## Configuration

You can change the port or db settings from the [config](https://github.com/go8soft/mongo_db_schema/blob/master/config.js) file.

## Seeds

After the installation we can put some data into the database the following way:
```
  mongo_db_schema$ node seeds/seeds.js
```
We will use the data for the tests.

## Curl tests

We can test the tunning server with curl:

```
curl -X PUT -H "Content-Type: application/json" -d '{"name":"some-name"}' http://localhost:3001/machinetype/update/5c8921393dc4a83acfb69b8f
```

## Npm tests

API tests are with `supertest` with `mocha`. To run them:
```
mongo_db_schema$ npm test
```
