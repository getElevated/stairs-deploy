import express from "express";
import quizController from "../controllers/quizController.js";
import { authenticateToken } from "../middleware/verifyToken.js";
import companyController from "../controllers/companyController.js";
import submissionController from "../controllers/submissionController.js"
import practicePlatform from "../controllers/platformController.js";

const router = express.Router();

router.get(
  "/questions/test/:type",
  authenticateToken,
  quizController.startPracticeTest
);

router.get(
  "/questions/:field",
  authenticateToken,
  companyController.getQuestionsByField
);

router.put("/submit-answers", authenticateToken, submissionController.submitAnswers);

router.get("/fetch-scores/:userId",authenticateToken, submissionController.fetchScores);

router.get(
  "/questions/practice/:platform",
  authenticateToken,
  practicePlatform.getQuestionsFromPlatform
);

export default router;
