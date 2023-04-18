import { NextApiRequest, NextApiResponse } from 'next';
import Test from '../../../models/testModel';
import connectMongo from '../../../utils/connectMongo';

export default async function addTest(req: NextApiRequest, res: NextApiResponse) {
    try {
      console.log('CONNECTING TO MONGO');
      await connectMongo();
      console.log('CONNECTED TO MONGO');
  
      console.log('CREATING DOCUMENT');
      const test = await Test.create(req.body);
      console.log('CREATED DOCUMENT');
  
      res.json({ test });
    } catch (error) {
      console.log(error);
      res.json({ error });
    }
  }
