import mongoose from "mongoose";

const PaperScoreSchema = new mongoose.Schema({
  quant: {
    correct: Number,
    incorrect: Number,
    skipped: Number,
  },
  verbal: {
    correct: Number,
    incorrect: Number,
    skipped: Number,
  },
  logical: {
    correct: Number,
    incorrect: Number,
    skipped: Number,
  },
  programming: {
    correct: Number,
    incorrect: Number,
    skipped: Number,
  },
  totalScore: Number,
  percentage: Number,
});

const CompanyTestSchema = new mongoose.Schema(
  {
    companyName: String,
    totalNumberOfQuestions: Number,
    testScores: [PaperScoreSchema],
  },
  { _id: false }
);

const HistoricalData = new mongoose.Schema({
  totalTestAttemptedverbalscore: {
    correct: Number,
    incorrect: Number,
    skipped: Number,
  },
  totalTestAttemptedquantscore: {
    correct: Number,
    incorrect: Number,
    skipped: Number,
  },
  totalTestAttemptedlogicalscore: {
    correct: Number,
    incorrect: Number,
    skipped: Number,
  },
  totalTestAttemptedprogrammingscore: {
    correct: Number,
    incorrect: Number,
    skipped: Number,
  },
},
{
  _id: false
});

const GeneralTestSchema = new mongoose.Schema(
  {
    testScores: [PaperScoreSchema],
    historicalData: HistoricalData,
    totalTestAttemptedScore: Number,
    totalTestAttemptedByUser: Number,
  },
  { _id: false }
);

const submitAnswerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    // ref: 'User', required: true
  },
  CompanyTest: [CompanyTestSchema],
  GeneralTest: GeneralTestSchema,
});

const SubmitAnswer = mongoose.model("SubmitAnswer", submitAnswerSchema);

export default SubmitAnswer;
