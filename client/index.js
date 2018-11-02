import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost'; // Library for interacting with GraphQL server on the backend, i.e making requests for data and storing locally.
import { InMemoryCache } from 'apollo-cache-inmemory'; //  normalized data store that supports all of Apollo Client 1.0’s features without the dependency on Redux.
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';


const link = createHttpLink({ // Responsible for creating network interface to hold cookie
	uri: '/graphql', // Listen to the graphql endpoint
	credentials: 'same-origin' // Make requests to to the same origin that the browser is currently on i.e should send cookies.
});

const cache = new InMemoryCache({
	dataIdFromObject: o => o.id
	// Use the id from each record to identify each piece of data and keep track of it.
	// Consequence: Whenever we make a query, we have to ask for the id back of every record.
});

const client = new ApolloClient({
	uri: "http://localhost:4000/graphql",
	cache,
	link
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
			<Router>
				<Layout>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/login" component={LoginForm}/>
						<Route path="/signup" component={SignupForm}/>
					</Switch>
				</Layout>
			</Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
