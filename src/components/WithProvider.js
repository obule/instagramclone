import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';

import { client } from '../graphql';

export default function withProvider(WrappedComponent) {
  return class Cp extends Component {
    render() {
      return (
        <ApolloProvider client={client}>
          <WrappedComponent {...this.props} />
        </ApolloProvider>
      );
    }
  };
}
