import mongoose from 'mongoose';

const { Schema } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User', // faz a referência das collections, fazendo a associação entre tabelas por essa referência.
    required: true,
  },
}, { timestamps: true });

export default mongoose.model('Task', taskSchema);
