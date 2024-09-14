const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

const QuestionnaireSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    questions: [QuestionSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Questionnaire', QuestionnaireSchema);
