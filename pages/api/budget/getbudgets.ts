
import { NextApiRequest, NextApiResponse } from 'next';
import { Budget } from '../../../models/budgetModel';
import connectMongo from '../../../utils/connectMongo';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      if (req.method !== 'GET') {
        return res.status(405).end();
      }
      await connectMongo();
      const budget = await Budget.find();
 
      return res.status(200).json(budget);
    } catch (error) {
      console.log({ error })
      return res.status(500).end();
    }
  }
  