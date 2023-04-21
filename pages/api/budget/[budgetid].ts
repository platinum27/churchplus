import { NextApiRequest, NextApiResponse } from 'next';
import { Budget } from '../../../models/budgetModel';
import connectMongo from '../../../utils/connectMongo';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const  { budgetid }  = req.query;
    if (typeof budgetid !== 'string') {
        throw new Error('Invalid Id');
    }

    if (!budgetid) {
        throw new Error('Missing Id');
    }
   
    switch (req.method) {
        case 'GET':
            return getBudgetById(budgetid );
        case 'PUT':
            return updateBudget(budgetid);
        case 'DELETE':
            return deleteBudget(budgetid);
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
    async function getBudgetById(id:string){
        try {
        console.log(id);
        await connectMongo();
        const budget = await Budget.findById({_id:id});
        return res.status(200).json(budget);
       }
       catch (error) {
        console.log(error);
        return res.status(500).end();
      }
    }

    async function updateBudget(id:string){
        try {
            await connectMongo();
            await Budget.findOneAndUpdate({_id:id}, req.body);
            return res.status(200).json({});

           }
           catch (error) {
            console.log(error);
            return res.status(500).end();
          }

    }

    async function deleteBudget(id:string){
        try {
            await connectMongo();

            await Budget.deleteOne({_id:id});
            return res.status(200).json({});

           }
           catch (error) {
            console.log(error);
            return res.status(500).end();
          }
    }

}
