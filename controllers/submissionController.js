import SubmitAnswer from "../models/answerModel.js";
import QuantitativeQuestion from "../models/QuantModel.js";
import LogicalQuestion from "../models/logicalModel.js";
import programQuestion from "../models/ProgModel.js";
import VerbalModel from "../models/VerbalModel.js";

const submitAnswers = async (req, res) => {
  try {
    const { userId, Question, companyName, answers } = req.body;

    let totalNumberOfQuestions = 0;
    // console.log(Questions);
    Question.map(e => totalNumberOfQuestions += e)
    // Check if a SubmitAnswer document with the given userId already exists
    let submission = await SubmitAnswer.findOne({ userId });

    if (!submission) {
      // If the document doesn't exist, create a new one
      submission = new SubmitAnswer({
        userId,
        CompanyTest: [],
        GeneralTest: {
          testScores: [],
          historicalData: {
            totalTestAttemptedverbalscore: { correct: 0, incorrect: 0, skipped: 0 },
            totalTestAttemptedquantscore: { correct: 0, incorrect: 0, skipped: 0 },
            totalTestAttemptedlogicalscore: { correct: 0, incorrect: 0, skipped: 0 },
            totalTestAttemptedprogrammingscore: { correct: 0, incorrect: 0, skipped: 0 },
          },
          totalTestAttemptedScore: 0,
          totalTestAttemptedByUser: 0,
        },
      });
    } else if (!submission.GeneralTest.historicalData) {
      // If the historicalData object is undefined, initialize it
      submission.GeneralTest.historicalData = {
        totalTestAttemptedverbalscore: { correct: 0, incorrect: 0, skipped: 0 },
        totalTestAttemptedquantscore: { correct: 0, incorrect: 0, skipped: 0 },
        totalTestAttemptedlogicalscore: { correct: 0, incorrect: 0, skipped: 0 },
        totalTestAttemptedprogrammingscore: { correct: 0, incorrect: 0, skipped: 0 },
      };
    }
    

    let verbalScore = { correct: 0, incorrect: 0, skipped: 0 };
    let quantScore = { correct: 0, incorrect: 0, skipped: 0 };
    let logicalScore = { correct: 0, incorrect: 0, skipped: 0 };
    let programmingScore = { correct: 0, incorrect: 0, skipped: 0 };

    // Iterate over answers to extract scores
    for (const answer of answers) {
      const section = answer.section;
      const questions = answer.questions;

      for (const question of questions) {
        const { qId, selOpt } = question;
        let ques;

        switch (section.toLowerCase()) {
          case "verbal":
            ques = await VerbalModel.findById(qId);
            if (ques.correct_answer === selOpt) {
              verbalScore.correct++;
            } else {
              verbalScore.incorrect++;
            }
            break;
          case "quant":
            ques = await QuantitativeQuestion.findById(qId);
            if (ques.correct_answer === selOpt) {
              quantScore.correct++;
            } else {
              quantScore.incorrect++;
            }
            break;
          case "logical":
            ques = await LogicalQuestion.findById(qId);
            if (ques.correct_answer === selOpt) {
              logicalScore.correct++;
            } else {
              logicalScore.incorrect++;
            }
            break;
          case "programming":
            ques = await programQuestion.findById(qId);
            if (ques.correct_answer === selOpt) {
              programmingScore.correct++;
            } else {
              programmingScore.incorrect++;
            }
            break;
          default:
            throw new Error(`Unsupported section: ${section}`);
        }
      }
    }

    verbalScore.skipped = Question[0] - (verbalScore.correct + verbalScore.incorrect);
    quantScore.skipped = Question[1] - (quantScore.correct + quantScore.incorrect);
    logicalScore.skipped = Question[2] - (logicalScore.correct + logicalScore.incorrect);
    programmingScore.skipped = Question[3] - (programmingScore.correct + programmingScore.incorrect);

    // Add scores to the submission based on the company name
    const scores = {
      quant: quantScore,
      verbal: verbalScore,
      logical: logicalScore,
      programming: programmingScore,
      totalScore:
        quantScore.correct +
        verbalScore.correct +
        logicalScore.correct +
        programmingScore.correct,
      percentage:
        ((quantScore.correct +
          verbalScore.correct +
          logicalScore.correct +
          programmingScore.correct) /
          totalNumberOfQuestions) *
        100,
    };

    if (companyName === "general") {
      // Add scores to General Test
      submission.GeneralTest.testScores.push(scores);
      submission.GeneralTest.totalTestAttemptedScore += scores.totalScore;
      submission.GeneralTest.totalTestAttemptedByUser++;

      // Update historical data
      // Update historical data for General Test
      submission.GeneralTest.historicalData.totalTestAttemptedverbalscore.correct +=
        verbalScore.correct;
      submission.GeneralTest.historicalData.totalTestAttemptedverbalscore.incorrect +=
        verbalScore.incorrect;
      submission.GeneralTest.historicalData.totalTestAttemptedverbalscore.skipped +=
        verbalScore.skipped;
      submission.GeneralTest.historicalData.totalTestAttemptedquantscore.correct +=
        quantScore.correct;
      submission.GeneralTest.historicalData.totalTestAttemptedquantscore.incorrect +=
        quantScore.incorrect;
      submission.GeneralTest.historicalData.totalTestAttemptedquantscore.skipped +=
        quantScore.skipped;
      submission.GeneralTest.historicalData.totalTestAttemptedlogicalscore.correct +=
        logicalScore.correct;
      submission.GeneralTest.historicalData.totalTestAttemptedlogicalscore.incorrect +=
        logicalScore.incorrect;
      submission.GeneralTest.historicalData.totalTestAttemptedlogicalscore.skipped +=
        logicalScore.skipped;
      submission.GeneralTest.historicalData.totalTestAttemptedprogrammingscore.correct +=
        programmingScore.correct;
      submission.GeneralTest.historicalData.totalTestAttemptedprogrammingscore.incorrect +=
        programmingScore.incorrect;
      submission.GeneralTest.historicalData.totalTestAttemptedprogrammingscore.skipped +=
        programmingScore.skipped;
    } else {
      // Check if the company test already exists for the given company name
      let companyTestIndex = submission.CompanyTest.findIndex(
        (test) => test.companyName === companyName
      );

      if (companyTestIndex === -1) {
        // If the company test doesn't exist, create a new one
        submission.CompanyTest.push({
          companyName,
          totalNumberOfQuestions,
          testScores: [scores],
        });
      } else {
        // If the company test already exists, add scores to the existing one
        submission.CompanyTest[companyTestIndex].testScores.push(scores);
      }
    }

    // Save the submission to the database
    await submission.save();

    res.status(201).json({ message: "Answers submitted successfully" });
  } catch (error) {
    console.error("Error submitting answers:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const fetchScores = async (req, res) => {
  const userId = req.params.userId; // Replace with the actual userId you want to query

  try {
    const submitAnswer = await SubmitAnswer.findOne({ userId });

    if (!submitAnswer) {
      // Handle case where user document is not found
      return null;
    }

    // Sort testScores arrays in descending order based on _id (assumed ObjectId)
    const latestCompanyTestScore = submitAnswer.CompanyTest.map(
      (test) => test.testScores
    )
      .flat()
      .sort((a, b) => b._id.getTimestamp() - a._id.getTimestamp())[0];

    const latestGeneralTestScore = submitAnswer.GeneralTest.testScores.sort(
      (a, b) => b._id.getTimestamp() - a._id.getTimestamp()
    )[0];

    let latestTestScore;
    let testType;

    // Determine which test type has the latest score
    if (
      latestCompanyTestScore &&
      (!latestGeneralTestScore ||
        latestCompanyTestScore._id.getTimestamp() >
          latestGeneralTestScore._id.getTimestamp())
    ) {
      latestTestScore = latestCompanyTestScore;
      testType = "CompanyTest";
    } else {
      latestTestScore = latestGeneralTestScore;
      testType = "GeneralTest";
    }

    // Now you have the latest score and its type
    // console.log(`Latest Test Score (${testType}):`, latestCompanyTestScore);
    res.status(200).json({ latestTestScore });
  } catch (error) {
    console.error("Error occurred while finding submit answer:", error);
  }
};

export default{
  submitAnswers,
  fetchScores,
};
