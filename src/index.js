import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.scss";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {ApolloClient,HttpLink,InMemoryCache,ApolloProvider,split} from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';

const httpLink = new HttpLink({
  uri:'http://localhost:4000/graphql'
})

const wsLink = new GraphQLWsLink(createClient({
  url:'ws://localhost:4000/graphql',
  
}))

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  cache : new InMemoryCache(),
  link : splitLink
})

ReactDOM.render(
  
  <BrowserRouter>
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>
</BrowserRouter>,
  document.getElementById('root')
);


