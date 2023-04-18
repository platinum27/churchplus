import mongoose, { Schema, model, models } from 'mongoose';

const attendanceSchema = new Schema({
    attDate: { type: String, required: true },
    eventType: { type: String, required: true },
    male: { type: Number },
    female: { type: Number }

});


export const Attendance = models.Attendance || model('Attendance', attendanceSchema);
