import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}


export default function Home() {
  return (
    <>
      <h1 className="text-4xl text-blue-500 font-bold underline">
      Hello world!
    </h1>
    </>
  )
}
