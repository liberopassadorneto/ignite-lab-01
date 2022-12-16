import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0/client';
import { GetProductsQuery, useMeQuery } from '../../graphql/generated/graphql';
import { ssrGetProducts } from '../../graphql/generated/page';
import { withApollo } from '../../libs/withApollo';

// interface HomeProps extends GetProductsQuery {}

function Home() {
  const { user } = useUser();
  const { data: me } = useMeQuery();

  return (
    <div className="text-violet-500">
      <h1>Home</h1>
      {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
      <pre>{JSON.stringify(me, null, 2)}</pre>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async (ctx) => {
    return {
      props: {},
    };
  },
});

export default withApollo(ssrGetProducts.withPage()(Home));
