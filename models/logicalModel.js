import mongoose from "mongoose";

const LogicalQuestionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },

  options: [{ type: String, required: true }],

  correct_answer: { type: String, required: true },

  section: { type: String, required: true },

  companyName: { type: String },

  testNumber: { type: Number, required: true },
});

const LogicalQuestion = mongoose.model(
  "LogicalQuestion",
  LogicalQuestionSchema
);

export default LogicalQuestion;
