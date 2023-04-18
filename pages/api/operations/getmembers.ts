
import { NextApiRequest, NextApiResponse } from 'next';
import { Member } from '../../../models/memberModel';
import connectMongo from '../../../utils/connectMongo';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      if (req.method !== 'GET') {
        return res.status(405).end();
      }
      await connectMongo();
      const members = await Member.find();
 
      return res.status(200).json(members);
    } catch (error) {
      console.log({ error })
      return res.status(500).end();
    }
  }
  