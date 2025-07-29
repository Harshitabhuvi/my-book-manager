import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
  name: String,
  email: String,
  content: String,
});

export default model('Message', messageSchema);
