const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createQuiz,
  getQuizzes,
  getQuizById,
  submitQuiz,
} = require("../controllers/quizController");

// Teacher
router.post("/", protect, createQuiz);

// Student
router.get("/", protect, getQuizzes);
router.get("/:id", protect, getQuizById);
router.post("/:id/submit", protect, submitQuiz);

module.exports = router;