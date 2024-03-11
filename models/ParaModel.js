import mongoose from "mongoose";

const paragraphQuestionSchema = new mongoose.Schema({
  mainParagraph: { type: String, required: true },
  subQuestions: [
    {
      questionText: { type: String, required: true },
      options: [{ type: String, required: true }],
      correct_answer: { type: String, required: true },
    },
  ],
  section: { type: String, required: true },
  companyName: { type: String },
  testNumber: { type: Number, required: true },
});

export default mongoose.model("ParagraphQuestion", paragraphQuestionSchema);
