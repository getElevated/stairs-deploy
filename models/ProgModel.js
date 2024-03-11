import mongoose from "mongoose";

const ProgramQuestionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [{ type: String, required: true }],
  correct_answer: { type: String, required: true },
  section: { type: String, required: true },
  companyName: { type: String },
  testNumber: { type: Number, required: true },
});

const programQuestion = mongoose.model(
  "ProgramQuestion",
  ProgramQuestionSchema
);

export default programQuestion;
