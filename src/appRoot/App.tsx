import React from "react";
import { BrowserRouter, BrowserRouterProps } from "react-router-dom";

import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { CachePersistor } from "apollo-cache-persist";

import Routes from "./Routes";

import clientState from "../store/rootClientState";

interface AppRoot extends BrowserRouterProps {}

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  clientState,
  onError: ({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      console.log("** graphQLErrors **", graphQLErrors);
    }
    if (networkError) {
      console.log("** networkError **", networkError);
    }
  }
});

const persistor = new CachePersistor({
  cache,
  // @ts-ignore
  storage: sessionStorage
});

const AppRoot: React.FC<AppRoot> = () => {
  const [isCacheReady, setIsCacheReady] = React.useState(false);
  React.useEffect(() => {
    persistor
      .restore()
      .then(() => {
        setIsCacheReady(true);
      })
      .catch((error: any) => {
        console.log("cache error", error);
        setIsCacheReady(false);
      });

    client.onResetStore(() => {
      return persistor.purge();
    });
  }, []);

  if (!isCacheReady) {
    return <p>Loading Cache...</p>;
  }

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default AppRoot;
