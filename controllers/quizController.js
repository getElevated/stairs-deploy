import VerbalQuestion from "../models/VerbalModel.js";
import QuantitativeQuestion from "../models/QuantModel.js";
import LogicalQuestion from "../models/logicalModel.js";
import ProgrammingQuestion from "../models/ProgModel.js";
import ParagraphQuestion from "../models/ParaModel.js";

const quizController = {
  shuffleQuestions: (questions) => {
    return questions.sort(() => Math.random() - 0.5);
  },

  startPracticeTest: async (req, res) => {
    try {
      let selectedQuestions = [];
      const type = req.params.type;
      let matchStage = {};
      let sampleSize = 10; // Default sample size

      if (type === "FreeMock") {
        matchStage = { companyName: type };
        sampleSize = 5;
      }

      // verbal_Ques
      const verbalQuestions = await VerbalQuestion.aggregate([
        { $match: matchStage},
        { $project: { correct_answer: 0 } },
        { $sample: { size: sampleSize } },
      ]);

      // const verbalParagraphQuestions = await ParagraphQuestion.aggregate([
      //   { $match: { section: "verbal" } },
      //   { $sample: { size: 5 } },
      //   { $project: { correct_answer: 0 } },
      // ]);
      const shuffledVerbalQuestions = quizController.shuffleQuestions([
        ...verbalQuestions,
        // ...verbalParagraphQuestions,
      ]);

      // Apti_Ques
      const QuantitativeQuestions = await QuantitativeQuestion.aggregate([
        { $match: matchStage},
        { $project: { correct_answer: 0 } },
        { $sample: { size: sampleSize } },
      ]);

      // const QuantParagraphQuestions = await ParagraphQuestion.aggregate([
      //   { $match: { section: "quant" } },
      //   { $sample: { size: 5 } },
      //   { $project: { correct_answer: 0 } },
      // ]);
      const shuffledQuantitativeQuestions = quizController.shuffleQuestions([
        ...QuantitativeQuestions,
        // ...QuantParagraphQuestions,
      ]);

      // Logical_Ques
      const logicalQuestions = await LogicalQuestion.aggregate([
        { $match: matchStage},
        { $project: { correct_answer: 0 } },
        { $sample: { size: sampleSize } },
      ]);

      // const logicalParagraphQuestions = await ParagraphQuestion.aggregate([
      //   { $match: { section: "LR" } },
      //   { $sample: { size: 5 } },
      //   { $project: { correct_answer: 0 } },
      // ]);
      const shuffledlogicalQuestions = quizController.shuffleQuestions([
        ...logicalQuestions,
        // ...logicalParagraphQuestions,
      ]);

      // Programming_Ques
      const programmingQuestions = await ProgrammingQuestion.aggregate([
        { $match: matchStage},
        { $project: { correct_answer: 0 } },
        { $sample: { size: sampleSize } },
      ]);

      // const programmingParagraphQuestions = await ParagraphQuestion.aggregate([
      //   { $match: { section: 'programming' } },
      //   { $sample: { size: 5 } },
      //   { $project: { correct_answer: 0 } },
      // ]);
      const shuffledprogrammingQuestions = quizController.shuffleQuestions([
        ...programmingQuestions,
        // ...programmingParagraphQuestions,
      ]);

      selectedQuestions = [
        ...shuffledVerbalQuestions,
        ...shuffledQuantitativeQuestions,
        ...shuffledlogicalQuestions,
        ...shuffledprogrammingQuestions,
      ];
      // console.log(selectedQuestions.length,"selectedQuestion dikhao");
      res.status(200).json(selectedQuestions);
    } catch (error) {
      console.error("Error fetching questions:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

export default quizController;
