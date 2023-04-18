import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
    firstName: String,
    lastName: String,
  hashedPassword: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

export const User = models.User || model('User', userSchema);

//export default User;