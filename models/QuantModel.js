import mongoose from "mongoose";

const QuantQuestionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },

  options: [{ type: String, required: true }],

  correct_answer: { type: String, required: true },

  section: { type: String, required: true },

  companyName: { type: String },

  testNumber: { type: Number, required: true },
});

const QuantQuestion = mongoose.model("QuantQuestion", QuantQuestionSchema);

export default QuantQuestion;
