import React, { Component } from 'react';

import appSyncConfig from "./aws-exports";
import { ApolloProvider } from "react-apollo";
import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from "aws-appsync-react";

import "./Got.css";

import AllCharacter from './Components/AllCharacter';

class Got extends Component {
  render() {
    return (
      <div className="got-container">
        <AllCharacter />
      </div>
    )
  }
}

const client = new AWSAppSyncClient({
  url: appSyncConfig.aws_appsync_graphqlEndpoint,
  region: appSyncConfig.aws_appsync_region,
  auth: {
    type: appSyncConfig.aws_appsync_authenticationType,
    apiKey: appSyncConfig.aws_appsync_apiKey,
  },
});

const WithProvider = () => (
  <ApolloProvider client={client}>
    <Rehydrated>
      <Got/>
    </Rehydrated>
  </ApolloProvider>
);

export default WithProvider;
