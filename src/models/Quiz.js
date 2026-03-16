const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  questionText: String,

  options: [String],

  correctAnswer: Number,
});

const quizSchema = new mongoose.Schema(
  {
    title: String,

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    questions: [questionSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quiz", quizSchema);