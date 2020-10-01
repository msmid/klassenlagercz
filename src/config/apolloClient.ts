import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Settings from "../config/settings";

export default new ApolloClient({
  uri: `${Settings.API_DOMAIN}/graphql`,
  cache: new InMemoryCache(),
});
