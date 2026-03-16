import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Dashboard() {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/api/quizzes").then((res) => setQuizzes(res.data));
  }, []);

  return (
    <div className="container">
      <h2>Available Quizzes</h2>

      {quizzes.map((q) => (
        <button key={q._id} onClick={() => navigate(`/quiz/${q._id}`)}>
          {q.title}
        </button>
      ))}
    </div>
  );
}