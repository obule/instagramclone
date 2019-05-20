import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { AsyncStorage } from 'react-native';

import { authToken } from '../utils/constants';

let token =
  'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJpbnN0YWdyYW0iLCJleHAiOjE1NTgzNjU3OTAsImlhdCI6MTU1NTk0NjU5MCwiaXNzIjoiaW5zdGFncmFtIiwianRpIjoiOGEzY2M0MTYtMzQ1Yi00NjQ3LWI0ODEtNjg1ZTY0NTU2YTk3IiwibmJmIjoxNTU1OTQ2NTg5LCJzdWIiOiI2IiwidHlwIjoiYWNjZXNzIn0.taKACcYmLZobACBbKpfEDxRG5OQNrOxnjbxCwdZv8_6WqbgrSyHxG9t7bnJQPtcOw3TkCguMM4qJhxCnJe14fA'; // Remove later

const getToken = async () => {
  if (token != null) {
    AsyncStorage.setItem(authToken, token);
    return token;
  }

  token = await AsyncStorage.getItem(authToken);
  return token;
};

const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: 'http://192.168.2.15:4000/api/graphql',
});

const authLink = setContext(async (_, { headers }) => {
  await getToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    },
  };
});

console.log(authLink);
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});
