import { useCallback, useState } from 'react';
import { NextPageContext } from 'next';
import { getSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

import Input from '../components/Input';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

const Auth = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  //const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/'
      });

      router.push('/');
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);


  return (
    <div className="relative h-full w-full ">
    <div className="bg-black w-full h-full lg:bg-opacity-50">
      <nav className="px-12 py-5">
        {/* <img src="/images/logo.png" className="h-12" alt="Logo" /> */}
      </nav>
      <div className="flex justify-center">
        <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
          <h2 className="text-white text-4xl mb-8 font-semibold">
             Sign in
          </h2>
          <div className="flex flex-col gap-4">
           
            <Input
              id="email"
              type="email"
              label="Email address or phone number"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)} 
            />
            <Input
              type="password" 
              id="password" 
              label="Password" 
              value={password}
              onChange={(e: any) => setPassword(e.target.value)} 
            />
          </div>
          <button onClick={login} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Auth

Auth.getLayout = page => (
    <>
      {page}
      
    </>
  )