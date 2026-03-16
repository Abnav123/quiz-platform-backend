import { useLocation } from "react-router-dom";

export default function Result() {
  const { state } = useLocation();

  return (
    <div className="container">
      <h2>Your Score</h2>
      <h1>{state.score}</h1>
    </div>
  );
}