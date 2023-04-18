import mongoose, { Schema, model, models } from 'mongoose';

const eventSchema = new Schema({
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    eventName: { type: String, required: true}

});


export const Event = models.Event || model('Event', eventSchema);
