import mongoose, { Schema, model, models } from 'mongoose';

const budgetSchema = new Schema({
    budgetName: { type: String, required: true },
    budgetAmount: { type: Number, required: true },
    budgetSpend: { type: Number, default:0 },
    itemStatus: {type: String, default: "Open"},

});


export const Budget = models.Budget || model('Budget', budgetSchema);
