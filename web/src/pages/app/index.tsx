import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Home() {
  const { user } = useUser();

  return (
    <div>
      <h1>Home</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();

// export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
//   const session = await getSession(req, res);

//   console.log(session?.accessToken);

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/api/auth/login',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// };
