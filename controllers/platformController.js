import VerbalQuestion from "../models/VerbalModel.js";
import QuantitativeQuestion from "../models/QuantModel.js";
import LogicalQuestion from "../models/logicalModel.js";
import ProgrammingQuestion from "../models/ProgModel.js";
import ParagraphQuestion from "../models/ParaModel.js";

const practicePlatform = {
  shuffleQuestions: (questions) => {
    return questions.sort(() => Math.random() - 0.5);
  },
  getQuestionsFromPlatform: async (req, res) => {
    try {
      const field = req.params.platform;
      let selectedQuestions = [];
      const platformNameFilter = { section: field };
    //   console.log(field);

      const verbalQuestions = await VerbalQuestion.aggregate([
        { $match: platformNameFilter },
        {$sample: {size: 15}},
        { $project: { correct_answer: 0 } },
      ]);

      const shuffledVerbalQuestions = practicePlatform.shuffleQuestions([
        ...verbalQuestions,
      ]);

      const QuantitativeQuestions = await QuantitativeQuestion.aggregate([
        { $match: platformNameFilter },
        {$sample: {size: 15}},
        { $project: { correct_answer: 0 } },
      ]);

      const shuffledQuantitativeQuestions = practicePlatform.shuffleQuestions([
        ...QuantitativeQuestions,
      ]);

      const logicalQuestions = await LogicalQuestion.aggregate([
        { $match: platformNameFilter },
        {$sample: {size: 15}},
        { $project: { correct_answer: 0 } },
      ]);

      const shuffledLogicalQuestions = practicePlatform.shuffleQuestions([
        ...logicalQuestions,
      ]);

      //program
      const programmingQuestions = await ProgrammingQuestion.aggregate([
        { $match: platformNameFilter },
        { $sample: { size: 15 } },
        { $project: { correct_answer: 0 } },
      ]);
      const shuffledprogrammingQuestions = practicePlatform.shuffleQuestions([
        ...programmingQuestions,
      ]);


      selectedQuestions = [
        ...shuffledVerbalQuestions,
        ...shuffledQuantitativeQuestions,
        ...shuffledLogicalQuestions,
        ...shuffledprogrammingQuestions,
      ];
    //   console.log("length:-",selectedQuestions.length)
      res.status(200).json(selectedQuestions);
    } catch (error) {
      console.error("Error fetching questions:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

export default practicePlatform;