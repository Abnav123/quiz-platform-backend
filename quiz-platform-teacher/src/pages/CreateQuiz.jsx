import { useState } from "react";
import API from "../services/api";

export default function CreateQuiz() {
  const [title, setTitle] = useState("");

  const create = async () => {
    await API.post("/api/quizzes", {
      title,
      questions: [],
    });

    alert("Quiz created");
  };

  return (
    <div className="container">
      <h2>Create Quiz</h2>

      <input
        placeholder="Quiz Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={create}>Create</button>
    </div>
  );
}