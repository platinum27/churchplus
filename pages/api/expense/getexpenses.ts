import { NextApiRequest, NextApiResponse } from 'next';
import { Expense } from '../../../models/expenseModel';
import connectMongo from '../../../utils/connectMongo';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      if (req.method !== 'GET') {
        return res.status(405).end();
      }
      await connectMongo();
      const expense = await Expense.find();
 
      return res.status(200).json(expense);
    } catch (error) {
      console.log({ error })
      return res.status(500).end();
    }
  }
  