
import Credentials from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
import  { User }  from '../../../models/userModel';
import connectMongo from '../../../utils/connectMongo';
//import NextAuth, { Session, User } from 'next-auth'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    providers: [
      Credentials({
        id: 'credentials',
        name: 'Credentials',
        credentials: {
          email: {
            label: 'Email',
            type: 'text',
          },
          password: {
            label: 'Password',
            type: 'passord'
          }
        },
        async authorize(credentials) {
          if (!credentials?.email || !credentials?.password) {
            throw new Error('Email and password required');
          }
          await connectMongo();
     
        const user = await User.findOne({ email: credentials.email })
  
          if (!user || !user.hashedPassword) {
            throw new Error('Email does not exist');
          }
  
          const isCorrectPassword = await compare(credentials.password, user.hashedPassword);
  
          if (!isCorrectPassword) {
            throw new Error('Incorrect password');
          }
  
          return user;
        }
      })
    ],
    pages: {
      signIn: '/auth'
    },
    debug: process.env.NODE_ENV === 'development',
    //adapter: PrismaAdapter(prismadb),
    session: { strategy: 'jwt' },
    jwt: {
      secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET
  });

