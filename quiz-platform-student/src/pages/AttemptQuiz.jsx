import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

export default function AttemptQuiz() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    API.get(`/api/quizzes/${id}`).then((res) => {
      setQuiz(res.data);
      setAnswers(new Array(res.data.questions.length).fill(null));
    });
  }, []);

  const selectAnswer = (qIndex, optionIndex) => {
    const updated = [...answers];
    updated[qIndex] = optionIndex;
    setAnswers(updated);
  };

  const submit = async () => {
    const res = await API.post(`/api/quizzes/${id}/submit`, { answers });
    navigate("/result", { state: res.data });
  };

  if (!quiz) return <div className="container">Loading...</div>;

  return (
    <div className="container">
      <h2>{quiz.title}</h2>

      {quiz.questions.map((q, i) => (
        <div key={i}>
          <p>{q.questionText}</p>

          {q.options.map((opt, j) => (
            <button key={j} onClick={() => selectAnswer(i, j)}>
              {opt}
            </button>
          ))}
        </div>
      ))}

      <button onClick={submit}>Submit</button>
    </div>
  );
}