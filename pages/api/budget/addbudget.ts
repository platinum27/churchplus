import { NextApiRequest, NextApiResponse } from 'next';
import { Budget } from '../../../models/budgetModel';
import connectMongo from '../../../utils/connectMongo';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).end();
    }
    await connectMongo();
    const { budgetName, 
        budgetAmount
       } = req.body;


     const budgetExists = await Budget.find({ budgetName:budgetName })
    //  User.find({}, (err, users) => {
    //   // users is an array which may be empty for no results
    //   if (err) {
    //     // handle error
    //     return;
    //   }
    //   if (users.length) {
    //     // there are user(s)
    //   } else {
    //     // there are no users
    //   }
    // });
    
    if (budgetExists.length) {
      return res.status(422).json({ error: 'Budget Already Exists' });
    }

    

    const budget = await Budget.create({
        budgetName, 
        budgetAmount
    })

    return res.status(200).json(budget);
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}