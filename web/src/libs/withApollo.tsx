import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  from,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { GetServerSidePropsContext, NextPage } from 'next';

export type ApolloClientContext = GetServerSidePropsContext;

// HOC - High Order Component
const withApollo = (Component: NextPage) => {
  return function Provider(props: any) {
    return (
      <ApolloProvider client={getApolloClient(undefined, props.apolloState)}>
        <Component {...props} />
      </ApolloProvider>
    );
  };
};

export function getApolloClient(
  ctx?: ApolloClientContext,
  ssrCache?: NormalizedCacheObject,
) {
  const httpLink = createHttpLink({
    uri: 'http://localhost:3000/api',
    fetch,
  });

  const cache = new InMemoryCache().restore(ssrCache ?? {});

  const apolloClient = new ApolloClient({
    link: from([httpLink]),
    cache,
  });

  return apolloClient;
}

export { withApollo };
