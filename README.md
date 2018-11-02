# GraphQL: Fullstack Application and Auth

## Introduction:

This tutorial was taken from Stephen Grider's [GraphQL with React: The Complete Developers Guide](https://www.udemy.com/graphql-with-react-course/).

This application's purpose was to build a full-stack GraphQL application from scratch with special emphasis on handeling authentication. 

## Notes:

As Stephen's tutorial was created two years ago and leveraged an older version of React, I updated the dependecies in order to make use of the current React API and ES7 features that weren't part of standard boilerplate.

In particular, I experimented with the newest version of React `16.7.0-alpha.0` which introduced a new feature set called [React Hooks](https://reactjs.org/docs/hooks-intro.html). As such, my components are written to use that new feature set.

## Setup

To test this technology locally...

1. Run `git clone https://github.com/zmess24/GraphQL-Apollo-Client.git` to clone the repo.
2. Navigate into the directory.
3. Run npm install to install the necessary dependencies.
4. Go to [mlab.com](mlab.com) and create a sandbox account to host a remote Mongo DB.
5. Create a `.env` and assign your mlab database URL to a variable called `MONGODB_URI`
6. Run `npm run dev` to boot up the server. If your mlab instance is connected correctly, you should see `Connected to MongoLab instance.`
7. Navigate to http://localhost:4000/ to start experimenting with queries.