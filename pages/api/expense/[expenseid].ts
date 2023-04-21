import { NextApiRequest, NextApiResponse } from 'next';
import { Expense } from '../../../models/expenseModel';
import { Budget } from '../../../models/budgetModel';
import connectMongo from '../../../utils/connectMongo';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const  {expenseid }  = req.query;
    if (typeof expenseid !== 'string') {
        throw new Error('Invalid Id');
    }

    if (!expenseid) {
        throw new Error('Missing Id');
    }
   
    switch (req.method) {
        case 'GET':
            return getExpenseById(expenseid );
        case 'PUT':
            return updateExpense(expenseid);
        case 'DELETE':
            return deleteExpense(expenseid);
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
    async function getExpenseById(id:string){
        try {
        //console.log(id);
        await connectMongo();
        const expense = await Expense.findById({_id:id});
        return res.status(200).json(expense);
       }
       catch (error) {
        console.log(error);
        return res.status(500).end();
      }
    }

    async function updateExpense(id:string){
        try {
            await connectMongo();
            const { expenseAmount,
                budgetLine
                 } = req.body;

           
            const budget = await Budget.find({ budgetName: budgetLine });
            let budid = budget[0]._id;


            const oldexpense = await Expense.findById({_id:id});
            let oldAmount = oldexpense.expenseAmount;
            let diffAmount = expenseAmount - oldAmount;
            //console.log(budget[0].budgetAmount);
            
            let newspend = parseFloat(budget[0].budgetSpend) + diffAmount;
            if (newspend > budget[0].budgetAmount) return res.status(404).json({ message: "The budget amount has been exceeded" });
 
            await Budget.findByIdAndUpdate({_id: budid},{budgetSpend: newspend})

            // await Expense.findOneAndUpdate({_id:id}, 
            //     {
            //         expenseName, 
            //         expenseAmount,
            //         budgetLine,
            //         expenseDate
            //       });
            await Expense.findOneAndUpdate({_id:id}, req.body);
            return res.status(200).json({});

           }
           catch (error) {
            console.log(error);
            return res.status(500).end();
          }

    }

    async function deleteExpense(id:string){
        try {
            await connectMongo();

            await Expense.deleteOne({_id:id});
            return res.status(200).json({});

           }
           catch (error) {
            console.log(error);
            return res.status(500).end();
          }
    }

}
