import { NextApiRequest, NextApiResponse } from 'next';
import { Expense } from '../../../models/expenseModel';
import { Budget } from '../../../models/budgetModel';
import connectMongo from '../../../utils/connectMongo';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      if (req.method !== 'POST') {
        return res.status(405).end();
      }
      await connectMongo();
      const { expenseName, 
        expenseAmount,
        budgetLine,
        expenseDate
         } = req.body;
        
  
         const budget = await Budget.find({ budgetName: budgetLine });
         if (budget.length){
             //const {_id: id} = await Budget.find({ budgetName: budgetLine });
             let id = budget[0]._id;
            
             let newspend = parseFloat(budget[0].budgetSpend) + parseFloat(expenseAmount);
             if (newspend > budget[0].budgetAmount) return res.status(404).json({ message: "The budget amount has been exceeded" });
 
             await Budget.findByIdAndUpdate({_id: id},{budgetSpend: newspend})
         }
         else{
            return res.status(404).json({ message: "Budgetline does not exist" });
         }
      
  
      const expense = await Expense.create({
        expenseName, 
        expenseAmount,
        budgetLine,
        expenseDate
      })
  
      return res.status(200).json(expense);
      return res.status(200).json({});
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: `Something went wrong: ${error}` });
    }
  }