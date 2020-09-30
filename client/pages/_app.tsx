import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import Settings from "../src/config/settings";
import "../styles/styles.scss";

import { AppProps } from "next/app";

const client = new ApolloClient({
  uri: `${Settings.API_DOMAIN}/graphql`,
  cache: new InMemoryCache(),
});

function App({ Component, pageProps }: AppProps) {
  console.log(Settings.API_DOMAIN);

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
