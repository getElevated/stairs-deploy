import VerbalQuestion from "../models/VerbalModel.js";
import QuantitativeQuestion from "../models/QuantModel.js";
import LogicalQuestion from "../models/logicalModel.js";
import ProgrammingQuestion from "../models/ProgModel.js";
import ParagraphQuestion from "../models/ParaModel.js";

const companyController = {
  shuffleQuestions: (questions) => {
    return questions.sort(() => Math.random() - 0.5);
  },
  getQuestionsByField: async (req, res) => {
    try {
      const field = req.params.field;
      let selectedQuestions = [];
      const companyNameFilter = { companyName: field };

      // verbal_Ques
      const verbalQuestions = await VerbalQuestion.aggregate([
        { $match: companyNameFilter },
        { $match: { testNumber: 1 } },
        { $project: { correct_answer: 0 } },
      ]);

      // const verbalParagraphQuestions = await ParagraphQuestion.aggregate([
      //   { $match: { section: "verbal" } },
      //   { $match: companyNameFilter },
      //   { $sample: { size: 2 } },
      //   { $project: { correct_answer: 0 } },
      // ]);
      const shuffledVerbalQuestions = companyController.shuffleQuestions([
        ...verbalQuestions,
        // ...verbalParagraphQuestions,
      ]);

      // Apti_Ques
      const QuantitativeQuestions = await QuantitativeQuestion.aggregate([
        { $match: companyNameFilter },
        { $match: { testNumber: 1 } },
        { $project: { correct_answer: 0 } },
      ]);

      // const QuantParagraphQuestions = await ParagraphQuestion.aggregate([
      //   { $match: { section: "quant" } },
      //   { $match: companyNameFilter },
      //   { $sample: { size: 2 } },
      //   { $project: { correct_answer: 0 } },
      // ]);
      const shuffledQuantitativeQuestions = companyController.shuffleQuestions([
        ...QuantitativeQuestions,
        // ...QuantParagraphQuestions,
      ]);

      // Logical_Ques
      const logicalQuestions = await LogicalQuestion.aggregate([
        { $match: companyNameFilter },
        { $match: { testNumber: 1 } },
        { $project: { correct_answer: 0 } },
      ]);

      // const logicalParagraphQuestions = await ParagraphQuestion.aggregate([
      //   { $match: { section: "LR" } },
      //   { $match: companyNameFilter },
      //   { $sample: { size: 2 } },
      //   { $project: { correct_answer: 0 } },
      // ]);
      const shuffledlogicalQuestions = companyController.shuffleQuestions([
        ...logicalQuestions,
        // ...logicalParagraphQuestions,
      ]);

      // Programming_Ques
      const programmingQuestions = await ProgrammingQuestion.aggregate([
        { $match: companyNameFilter },
        { $match: { testNumber: 1 } },
        { $project: { correct_answer: 0 } },
      ]);

      // const programmingParagraphQuestions = await ParagraphQuestion.aggregate([
      //   { $match: { section: 'programming' } },
      //   {$match: companyNameFilter},
      //   { $sample: { size: 2 } },
      // { $project: { correct_answer: 0 } },
      // ]);
      const shuffledprogrammingQuestions = companyController.shuffleQuestions([
        ...programmingQuestions,
        // ...programmingParagraphQuestions,
      ]);

      selectedQuestions = [
        ...shuffledVerbalQuestions,
        ...shuffledQuantitativeQuestions,
        ...shuffledlogicalQuestions,
        ...shuffledprogrammingQuestions,
      ];
      
      res.status(200).json(selectedQuestions);
    } catch (error) {
      console.error("Error fetching questions:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

export default companyController;
