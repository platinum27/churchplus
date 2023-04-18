import mongoose, { Schema, model, models } from 'mongoose';

const expenseSchema = new Schema({
    expenseName: { type: String, required: true },
    expenseAmount: { type: Number, required: true },
    budgetLine: { type: String, required: true },
    expenseDate: { type: Date, required: true }, 
});


export const Expense = models.Expense || model('Expense', expenseSchema);
