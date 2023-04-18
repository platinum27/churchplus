import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../models/userModel';
import connectMongo from '../../utils/connectMongo';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).end();
    }
    await connectMongo();
    const { email, firstName, lastName, password } = req.body;


    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(422).json({ error: 'Email taken' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
        firstName,
        lastName,
        email,
        hashedPassword
    })

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}