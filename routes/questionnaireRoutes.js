const express = require('express');
const router = express.Router();
const questionnaireController = require('../controllers/questionnaireController');
const authenticateToken = require('../middlewares/authMiddleware');

router.post(
  '/questionnaires',
  authenticateToken,
  questionnaireController.createQuestionnaire
);
router.get(
  '/questionnaires/user/:userId',
  authenticateToken,
  questionnaireController.getQuestionnaireByUserId
);
router.put(
  '/questionnaires/:id',
  authenticateToken,
  questionnaireController.updateQuestionnaire
);
router.delete(
  '/questionnaires/:id',
  authenticateToken,
  questionnaireController.deleteQuestionnaire
);

module.exports = router;
