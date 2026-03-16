import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await API.post("/api/auth/login", { email, password });

    if (res.data.role !== "student") {
      alert("Not student account");
      return;
    }

    localStorage.setItem("token", res.data.token);
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <h2>Student Login</h2>

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password"
        onChange={(e) => setPassword(e.target.value)} />

      <button onClick={login}>Login</button>
    </div>
  );
}