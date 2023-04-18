import axios from 'axios';
import { useCallback, useState } from 'react';
import { NextPageContext } from 'next';
import { getSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

import Input from '../components/Input';

const  CreateUser = () => {

 
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email, 
        firstName, 
        lastName, 
        password
      });
      router.push('/userlist');
      
    } catch (error) {
        console.log(error);
    }
  }, [email, firstName, lastName, password ]);
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" className="h-12" alt="Logo" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              Create New User
            </h2>
            <div className="flex flex-col gap-4">
            <Input
                id="firstName"
                type="text"
                label="First Name"
                value={firstName}
                onChange={(e: any) => setFirstName(e.target.value)} 
            />
            <Input
                id="lastName"
                type="text"
                label="Last Name"
                value={lastName}
                onChange={(e: any) => setLastName(e.target.value)} 
            />
             
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
            <button onClick={ register} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              Create User
            </button>
            
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateUser

// export async function getServerSideProps(context: NextPageContext) {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/auth',
//         permanent: false,
//       }
//     }
//   }

//   return {
//     props: {}
//   }
// }
