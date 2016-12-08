import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const actsSchema = new Schema({
  title: { type: 'String', required: true },
  start: {
    time: { type: 'Date' },
    date: { type: 'Date' } },
  ends: {
    time: { type: 'Date' },
    date: { type: 'Date' } },
  description: { type: 'String', required: true },
  country: { type: 'String', required: true },
  stage: { type: 'String', required: true },
});

export default mongoose.model('Post', actsSchema);
