import mongoose from 'mongoose';
import uuid from 'uuid';

const Schema = mongoose.Schema;

const survey = new Schema({
  _id: {type: String, default: uuid.v1},
  userId: {type: String, required: false, ref: 'User'},
  name: {type: String, required: true},
  description: {type: String, required: true},
  questions: [
    {
      _id: {type: String, default: uuid.v1},
      title: {type: String, required: true},
      type: {type: Number, required: true},
      answerOptions: [
        {
          _id: {type: String, default: uuid.v1},
          title: {type: String, required: false}
        }
      ],
      answers: [{
        _id: {type: String, default: uuid.v1},
        answerText: {type: String, required: true},
        required: false
      }]
    }
  ]
});

export default mongoose.model('Survey', survey);


