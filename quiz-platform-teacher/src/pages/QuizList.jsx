import { useEffect, useState } from "react";
import API from "../services/api";

export default function QuizList() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    API.get("/api/quizzes").then((res) => {
      setQuizzes(res.data);
    });
  }, []);

  return (
    <div className="container">
      <h2>Quizzes</h2>

      {quizzes.map((quiz) => (
        <div key={quiz._id}>{quiz.title}</div>
      ))}
    </div>
  );
}