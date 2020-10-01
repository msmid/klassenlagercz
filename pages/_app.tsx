import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { apolloClient } from "../src/config";
import "../styles/styles.scss";
import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
