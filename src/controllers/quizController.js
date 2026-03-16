const Quiz = require("../models/Quiz");
const Result = require("../models/Result");

// CREATE QUIZ (Teacher)
exports.createQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.create({
      ...req.body,
      createdBy: req.user.id,
    });

    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ message: "Error creating quiz" });
  }
};

// GET ALL QUIZZES (Student)
exports.getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find().select("-questions.correctAnswer");
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching quizzes" });
  }
};

// GET QUIZ BY ID
exports.getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id).select(
      "-questions.correctAnswer"
    );

    res.json(quiz);
  } catch (error) {
    res.status(500).json({ message: "Error fetching quiz" });
  }
};

// SUBMIT QUIZ
exports.submitQuiz = async (req, res) => {
  try {
    const { answers } = req.body;

    const quiz = await Quiz.findById(req.params.id);

    let score = 0;

    quiz.questions.forEach((q, index) => {
      if (q.correctAnswer === answers[index]) score++;
    });

    const result = await Result.create({
      student: req.user.id,
      quiz: quiz._id,
      score,
      answers,
    });

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Submission failed" });
  }
};