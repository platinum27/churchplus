import mongoose, { Schema, model, models } from 'mongoose';
//import autoIncrement from 'mongoose-auto-increment';
// Initialize the autoIncrement plugin with your Mongoose instance
//autoIncrement.initialize(mongoose.connection);

const memberSchema = new Schema({
    firstName: { type: String, required: true },
    middleName: { type: String },
    maidenName: { type: String},
    lastName: { type: String, required: true },
    gender:{ type: String, required: true },
    dob: { type: Date },
    maritalStatus: { type: String },
    marriageDate: { type: Date },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String},
    memberStatus: { type: String, required: true },
    dept: { type: String},
    cellGroup: { type: String },
    regNumber: { type: Number},
});

// Add the autoincrementing field using the plugin
//memberSchema.plugin(autoIncrement.plugin, { model: 'Member', field: 'regNumber' });

export const Member = models.Member || model('Member', memberSchema);

//export default Member;