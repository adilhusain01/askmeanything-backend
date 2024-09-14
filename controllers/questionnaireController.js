const Questionnaire = require('../models/Questionnaire');

// Create a new questionnaire
exports.createQuestionnaire = async (req, res) => {
  try {
    const { user, questions } = req.body;

    // Ensure that `user` and `questions` are provided and valid
    if (!user || !Array.isArray(questions)) {
      return res.status(400).json({ error: 'Invalid data' });
    }

    console.log(questions);

    const questionnaire = new Questionnaire({ user, questions });
    await questionnaire.save();
    res.status(201).json(questionnaire);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a questionnaire by user ID
exports.getQuestionnaireByUserId = async (req, res) => {
  try {
    const questionnaire = await Questionnaire.findOne({
      user: req.params.userId,
    });
    if (!questionnaire) {
      return res.status(404).json({ message: 'Questionnaire not found' });
    }
    res.status(200).json(questionnaire);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a questionnaire by ID
exports.updateQuestionnaire = async (req, res) => {
  try {
    const { user, questions } = req.body;

    // Ensure that `questions` is an array if provided
    if (questions && !Array.isArray(questions)) {
      return res.status(400).json({ error: 'Invalid questions data' });
    }

    const questionnaire = await Questionnaire.findByIdAndUpdate(
      req.params.id,
      { user, questions },
      { new: true }
    );
    if (!questionnaire) {
      return res.status(404).json({ message: 'Questionnaire not found' });
    }
    res.status(200).json(questionnaire);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a questionnaire by ID
exports.deleteQuestionnaire = async (req, res) => {
  try {
    const questionnaire = await Questionnaire.findByIdAndDelete(req.params.id);
    if (!questionnaire) {
      return res.status(404).json({ message: 'Questionnaire not found' });
    }
    res.status(200).json({ message: 'Questionnaire deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
